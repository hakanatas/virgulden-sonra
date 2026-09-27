/* SAHNE 2 — BASAMAK TABLOSU (10–30 s) */
(function (LI) {
  'use strict';
  const KD = LI.KD, F = () => LI.Film;
  function camera(t, env) { return LI.Camera.breathe(KD.cam(env, { zoom: 1 }), t, 0.4); }
  function render(ctx, lt, env, t) { F().base(ctx, env, t, camera(t, env), () => LI.world(ctx, env, t)); }
  LI.registerScene({ id: 2, start: 10, end: 30, name: 'Place-value table', nameTr: 'Basamak tablosu', concept: 'Tenths, hundredths, thousandths', conceptTr: 'Onda, yüzde, binde birler', render });
})(window.LI = window.LI || {});
