(function (global) {
  "use strict";

  function roundMoney(value) {
    return Math.round(value * 100) / 100;
  }

  function createBartState(maxPumps, rewardPerPump) {
    return {
      max_pumps: Number(maxPumps),
      reward_per_pump: Number(rewardPerPump),
      actual_pumps: 0,
      temp_earnings: 0,
      popped: false,
      collected: false,
      finished: false,
      terminal_action: "",
      banked_delta: 0
    };
  }

  function applyBartAction(state, action) {
    if (!state || state.finished) {
      return state;
    }

    if (action === "pump") {
      state.actual_pumps += 1;
      state.temp_earnings = roundMoney(state.actual_pumps * state.reward_per_pump);

      if (state.actual_pumps >= state.max_pumps) {
        state.popped = true;
        state.finished = true;
        state.terminal_action = "pop";
        state.temp_earnings = 0;
        state.banked_delta = 0;
      }
      return state;
    }

    if (action === "collect") {
      state.collected = true;
      state.finished = true;
      state.terminal_action = "collect";
      state.banked_delta = roundMoney(state.temp_earnings);
      return state;
    }

    throw new Error("Unknown BART action: " + action);
  }

  function simulateBartActions(maxPumps, rewardPerPump, actions) {
    const state = createBartState(maxPumps, rewardPerPump);
    const log = [];

    actions.forEach(function (action) {
      if (state.finished) {
        return;
      }
      applyBartAction(state, action);
      log.push({
        action: action,
        n_pumps: state.actual_pumps,
        popped: state.popped,
        collected: state.collected,
        temp_earnings: state.temp_earnings,
        banked_delta: state.banked_delta
      });
    });

    return { state: state, log: log };
  }

  global.BARTLogic = {
    createBartState: createBartState,
    applyBartAction: applyBartAction,
    simulateBartActions: simulateBartActions,
    roundMoney: roundMoney
  };
})(typeof window !== "undefined" ? window : globalThis);
