/* Shared layout + Nokta helpers for "Virgülden Sonra". */
(function (LI) {
  'use strict';
  const { clamp } = LI.E;
  LI.KD = {
    /** positions for 16:9 and 9:16 */
    L(env) {
      return env.V
        ? {
          CX: { x: 0, y: -770, s: 44, w: 960 },
          NUM: { x: 0, y: -640, s: 130 },
          TB: { x: 0, cw: 245, hy: -480, dy: -390, vy: -270, s: 40 },
          RL: { x0: -440, x1: 440, y: [-480, -310, -140], h: 34, ly: 52, s: 42 },
          E: { x: 0, y: [-470, -340, -210, -90], s: 50, w: 980 },
          W: { x: 0, y: [-150, -80], s: 42, w: 960 },
          SUM: { x: 0, y: [-520, -410, -290, -170], s: 48, w: 960 },
          nx: -360, gy: 560, s: 1.15 }
        : {
          CX: { x: 60, y: -440, s: 50, w: 1300 },
          NUM: { x: 60, y: -330, s: 130 },
          TB: { x: 100, cw: 250, hy: -170, dy: -85, vy: 30, s: 44 },
          RL: { x0: -440, x1: 640, y: [-200, -50, 100], h: 36, ly: 50, s: 46 },
          E: { x: 110, y: [-170, -50, 70, 180], s: 56, w: 1250 },
          W: { x: 100, y: [160, 235], s: 50, w: 1250 },
          SUM: { x: 100, y: [-230, -130, -20, 90], s: 56, w: 1250 },
          nx: -800, gy: 262, s: 1.15 };
    },
    cam(env, o = {}) { return Object.assign({ x: env.V ? 0 : -60, y: env.V ? 60 : 0, zoom: 1, rot: 0, tilt: 1 }, o); },
    /** pupils + face toward a world point */
    look(p, target) {
      const e = LI.Nokta.eyes(p)[0];
      const dx = target[0] - e[0], dy = target[1] - e[1], d = Math.hypot(dx, dy) || 1;
      p.lookX = clamp(dx / d * 1.1, -1, 1); p.lookY = clamp(dy / d * 1.1, -1, 1);
      p.turn = clamp(dx / 900, -0.5, 0.5);
      return p;
    },
    /** a short ground stroke under Nokta */
    ground(ctx, env, x, gy) { LI.Ambient.ground(ctx, x - 360, x + 360, gy + 6, { alpha: 0.32 }); },
  };
})(window.LI = window.LI || {});
