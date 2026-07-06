(function (global) {
  "use strict";

  function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
  }

  function roundProbability(value) {
    return Math.round(value * 10000) / 10000;
  }

  function gaussianNoise(sd) {
    let u = 0;
    let v = 0;
    while (u === 0) u = Math.random();
    while (v === 0) v = Math.random();
    return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v) * sd;
  }

  function reflectIntoBounds(value, min, max) {
    let reflected = value;
    while (reflected < min || reflected > max) {
      if (reflected < min) {
        reflected = min + (min - reflected);
      }
      if (reflected > max) {
        reflected = max - (reflected - max);
      }
    }
    return clamp(reflected, min, max);
  }

  function createRestlessBanditState(config) {
    const startProbabilities = config.startProbabilities || { lake1: 0.3, lake2: 0.5, lake3: 0.7 };
    return {
      probabilities: Object.assign({}, startProbabilities),
      bounds: config.bounds || [0.1, 0.9],
      decay: config.decay == null ? 0.9836 : config.decay,
      center: config.center == null ? 0.5 : config.center,
      diffusionSd: config.diffusionSd == null ? 0.025 : config.diffusionSd
    };
  }

  function snapshotProbabilities(state) {
    return {
      lake1: roundProbability(state.probabilities.lake1),
      lake2: roundProbability(state.probabilities.lake2),
      lake3: roundProbability(state.probabilities.lake3)
    };
  }

  function sampleOutcome(state, lakeId) {
    const probability = state.probabilities[lakeId];
    if (probability == null) {
      throw new Error("Unknown lake id: " + lakeId);
    }
    return Math.random() < probability ? 1 : 0;
  }

  function diffuseAllProbabilities(state) {
    const min = state.bounds[0];
    const max = state.bounds[1];
    Object.keys(state.probabilities).forEach(function (lakeId) {
      const current = state.probabilities[lakeId];
      const drifted = state.decay * current + (1 - state.decay) * state.center + gaussianNoise(state.diffusionSd);
      state.probabilities[lakeId] = roundProbability(reflectIntoBounds(drifted, min, max));
    });
    return state;
  }

  global.BanditLogic = {
    createRestlessBanditState: createRestlessBanditState,
    snapshotProbabilities: snapshotProbabilities,
    sampleOutcome: sampleOutcome,
    diffuseAllProbabilities: diffuseAllProbabilities,
    reflectIntoBounds: reflectIntoBounds
  };
})(typeof window !== "undefined" ? window : globalThis);
