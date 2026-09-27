/* SAHNE 5 — 4,05 Mİ 4,5 Mİ? (68–80 s) */
(function (LI) {
  'use strict';
  const KD = LI.KD, F = () => LI.Film;
  function camera(t, env) { return LI.Camera.breathe(KD.cam(env, { zoom: 1 }), t, 0.4); }
  function render(ctx, lt, env, t) { F().base(ctx, env, t, camera(t, env), () => LI.world(ctx, env, t)); }
  LI.registerScene({ id: 5, start: 68, end: 80, name: '4.05 or 4.5?', nameTr: '4,05 mi, 4,5 mi?', concept: 'Place value decides', conceptTr: 'Basamak değeri karar verir', render });
})(window.LI = window.LI || {});
