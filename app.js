(function () {
  "use strict";

  const PARAMS = {
    expName: "Chinese_BART_Fishing_Questionnaires_JS",
    datapipeExperimentId: "izYFomugF9XS",
    datapipeEndpoint: "https://pipe.jspsych.org/api/data/",
    rewardPerPump: 0.05,
    balloonBasePx: 118,
    balloonGrowthPx: 8,
    balloonMaxPx: 354,
    bartFeedbackMs: 900,
    fishFeedbackMs: 1000,
    fishTrials: 100,
    fishBandit: {
      startProbabilities: { lake1: 0.3, lake2: 0.5, lake3: 0.7 },
      bounds: [0.1, 0.9],
      decay: 0.9836,
      center: 0.5,
      diffusionSd: 0.025
    },
    storageKey: "EXP_CHINA_STATIC_JS_LAST_DATA"
  };

  const MEDIA = [
    "intro/CEXP_welcome.png",
    "intro/CEXP_bart_intro.png",
    "intro/CEXP_practice_bart.png",
    "intro/CEXP_questions.png",
    "intro/EXP_PHQ9_intro_chinese.png",
    "intro/EXP_loneliness_chinese_intro.png",
    "intro/EXP_BPSQI_intro_chinese.png",
    "intro/EXP_intro_BMRQ_chinese.png",
    "intro/EXP_ATAI_intro_chinese.png",
    "intro/EXP_BSSS4_intro_chinese.png",
    "intro/EXP_uncertainty_chinese_intro.png",
    "intro/sport7_intro.png",
    "intro/EXP_BPAAT_intro_chinese.png",
    "assets/background.png",
    "assets/redBalloon.png",
    "images/lake5.jpg",
    "images/lake1.jpg",
    "images/lake2.jpg",
    "images/lake3.png",
    "images/rod.png",
    "images/fish1.png",
    "images/fish2.png",
    "images/fish3.png",
    "images/fish4.png",
    "images/nofish.png"
  ];

  const PRACTICE_THRESHOLDS = [2, 8, 14, 20, 26];
  const FORMAL_THRESHOLDS = [2, 8, 14, 20, 26, 2, 8, 14, 20, 26, 2, 8, 14, 20, 26, 2, 8, 14, 20, 26, 2, 8, 14, 20, 26, 2, 8, 14, 20, 26];

  const runtime = {
    participantId: "",
    session: "001",
    practiceBank: 0,
    bartBank: 0,
    practiceBalloonIndex: 0,
    formalBalloonIndex: 0,
    fishTrialIndex: 0,
    fishTotal: 0,
    fishBanditState: null
  };

  const DATA_COLUMNS = [
    "subject_id", "session", "exp_name", "phase", "task", "block", "trial",
    "condition", "stimulus", "correct_response", "response", "rt", "accuracy",
    "timestamp", "scale", "question_id", "question_text", "response_label",
    "response_value", "response_text", "button_index", "balloon_index",
    "max_pumps", "n_pumps", "actual_pumps", "collected", "popped",
    "trial_earnings", "temporary_earnings", "banked_earnings", "reward_per_pump",
    "pump_log", "collect_action_counted_as_pump", "lake", "outcome",
    "nfish_total", "fish_image", "reward_probability", "lake1_probability",
    "lake2_probability", "lake3_probability", "lake1_probability_after",
    "lake2_probability_after", "lake3_probability_after", "bandit_update_rule",
    "trial_type", "time_elapsed"
  ];

  const OMIT_DYNAMIC_COLUMNS = new Set(["internal_node_id", "plugin_version"]);

  function escapeHtml(value) {
    return String(value == null ? "" : value).replace(/[&<>"']/g, function (char) {
      return {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "\"": "&quot;",
        "'": "&#39;"
      }[char];
    });
  }

  function nl2br(value) {
    return escapeHtml(value).replace(/\n/g, "<br>");
  }

  function optionList(labels, values) {
    return labels.map(function (label, index) {
      return {
        label: label,
        value: values ? values[index] : index + 1
      };
    });
  }

  function shuffle(array) {
    const copy = array.slice();
    for (let i = copy.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      const tmp = copy[i];
      copy[i] = copy[j];
      copy[j] = tmp;
    }
    return copy;
  }

  function money(value) {
    return BARTLogic.roundMoney(value).toFixed(2);
  }

  function waitMs(durationMs, callback) {
    const start = performance.now();
    function frame() {
      if (performance.now() - start >= durationMs) {
        callback();
      } else {
        requestAnimationFrame(frame);
      }
    }
    requestAnimationFrame(frame);
  }

  function timestamp() {
    return new Date().toISOString();
  }

  function safeFilenamePart(value) {
    return String(value || "anonymous").replace(/[^a-zA-Z0-9._-]+/g, "_").slice(0, 60);
  }

  function currentFilename() {
    const now = new Date().toISOString().replace(/[:.]/g, "-");
    return "sub-" + safeFilenamePart(runtime.participantId) + "_" + PARAMS.expName + "_" + now + ".csv";
  }

  function baseRow(extra) {
    return Object.assign({
      subject_id: runtime.participantId,
      session: runtime.session,
      exp_name: PARAMS.expName,
      timestamp: timestamp(),
      correct_response: "",
      accuracy: ""
    }, extra || {});
  }

  function getSavedRows() {
    return jsPsych.data.get().values().filter(function (row) {
      return row.save_row === true;
    });
  }

  function csvEscape(value) {
    if (value == null) {
      return "";
    }
    if (typeof value === "object") {
      value = JSON.stringify(value);
    }
    const text = String(value);
    if (/[",\n\r]/.test(text)) {
      return "\"" + text.replace(/"/g, "\"\"") + "\"";
    }
    return text;
  }

  function buildCsvFromRows(rows) {
    const dynamicColumns = [];
    rows.forEach(function (row) {
      Object.keys(row).forEach(function (key) {
        if (!DATA_COLUMNS.includes(key) && !OMIT_DYNAMIC_COLUMNS.has(key) && !dynamicColumns.includes(key)) {
          dynamicColumns.push(key);
        }
      });
    });
    const columns = DATA_COLUMNS.concat(dynamicColumns);
    const lines = [columns.join(",")];
    rows.forEach(function (row) {
      lines.push(columns.map(function (col) {
        return csvEscape(row[col]);
      }).join(","));
    });
    return lines.join("\n");
  }

  function cacheCurrentCsv() {
    try {
      const csv = buildCsvFromRows(getSavedRows());
      localStorage.setItem(PARAMS.storageKey, csv);
    } catch (error) {
      console.warn("Local cache failed:", error);
    }
  }

  function makeDownloadUrl(csv) {
    const blob = new Blob(["\ufeff" + csv], { type: "text/csv;charset=utf-8" });
    return URL.createObjectURL(blob);
  }

  function abortExperiment() {
    cacheCurrentCsv();
    jsPsych.endExperiment("实验已手动退出。已完成的数据已暂存在浏览器 localStorage 中。");
  }

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      abortExperiment();
    }
  });

  class ParticipantFormPlugin {
    constructor(jsPsychInstance) {
      this.jsPsych = jsPsychInstance;
    }

    trial(displayElement) {
      const params = new URLSearchParams(window.location.search);
      const participant = params.get("participant") || params.get("subject") || "";
      const session = params.get("session") || "001";
      displayElement.innerHTML = `
        <div class="center-screen">
          <form class="panel" id="participant-form">
            <h1>实验信息</h1>
            <p>请输入被试编号后开始实验。</p>
            <div class="participant-grid">
              <div class="field">
                <label for="participant-id">被试编号</label>
                <input id="participant-id" name="participant" required autocomplete="off" value="${escapeHtml(participant)}">
              </div>
              <div class="field">
                <label for="session-id">Session</label>
                <input id="session-id" name="session" required autocomplete="off" value="${escapeHtml(session)}">
              </div>
            </div>
            <button class="primary-button" type="submit">开始</button>
          </form>
        </div>`;

      displayElement.querySelector("#participant-form").addEventListener("submit", (event) => {
        event.preventDefault();
        runtime.participantId = displayElement.querySelector("#participant-id").value.trim();
        runtime.session = displayElement.querySelector("#session-id").value.trim() || "001";
        jsPsych.data.addProperties({
          subject_id: runtime.participantId,
          session: runtime.session,
          exp_name: PARAMS.expName
        });
        this.jsPsych.finishTrial({
          save_row: false,
          subject_id: runtime.participantId,
          session: runtime.session
        });
      });
    }
  }
  ParticipantFormPlugin.info = { name: "participant-form", parameters: {} };

  class BartBalloonPlugin {
    constructor(jsPsychInstance) {
      this.jsPsych = jsPsychInstance;
    }

    trial(displayElement, trial) {
      const phase = resolveParam(trial.phase);
      const maxPumps = Number(resolveParam(trial.maxPumps));
      const bankKey = phase === "practice" ? "practiceBank" : "bartBank";
      const indexKey = phase === "practice" ? "practiceBalloonIndex" : "formalBalloonIndex";
      runtime[indexKey] += 1;
      const balloonIndex = runtime[indexKey];
      const state = BARTLogic.createBartState(maxPumps, PARAMS.rewardPerPump);
      const pumpLog = [];
      const trialStart = performance.now();
      const trialTimestamp = timestamp();
      let finishing = false;

      const render = (message, mode) => {
        const size = Math.min(PARAMS.balloonMaxPx, PARAMS.balloonBasePx + state.actual_pumps * PARAMS.balloonGrowthPx);
        displayElement.innerHTML = `
          <div class="bart-stage">
            <div class="bart-topbar">
              <div class="metric"><span>${phase === "practice" ? "练习气球" : "正式气球"}</span>${balloonIndex}</div>
              <div class="metric"><span>当前打气</span>${state.actual_pumps}</div>
              <div class="metric"><span>本轮临时奖金</span>${money(state.temp_earnings)}</div>
              <div class="metric"><span>已存入总额</span>${money(runtime[bankKey])}</div>
            </div>
            <div class="balloon-area">
              <img class="balloon ${mode === "popped" ? "popped" : ""}" src="assets/redBalloon.png" alt="balloon" style="width:${size}px">
            </div>
            <div>
              <div class="bart-message">${escapeHtml(message || "")}</div>
              <div class="bart-controls">空格键：打气　Enter：回收并存入　Esc：退出</div>
            </div>
          </div>`;
      };

      const finish = () => {
        if (finishing) {
          return;
        }
        finishing = true;
        document.removeEventListener("keydown", onKeyDown);
        waitMs(PARAMS.bartFeedbackMs, () => {
          const row = baseRow({
            save_row: true,
            phase: phase,
            task: "bart",
            block: phase === "practice" ? 1 : 2,
            trial: balloonIndex,
            condition: "maxPumps_" + maxPumps,
            stimulus: "assets/redBalloon.png",
            response: state.terminal_action,
            rt: Math.round(performance.now() - trialStart),
            balloon_index: balloonIndex,
            max_pumps: maxPumps,
            n_pumps: state.actual_pumps,
            actual_pumps: state.actual_pumps,
            collected: state.collected,
            popped: state.popped,
            trial_earnings: state.collected ? state.banked_delta : 0,
            temporary_earnings: state.temp_earnings,
            banked_earnings: runtime[bankKey],
            reward_per_pump: PARAMS.rewardPerPump,
            pump_log: JSON.stringify(pumpLog),
            collect_action_counted_as_pump: false,
            timestamp: trialTimestamp
          });
          this.jsPsych.finishTrial(row);
        });
      };

      const onKeyDown = (event) => {
        if (event.repeat || finishing || state.finished) {
          return;
        }
        if (event.key === "Escape") {
          abortExperiment();
          return;
        }
        if (event.key === " " || event.code === "Space") {
          event.preventDefault();
          BARTLogic.applyBartAction(state, "pump");
          pumpLog.push({
            action: "pump",
            n_pumps_after_action: state.actual_pumps,
            time_ms: Math.round(performance.now() - trialStart)
          });
          if (state.popped) {
            render("气球爆炸了！本轮奖金为 0。", "popped");
            finish();
          } else {
            render("", "");
          }
          return;
        }
        if (event.key === "Enter") {
          event.preventDefault();
          BARTLogic.applyBartAction(state, "collect");
          runtime[bankKey] = BARTLogic.roundMoney(runtime[bankKey] + state.banked_delta);
          pumpLog.push({
            action: "collect",
            n_pumps_after_action: state.actual_pumps,
            time_ms: Math.round(performance.now() - trialStart)
          });
          render("已回收并存入奖金。", "collected");
          finish();
        }
      };

      render("", "");
      document.addEventListener("keydown", onKeyDown);
    }
  }
  BartBalloonPlugin.info = { name: "bart-balloon", parameters: {} };

  class FishTrialPlugin {
    constructor(jsPsychInstance) {
      this.jsPsych = jsPsychInstance;
    }

    trial(displayElement) {
      runtime.fishTrialIndex += 1;
      const trialNumber = runtime.fishTrialIndex;
      const trialTimestamp = timestamp();
      const start = performance.now();
      const lakes = [
        { id: "lake1", label: "湖泊 1", image: "images/lake1.jpg" },
        { id: "lake2", label: "湖泊 2", image: "images/lake2.jpg" },
        { id: "lake3", label: "湖泊 3", image: "images/lake3.png" }
      ];

      const renderChoice = () => {
        displayElement.innerHTML = `
          <div class="fish-stage">
            <div class="fish-topbar">
              <div class="metric"><span>捕鱼试次</span>${trialNumber} / ${PARAMS.fishTrials}</div>
              <div class="metric"><span>累计钓到</span>${runtime.fishTotal}</div>
            </div>
            <div class="lake-grid">
              ${lakes.map(function (lake) {
                return `<button class="lake-choice" type="button" data-lake="${lake.id}" aria-label="${lake.label}">
                  <img src="${lake.image}" alt="${lake.label}">
                </button>`;
              }).join("")}
            </div>
          </div>`;
        displayElement.querySelectorAll(".lake-choice").forEach((button) => {
          button.addEventListener("click", () => chooseLake(button.dataset.lake), { once: true });
        });
      };

      const chooseLake = (lakeId) => {
        displayElement.querySelectorAll(".lake-choice").forEach(function (button) {
          button.disabled = true;
        });
        const probabilitiesBefore = BanditLogic.snapshotProbabilities(runtime.fishBanditState);
        const outcome = BanditLogic.sampleOutcome(runtime.fishBanditState, lakeId);
        BanditLogic.diffuseAllProbabilities(runtime.fishBanditState);
        const probabilitiesAfter = BanditLogic.snapshotProbabilities(runtime.fishBanditState);
        const won = outcome === 1;
        const fishImage = won ? shuffle(["images/fish2.png", "images/fish3.png", "images/fish4.png"])[0] : "images/nofish.png";
        if (won) {
          runtime.fishTotal += 1;
        }
        displayElement.innerHTML = `
          <div class="fish-stage">
            <div class="fish-feedback">
              <h2>${won ? "你钓到了一条鱼！" : "你没有钓到鱼。"}</h2>
              <img src="${fishImage}" alt="${won ? "fish" : "no fish"}">
            </div>
          </div>`;
        waitMs(PARAMS.fishFeedbackMs, () => {
          this.jsPsych.finishTrial(baseRow({
            save_row: true,
            phase: "fishing",
            task: "fishing_bandit",
            block: 3,
            trial: trialNumber,
            condition: lakeId,
            stimulus: lakeId,
            response: lakeId,
            rt: Math.round(performance.now() - start),
            lake: lakeId,
            outcome: outcome,
            nfish_total: runtime.fishTotal,
            fish_image: fishImage,
            reward_probability: probabilitiesBefore[lakeId],
            lake1_probability: probabilitiesBefore.lake1,
            lake2_probability: probabilitiesBefore.lake2,
            lake3_probability: probabilitiesBefore.lake3,
            lake1_probability_after: probabilitiesAfter.lake1,
            lake2_probability_after: probabilitiesAfter.lake2,
            lake3_probability_after: probabilitiesAfter.lake3,
            bandit_update_rule: "decaying_gaussian_random_walk",
            timestamp: trialTimestamp
          }));
        });
      };

      renderChoice();
    }
  }
  FishTrialPlugin.info = { name: "fish-trial", parameters: {} };

  class UploadPlugin {
    constructor(jsPsychInstance) {
      this.jsPsych = jsPsychInstance;
    }

    trial(displayElement) {
      const rows = getSavedRows();
      const csv = buildCsvFromRows(rows);
      const filename = currentFilename();
      const downloadUrl = makeDownloadUrl(csv);
      const setStatus = (statusText) => {
        displayElement.innerHTML = `
          <div class="center-screen">
            <div class="panel">
              <h1>实验结束</h1>
              <p class="upload-status">${escapeHtml(statusText)}</p>
              <a class="download-link" href="${downloadUrl}" download="${escapeHtml(filename)}">下载本地 CSV 备份</a>
              <p class="key-hint">按空格键结束。</p>
            </div>
          </div>`;
      };

      setStatus("正在上传数据，请稍候。");
      uploadToDataPipe(csv, filename)
        .then(function () {
          localStorage.removeItem(PARAMS.storageKey);
          setStatus("数据已上传到 DataPipe/OSF。\n建议同时保留本地 CSV 备份。");
        })
        .catch(function (error) {
          cacheCurrentCsv();
          setStatus("DataPipe 上传没有成功。\n错误信息：" + error.message + "\n请点击下方链接保存本地 CSV 备份。");
        });

      const onKeyDown = (event) => {
        if (event.key === " " || event.code === "Space") {
          event.preventDefault();
          document.removeEventListener("keydown", onKeyDown);
          this.jsPsych.finishTrial({ save_row: false, upload_filename: filename });
        }
      };
      document.addEventListener("keydown", onKeyDown);
    }
  }
  UploadPlugin.info = { name: "upload-datapipe", parameters: {} };

  function resolveParam(value) {
    return typeof value === "function" ? value() : value;
  }

  function resetFishBandit() {
    runtime.fishBanditState = BanditLogic.createRestlessBanditState(PARAMS.fishBandit);
  }

  async function uploadToDataPipe(csv, filename) {
    const response = await fetch(PARAMS.datapipeEndpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        experimentID: PARAMS.datapipeExperimentId,
        filename: filename,
        data: csv
      })
    });
    if (!response.ok) {
      throw new Error("HTTP " + response.status + " " + response.statusText);
    }
    return response.text();
  }

  function introImageTrial(src, alt) {
    return {
      type: jsPsychHtmlKeyboardResponse,
      stimulus: `
        <div class="center-screen">
          <div>
            <img class="intro-image" src="${src}" alt="${escapeHtml(alt)}">
            <div class="key-hint">按空格键继续</div>
          </div>
        </div>`,
      choices: [" "],
      data: { save_row: false }
    };
  }

  function messageTrial(title, body) {
    return {
      type: jsPsychHtmlKeyboardResponse,
      stimulus: `
        <div class="center-screen">
          <div class="panel">
            <h1>${escapeHtml(title)}</h1>
            <p>${nl2br(body)}</p>
            <p class="key-hint">按空格键继续</p>
          </div>
        </div>`,
      choices: [" "],
      data: { save_row: false }
    };
  }

  function silentAction(action) {
    return {
      type: jsPsychHtmlKeyboardResponse,
      stimulus: "",
      choices: "NO_KEYS",
      trial_duration: 1,
      response_ends_trial: false,
      data: { save_row: false },
      on_start: action
    };
  }

  function bartBlock(phase, thresholds) {
    return {
      timeline: [{
        type: BartBalloonPlugin,
        phase: phase,
        maxPumps: function () {
          return jsPsych.timelineVariable("maxPumps", true);
        }
      }],
      timeline_variables: thresholds.map(function (maxPumps) {
        return { maxPumps: maxPumps };
      }),
      randomize_order: true
    };
  }

  function renderQuestion(item) {
    return `
      <div class="question-card">
        <div class="question-index">第 ${item.number} 题，共 97 题</div>
        <h2>${nl2br(item.text)}</h2>
        ${item.hint ? `<div class="question-hint">${nl2br(item.hint)}</div>` : ""}
      </div>`;
  }

  function makeChoiceQuestion(item) {
    const labels = item.options.map(function (option) {
      return option.label;
    });
    return {
      type: jsPsychHtmlButtonResponse,
      stimulus: renderQuestion(item),
      choices: labels,
      button_html: '<button class="choice-button">%choice%</button>',
      data: {
        save_row: true,
        phase: "questionnaire",
        task: "questionnaire",
        scale: item.scale,
        question_id: "Q" + item.number,
        question_text: ""
      },
      on_finish: function (data) {
        const selected = item.options[data.response];
        const row = baseRow({
          phase: "questionnaire",
          task: "questionnaire",
          block: 4,
          trial: item.number,
          condition: item.scale,
          stimulus: "Q" + item.number,
          response: selected ? selected.value : "",
          rt: data.rt == null ? "" : data.rt,
          scale: item.scale,
          question_id: "Q" + item.number,
          question_text: "",
          response_label: "",
          response_value: selected ? selected.value : "",
          button_index: data.response
        });
        Object.assign(data, row);
      }
    };
  }

  function makeTextQuestion(item) {
    return {
      type: jsPsychSurveyText,
      questions: [{
        prompt: renderQuestion(item),
        name: "answer",
        required: true,
        rows: item.rows || 1,
        columns: item.columns || 46
      }],
      button_label: "继续",
      data: {
        save_row: true,
        phase: "questionnaire",
        task: "questionnaire",
        scale: item.scale,
        question_id: "Q" + item.number,
        question_text: ""
      },
      on_finish: function (data) {
        const answer = data.response && data.response.answer != null ? data.response.answer : "";
        const row = baseRow({
          phase: "questionnaire",
          task: "questionnaire",
          block: 4,
          trial: item.number,
          condition: item.scale,
          stimulus: "Q" + item.number,
          response: answer,
          rt: data.rt == null ? "" : data.rt,
          scale: item.scale,
          question_id: "Q" + item.number,
          question_text: "",
          response_text: answer
        });
        Object.assign(data, row);
      }
    };
  }

  function item(kind, scale, number, text, options, hint) {
    return { kind: kind, scale: scale, number: number, text: text, options: options || [], hint: hint || "" };
  }

  function makeScaleItems(scale, rows, options) {
    return rows.map(function (row) {
      return item("choice", scale, row.number, row.text, options);
    });
  }

  const OPTIONS = {
    yesNo: optionList(["是", "否"], [1, 0]),
    phq9: optionList(["根本没有", "有几天", "一半以上的天数", "几乎每天"], [0, 1, 2, 3]),
    loneliness: optionList(["从不", "很少", "有时", "经常"], [1, 2, 3, 4]),
    psqi5: optionList(["无", "<1次/周", "1~2次/周", "≥3次/周"], [0, 1, 2, 3]),
    psqi6: optionList(["很差", "较差", "较好", "很好"], [0, 1, 2, 3]),
    agreement5: optionList(["非常不同意", "不同意", "一般", "同意", "非常同意"], [1, 2, 3, 4, 5]),
    atai: optionList(["非常不同意", "1", "2", "3", "4", "5", "6", "7", "8", "9", "非常同意"], [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
    uncertainty: optionList(["极不符合", "不符合", "不确定", "符合", "极为符合"], [1, 2, 3, 4, 5]),
    days: optionList(["0天", "1天", "2天", "3天", "4天", "5天", "6天", "7天"], [0, 1, 2, 3, 4, 5, 6, 7]),
    bpaat1: optionList(["无", "1–2 次/周", ">3 次/周"], [0, 1, 2]),
    bpaat2: optionList(["无", "1–2 次/周", "3–4 次/周", ">5 次/周"], [0, 1, 2, 3])
  };

  const DEMOGRAPHIC_ITEMS = [
    item("choice", "demographics", 1, "1.您的性别是？", optionList(["女", "男", "非二元/跨性别者"])),
    item("text", "demographics", 2, "2.您的年龄是？\n(若23岁，请填入“23”)", [], "回答完毕后，请按“继续”进入下一题。"),
    item("choice", "demographics", 3, "3.您的当前婚恋状况是?", optionList(["单身", "恋爱中", "已婚", "离异或丧偶"])),
    item("choice", "demographics", 4, "4.您目前持有的国籍是？\n(请根据护照所属国籍填写)", optionList(["中国", "马来西亚", "其它"])),
    item("choice", "demographics", 5, "5.您主要信仰的宗教是？", optionList(["佛教", "基督教", "伊斯兰教", "印度教", "道教 / 民间信仰", "无宗教信仰", "其它"])),
    item("choice", "demographics", 6, "6.您家庭上一年度的总收入约为多少？", optionList(["20,000 及以下", "20,001 – 50,000", "50,001 – 100,000", "100,001 – 150,000", "150,001 – 200,000", "超过 200,000"]), "请根据您的国籍填写当地币种数额。"),
    item("text", "demographics", 7, "7.您的身高是（厘米CM）？例如：165", [], "此项目仅用于计算健康指标，而非用于身份识别。"),
    item("text", "demographics", 8, "8.您的体重是（千克kg）？例如：55", [], "此项目仅用于计算健康指标，而非用于身份识别。"),
    item("text", "demographics", 9, "9.你的腰围是多少厘米(CM)？(请填写，例如，90）", [], "此项目仅用于计算健康指标，而非用于身份识别。"),
    item("choice", "alcohol_smoking_health_music", 10, "10.曾经喝过任何种类的酒精\n（例如：米酒、黄酒、红酒等含有酒精饮料）", OPTIONS.yesNo),
    item("choice", "alcohol_smoking_health_music", 11, "11.您最近一次喝酒是在什么时候？", optionList(["过去30天内", "过去12个月内", "超过12个月前", "从未喝过酒"])),
    item("choice", "alcohol_smoking_health_music", 12, "12.在过去12个月中，您通常多久喝一次酒？", optionList(["每天", "每周几次", "每月几次", "很少", "从不"])),
    item("choice", "alcohol_smoking_health_music", 13, "13.在过去12个月中，您每次通常喝多少杯酒？", optionList(["0杯", "1杯", "2杯", "3杯", "4杯", "5杯或更多"], [0, 1, 2, 3, 4, 5])),
    item("choice", "alcohol_smoking_health_music", 14, "14.您目前的吸烟情况是：", optionList(["从未吸烟", "过去吸过，但已戒烟", "现在仍在吸烟"])),
    item("text", "alcohol_smoking_health_music", 15, "15.请填写你的吸烟史：", [], "- 如果您现在仍在吸烟，请填您大约几岁开始形成规律性吸烟习惯，以及目前已经吸烟多少年了？(填写，例如：20岁；2年）\n\n- 如果您过去吸过但已戒烟，请填写您累计吸烟多少年？\n\n- 如果您从未吸烟。请填写“无”"),
    item("choice", "alcohol_smoking_health_music", 16, "16.在您近一年的吸烟情况中，哪一项最符合您？", optionList(["近一年未吸烟", "一年少于5次（非常偶尔，如聚会或压力大时）", "每月1-3次", "每周1-3次", "几乎每天吸，但少于一支", "每天1-5支", "每天6-10支", "每天11-20支", "每天21支及以上"])),
    item("choice", "alcohol_smoking_health_music", 17, "17.您觉得自己现在的健康状况如何？", optionList(["很好", "好", "一般", "不好", "很不好"])),
    item("choice", "alcohol_smoking_health_music", 18, "18.听力状况", optionList(["无（无医学诊断的听力损失、不佩戴助听器、无持续耳鸣）", "有（如“轻度听力下降”“佩戴助听器”“持续耳鸣”等）"])),
    item("choice", "alcohol_smoking_health_music", 19, "19.您是否接受过正规音乐培训？", OPTIONS.yesNo, "例如：\n• 作为音乐专业在音乐学院/艺术学校学习；\n• 或在琴行/培训中心跟随持证老师系统学习，并参加中国音乐学院社会艺术考级、ABRSM（英国皇家音乐学院联合考级）、Trinity（英国圣三一考级）等获得相应证书；"),
    item("choice", "alcohol_smoking_health_music", 20, "20.您目前是否每周至少练习一次乐器/声乐，或在机构/学校担任音乐教师\n并定期授课，或定期参与乐队/合唱团排练与演出？", OPTIONS.yesNo)
  ];

  const PHQ9_ROWS = [
    { number: 21, text: "21.做事情缺乏兴趣或乐趣。" },
    { number: 22, text: "22.情绪低落、沮丧或绝望。" },
    { number: 23, text: "23.入睡困难、睡不安或睡得太多。" },
    { number: 24, text: "24.感到疲惫或缺乏精力。" },
    { number: 25, text: "25.食欲不振或吃得过多。" },
    { number: 26, text: "26.对自己感觉很差—觉得自己是失败者，或让自己或家人失望。" },
    { number: 27, text: "27.难以集中注意力，如阅读报纸或看电视时。" },
    { number: 28, text: "28.动作或说话慢到让别人注意到?\n或者相反—坐立不安，动来动去比平常多得多。" },
    { number: 29, text: "29.有想过自己不如死了，或者以某种方式伤害自己。" }
  ];

  const LONELINESS_ROWS = [
    { number: 30, text: "30.缺少别人的陪伴" },
    { number: 31, text: "31.没有人可以寻求帮助" },
    { number: 32, text: "32.我是一个愿意交朋友的人" },
    { number: 33, text: "33.我感到被冷落" },
    { number: 34, text: "34.我感到和其他人疏远了" },
    { number: 35, text: "35.当我需要的时候，我能找到人陪我" },
    { number: 36, text: "36.我因为很少与别人来往而感到伤心" },
    { number: 37, text: "37.虽然身边有人陪，但没人关心我" }
  ];

  const PSQI_ITEMS = [
    item("text", "PSQI", 38, "38.近一个月，晚上上床睡觉的时间通常是几点钟？\n（注意：上床时间指的是你躺在床上准备入睡的时间，不是你实际入睡的时间。）\n(请填写，例如, 22:30)"),
    item("text", "PSQI", 39, "39. 近一个月，通常早上几点起床？ (请填写，例如, 07:00)"),
    item("text", "PSQI", 40, "40.近一个月，每晚入睡通常需要多少分钟？\n(请填写数字，例如15分钟, 则填写15)"),
    item("text", "PSQI", 41, "41.近一个月，每夜通常实际睡眠多少小时？（不等于卧床时间）"),
    item("choice", "PSQI", 42, "42.近一个月，因夜间易醒或早醒影响睡眠而烦恼？", OPTIONS.psqi5),
    item("choice", "PSQI", 43, "43.近一个月，总的来说，您认为自己的睡眠质量如何？", OPTIONS.psqi6)
  ];

  const BMRQ_ROWS = [
    { number: 44, text: "44.当我和某个人分享音乐时，我觉得会和他有某种特殊的联系。" },
    { number: 45, text: "45.我在空闲时间几乎不听音乐。" },
    { number: 46, text: "46.我喜欢听带有情感的音乐。" },
    { number: 47, text: "47.当我孤独时，音乐陪伴着我。" },
    { number: 48, text: "48.我不喜欢跳舞，即使是我喜欢的音乐也不例外。" },
    { number: 49, text: "49.音乐使我和他人之间建立了纽带。" },
    { number: 50, text: "50.我了解我自己喜欢的音乐。" },
    { number: 51, text: "51.当听到某些音乐时，我会情绪激动。" },
    { number: 52, text: "52.音乐使我感到平静和放松。" },
    { number: 53, text: "53.音乐常常让我想跳舞。" },
    { number: 54, text: "54.我总是在寻找新的音乐。" },
    { number: 55, text: "55.当我听到一段我非常喜欢的旋律时，我可能会流泪或哭泣。" },
    { number: 56, text: "56.我喜欢和他人一起唱歌或演奏乐器。" },
    { number: 57, text: "57.音乐能帮助我冷静下来。" },
    { number: 58, text: "58.我会情不自禁地跟着我喜欢的音乐哼唱。" },
    { number: 59, text: "59.在音乐会上，我感觉与表演者和观众联结到了一起。" },
    { number: 60, text: "60.我在音乐及其相关消费上花了不少钱。" },
    { number: 61, text: "61.当我听到一段我喜欢的旋律时，我有时会感受到颤栗的快感。" },
    { number: 62, text: "62.音乐使我感到舒适。" },
    { number: 63, text: "63.当我听到一段我非常喜欢的曲调时，我会情不自禁地打节拍\n或跟随节拍移动。" }
  ];

  const ATAI_ROWS = [
    { number: 64, text: "64.我害怕人工智能。" },
    { number: 65, text: "65.我信任人工智能。" },
    { number: 66, text: "66.人工智能将会摧毁人类。" },
    { number: 67, text: "67.人工智能将会丰富人类。" },
    { number: 68, text: "68.人工智能将会导致大量失业。" }
  ];

  const BSSS_ROWS = [
    { number: 69, text: "69.我对几乎所有新鲜事物都感兴趣" },
    { number: 70, text: "70.如果我在同一个地方待太久，我会感到非常不舒服" },
    { number: 71, text: "71.冒险总是让我感到快乐" },
    { number: 72, text: "72.我会做任何事情，只要它是令人感到刺激和兴奋的" },
    { number: 73, text: "73.我总是喜欢做别人以前没有做过的事情" },
    { number: 74, text: "74.如果我长时间做同样的事情，我会坐立不安" },
    { number: 75, text: "75.我喜欢和有冒险精神的人交往" },
    { number: 76, text: "76.为了追求新的刺激和兴奋，我可以违反规章制度" }
  ];

  const UNCERTAINTY_ROWS = [
    { number: 77, text: "77.无法预料的事情会让我心烦意乱。" },
    { number: 78, text: "78.如果不能掌握我所需要的全部信息，我会很沮丧。" },
    { number: 79, text: "79.不确定性使我很难拥有一个完美的生活。" },
    { number: 80, text: "80.我做事总会未雨绸缪，以避免措手不及。" },
    { number: 81, text: "81.即使有最好的计划，一个小意外也能搞砸我的全盘计划。" },
    { number: 82, text: "82.当到了采取行动的时候，不确定性会让我停滞不前。" },
    { number: 83, text: "83.当我感到不确定时，我就不能很好地表现自己。" },
    { number: 84, text: "84.我总是想知道我的未来是什么样子的。" },
    { number: 85, text: "85.我无法忍受突发状况。" },
    { number: 86, text: "86.一点点的疑惑都会阻止我行动。" },
    { number: 87, text: "87.在做事之前，我应该能够规划好一切。" },
    { number: 88, text: "88.我必须摆脱所有不确定的情形。" }
  ];

  const SPORTS_ITEMS = [
    item("choice", "IPAQ_short", 89, "89.最近7天内，您有几天做了剧烈的体育活动，像是提重物、挖掘、有氧运动或是快速骑车? （天）", OPTIONS.days),
    item("text", "IPAQ_short", 90, "90.在这其中一天您通常会花多少分钟在剧烈的体育活动上?\n像是提重物、挖掘、有氧运动或是快速骑车。\n（分钟）"),
    item("choice", "IPAQ_short", 91, "91.最近7天内，您有几天做了适度的体育活动，像是提轻的物品、以平常的速度骑车或打双人网球? 请不要包括走路。", OPTIONS.days),
    item("text", "IPAQ_short", 92, "92.在这其中一天您通常会花多少分钟在适度的体育活动上?\n\n像是提轻的物品、以平常的速度骑车或打双人网球\n请不要包括走路。\n（分钟）"),
    item("choice", "IPAQ_short", 93, "93.最近7天内，您有几天是步行，且一次步行至少10分钟?", OPTIONS.days),
    item("text", "IPAQ_short", 94, "94.在这其中每一天您通常花多少分钟在步行上?\n（分钟）"),
    item("text", "IPAQ_short", 95, "95.最近七天内，每个工作日您平均有多少小时是坐着的?\n（小时）")
  ];

  const BPAAT_ITEMS = [
    item("choice", "BPAAT", 96, "96.您每周通常有几次进行持续20分钟、让您出汗或气喘吁吁的剧烈身体活动？", OPTIONS.bpaat1),
    item("choice", "BPAAT", 97, "97.您每周通常有几次进行持续30分钟的中等强度身体活动（例如快走），\n让您的心率加快或呼吸比平时更急促？", OPTIONS.bpaat2)
  ];

  const QUESTION_ITEMS = []
    .concat(DEMOGRAPHIC_ITEMS)
    .concat(makeScaleItems("PHQ9", PHQ9_ROWS, OPTIONS.phq9))
    .concat(makeScaleItems("Loneliness", LONELINESS_ROWS, OPTIONS.loneliness))
    .concat(PSQI_ITEMS)
    .concat(makeScaleItems("BMRQ", BMRQ_ROWS, OPTIONS.agreement5))
    .concat(makeScaleItems("ATAI", ATAI_ROWS, OPTIONS.atai))
    .concat(makeScaleItems("BSSS", BSSS_ROWS, OPTIONS.agreement5))
    .concat(makeScaleItems("Uncertainty", UNCERTAINTY_ROWS, OPTIONS.uncertainty))
    .concat(SPORTS_ITEMS)
    .concat(BPAAT_ITEMS);

  const INTRO_BY_QUESTION = {
    21: ["intro/EXP_PHQ9_intro_chinese.png", "PHQ9"],
    30: ["intro/EXP_loneliness_chinese_intro.png", "Loneliness"],
    38: ["intro/EXP_BPSQI_intro_chinese.png", "PSQI"],
    44: ["intro/EXP_intro_BMRQ_chinese.png", "BMRQ"],
    64: ["intro/EXP_ATAI_intro_chinese.png", "ATAI"],
    69: ["intro/EXP_BSSS4_intro_chinese.png", "BSSS"],
    77: ["intro/EXP_uncertainty_chinese_intro.png", "Uncertainty"],
    89: ["intro/sport7_intro.png", "Sports"],
    96: ["intro/EXP_BPAAT_intro_chinese.png", "BPAAT"]
  };

  const jsPsych = initJsPsych({
    display_element: "jspsych-target",
    minimum_valid_rt: 0,
    on_data_update: function () {
      cacheCurrentCsv();
    },
    on_finish: function () {
      cacheCurrentCsv();
    }
  });

  const timeline = [];

  timeline.push({
    type: jsPsychPreload,
    images: MEDIA,
    show_progress_bar: true,
    message: "材料加载中，请稍候。"
  });

  timeline.push({
    type: jsPsychFullscreen,
    fullscreen_mode: true,
    message: "<p>实验将进入全屏模式。</p>",
    button_label: "进入全屏",
    data: { save_row: false }
  });

  timeline.push({ type: ParticipantFormPlugin });
  timeline.push(introImageTrial("intro/CEXP_welcome.png", "欢迎"));
  timeline.push(introImageTrial("intro/CEXP_bart_intro.png", "BART说明"));
  timeline.push(introImageTrial("intro/CEXP_practice_bart.png", "BART练习说明"));

  const practiceLoop = {
    timeline: [
      silentAction(function () {
        runtime.practiceBank = 0;
        runtime.practiceBalloonIndex = 0;
      }),
      bartBlock("practice", PRACTICE_THRESHOLDS),
      {
        type: jsPsychHtmlKeyboardResponse,
        stimulus: `
          <div class="center-screen">
            <div class="panel">
              <h1>练习结束</h1>
              <p>如果已经理解气球任务，请按 Y 进入正式任务。<br>如果想再练习一次，请按 N。</p>
            </div>
          </div>`,
        choices: ["y", "n"],
        data: { save_row: false }
      }
    ],
    loop_function: function (data) {
      const values = data.values();
      const last = values[values.length - 1];
      return last.response === "n";
    }
  };
  timeline.push(practiceLoop);

  timeline.push(silentAction(function () {
    runtime.bartBank = 0;
    runtime.formalBalloonIndex = 0;
  }));
  timeline.push(messageTrial("正式气球任务", "下面进入正式任务。\n空格键打气，Enter 回收。"));
  timeline.push(bartBlock("formal", FORMAL_THRESHOLDS));
  timeline.push({
    type: jsPsychHtmlKeyboardResponse,
    stimulus: function () {
      return `
        <div class="center-screen">
          <div class="panel">
            <h1>BART 结束</h1>
            <p>本任务累计存入金额：${money(runtime.bartBank)}</p>
            <p class="key-hint">按空格键继续</p>
          </div>
        </div>`;
    },
    choices: [" "],
    data: { save_row: false }
  });

  timeline.push(messageTrial(
    "捕鱼任务",
    "下面你会看到三个湖泊。每次请选择一个湖泊进行钓鱼。\n每个湖泊钓到鱼的概率会随时间缓慢变化，因此需要根据反馈持续调整选择。"
  ));
  timeline.push(silentAction(function () {
    runtime.fishTrialIndex = 0;
    runtime.fishTotal = 0;
    resetFishBandit();
  }));
  timeline.push({
    timeline: [{ type: FishTrialPlugin }],
    repetitions: PARAMS.fishTrials
  });
  timeline.push(messageTrial("捕鱼任务结束", "捕鱼任务已完成。"));

  timeline.push(introImageTrial("intro/CEXP_questions.png", "问卷说明"));
  QUESTION_ITEMS.forEach(function (question) {
    if (INTRO_BY_QUESTION[question.number]) {
      timeline.push(introImageTrial(INTRO_BY_QUESTION[question.number][0], INTRO_BY_QUESTION[question.number][1]));
    }
    timeline.push(question.kind === "text" ? makeTextQuestion(question) : makeChoiceQuestion(question));
  });

  timeline.push({
    type: UploadPlugin
  });

  timeline.push({
    type: jsPsychFullscreen,
    fullscreen_mode: false,
    delay_after: 0,
    data: { save_row: false }
  });

  jsPsych.run(timeline);
})();
