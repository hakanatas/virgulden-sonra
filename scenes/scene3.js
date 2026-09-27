/* SAHNE 3 — METREYİ BÜYÜTELİM (30–52 s) */
(function (LI) {
  'use strict';
  const KD = LI.KD, F = () => LI.Film;
  function camera(t, env) { return LI.Camera.breathe(KD.cam(env, { zoom: 1 }), t, 0.4); }
  function render(ctx, lt, env, t) { F().base(ctx, env, t, camera(t, env), () => LI.world(ctx, env, t)); }
  LI.registerScene({ id: 3, start: 30, end: 52, name: 'Magnifying a metre', nameTr: 'Metreyi büyütelim', concept: 'dm, cm, mm', conceptTr: 'dm, cm, mm', render });
})(window.LI = window.LI || {});
