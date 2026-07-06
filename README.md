# 中文实验静态网页版

这个文件夹是原 PsychoPy/PsychoJS 项目的静态网页重写版。原始项目已经复制到 `original_psychopy_copy/`；当前网页入口是 `index.html`，主程序是 `app.js`，BART 计数逻辑单独放在 `bart-logic.js`。

网页使用 jsPsych 7.3.4；fullscreen 插件使用当前可用且兼容 jsPsych 7 的 2.1.0。

## 运行方式

在本文件夹启动静态服务器：

```powershell
python -m http.server 8080
```

然后打开：

```text
http://localhost:8080/
```

当前本地服务器已启动在：

```text
http://127.0.0.1:8080/
```

## 实验流程

欢迎/说明图 → BART 练习与理解检查 → 正式 BART 30 个气球 → 动态概率捕鱼任务 100 次 → 97 题问卷 → DataPipe 上传与本地 CSV 备份。

## BART 计数修正

新程序只在 `Space` 打气时执行 `actual_pumps += 1`。`Enter` 只触发回收并存入奖金，不改变 `actual_pumps`。因此：

- 非爆炸气球：`n_pumps` 是真实打气次数，不包含最后的回收键。
- 爆炸气球：`n_pumps` 是爆炸前真实打气次数，不会被错误减 1。
- `pump_log` 会记录 `pump` 和 `collect` 两类动作，便于后续审查。

## 数据上传

DataPipe ID：`izYFomugF9XS`

程序在结束页尝试把 CSV 上传到 DataPipe API，并同时提供本地 CSV 下载链接。若上传失败，页面会提示错误，并保留本地下载兜底。

## 捕鱼任务动态概率

捕鱼任务现在是 3 臂 restless Bernoulli bandit。三个鱼塘初始概率仍为 `0.30 / 0.50 / 0.70`，但每个 trial 后三个鱼塘都会按 decaying Gaussian random walk 缓慢漂移：

```text
p_next = decay * p_current + (1 - decay) * 0.50 + Gaussian(0, diffusion_sd)
```

当前参数：

- `decay = 0.9836`
- `diffusion_sd = 0.025`
- `bounds = [0.10, 0.90]`

CSV 会记录每一 trial 选择前的 `lake1_probability`、`lake2_probability`、`lake3_probability`、被选鱼塘的 `reward_probability`，以及更新后的概率列，方便后续计算建模。

## 问卷数据

问卷界面仍显示中文题干，但 CSV 不再记录中文题干和中文选项标签。问卷数据只记录 `question_id`、`scale`、`response_value`、`button_index`，文本输入题保留被试原始输入。

## 测试

```powershell
node --check app.js
node tests/bart-logic.test.js
node tests/bandit-logic.test.js
```

已完成的本地检查：

- `node --check app.js`
- `node tests/bart-logic.test.js`
- `node tests/bandit-logic.test.js`
- 浏览器烟雾测试：练习 BART 中 `Space` 后 `Enter`，输出 `n_pumps=1`、`popped=false`、`collected=true`、`collect_action_counted_as_pump=false`
- 结构检查：正式 BART 30 个气球、动态概率捕鱼 100 次、问卷 1-97 题无缺号
