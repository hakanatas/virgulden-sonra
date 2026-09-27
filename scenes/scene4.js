/* SAHNE 4 — KESİRLERLE (52–68 s) */
(function (LI) {
  'use strict';
  const KD = LI.KD, F = () => LI.Film;
  function camera(t, env) { return LI.Camera.breathe(KD.cam(env, { zoom: 1 }), t, 0.4); }
  function render(ctx, lt, env, t) { F().base(ctx, env, t, camera(t, env), () => LI.world(ctx, env, t)); }
  LI.registerScene({ id: 4, start: 52, end: 68, name: 'As fractions', nameTr: 'Kesirlerle', concept: 'Denominators 10, 100, 1000', conceptTr: 'Paydalar 10, 100, 1000', render });
})(window.LI = window.LI || {});
