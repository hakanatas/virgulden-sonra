/* SAHNE 1 — 2,375 METRE (0–10 s)  What do the digits after the comma say?
   The whole film's drawing lives in LI.world(t); each scene only sets the camera. */
(function (LI) {
  'use strict';
  const { seg, outBack } = LI.E;
  const KD = LI.KD, F = () => LI.Film, A = LI.Ang;
  const END = (t) => 1 - seg(t, 90.4, 91.4);

  function win(t, a, b, fi = 0.4, fo = 0.4) { return seg(t, a, a + fi) * (1 - seg(t, b - fo, b)); }
  function lines(ctx, t, P, list) {
    const f = F();
    list.forEach(([a, b, s, hot]) => {
      const al = win(t, a, b); if (al <= 0) return;
      f.fit(ctx, s, P.x, P.y, P.s, P.w, Object.assign({ alpha: al, halo: true, p: seg(t, a, a + 1.2) }, hot ? f.AMB : {}));
    });
  }
  /** timed expressions: [start, end, items, amber?] */
  function exprs(ctx, t, x, y, s, w, list) {
    const f = F();
    list.forEach(([a, b, items, hot]) => { const al = win(t, a, b); if (al > 0) f.expr(ctx, items, x, y, s, { alpha: al, w, halo: true, color: hot ? A.amber : undefined }); });
  }
  const fr = (n, d, hot) => F().fr(n, d, hot);

  function number(ctx, env, t) {
    const L = KD.L(env), f = F(), a = seg(t, 4.2, 4.6) * (1 - seg(t, 67.4, 68.2));
    const hot = (i) => Math.max(
      i === 0 ? win(t, 14.6, 16.0) : 0,
      i === 1 ? Math.max(win(t, 16.2, 18.4), win(t, 32.0, 35.0)) : 0,
      i === 2 ? Math.max(win(t, 18.6, 20.8), win(t, 37.0, 40.0)) : 0,
      i === 3 ? Math.max(win(t, 21.0, 24.0), win(t, 42.0, 45.6)) : 0,
      i >= 1 ? win(t, 46.0, 51.8) : 0);
    f.bigNum(ctx, L.NUM, a, seg(t, 4.2, 6.0), hot);
  }

  function context(ctx, env, t) {
    const L = KD.L(env);
    lines(ctx, t, L.CX, [
      [4.4, 10.2, 'Virgülden sonraki rakamlar ne anlatır?'],
      [10.6, 29.8, 'Basamak tablosu'],
      [30.6, 35.0, '1 metre = 10 desimetre'],
      [35.2, 39.8, '1 desimetre = 10 santimetre'],
      [40.2, 45.6, '1 santimetre = 10 milimetre'],
      [46.0, 51.8, 'Her basamak solundakinin 10’da biri', true],
      [52.4, 67.8, 'Kesirlerle yazalım: paydalar 10, 100, 1000'],
      [68.4, 79.8, '4,05 mi büyük, 4,5 mi?'],
    ]);
    lines(ctx, t, { x: L.W.x, y: L.W.y[0], s: L.W.s, w: L.W.w }, [[5.4, 10.2, 'Bir kurdelenin boyu 2,375 metre']]);
  }

  /* ── the place-value table (10–30 s) ── */
  const HEAD = ['birler', 'onda birler', 'yüzde birler', 'binde birler'];
  const DIG = ['2', '3', '7', '5'], VT = [14.6, 16.2, 18.6, 21.0];
  function table(ctx, env, t) {
    const L = KD.L(env), P = L.TB, f = F(), a = seg(t, 10.4, 10.8) * (1 - seg(t, 29.6, 30.4)); if (a <= 0) return;
    const X = (i) => P.x + (i - 1.5) * P.cw;
    HEAD.forEach((h, i) => {
      const k = seg(t, 10.6 + i * 0.3, 11.0 + i * 0.3); if (k <= 0) return;
      f.T(ctx, h, X(i), P.hy, { size: P.s * 0.8, alpha: a * k });
      if (i > 0) LI.Ink.path(ctx, [[X(i) - P.cw / 2, P.hy - 30], [X(i) - P.cw / 2, P.vy + 60]], { w: 3, alpha: a * k * 0.4, seed: 300 + i, taper: [0, 0] });
      const d = seg(t, 12.0 + i * 0.5, 12.5 + i * 0.5); if (d > 0) f.T(ctx, DIG[i], X(i), P.dy - 18 * (1 - outBack(d)), { size: P.s * 1.9, alpha: a * d });
      const v = seg(t, VT[i], VT[i] + 0.5) * a; if (v <= 0) return;
      if (i === 0) f.T(ctx, '2', X(i), P.vy, Object.assign({ size: P.s * 1.3, alpha: v }, f.AMB));
      else f.expr(ctx, [fr(DIG[i], 10 ** i, true)], X(i), P.vy, P.s * 1.3, { alpha: v });
    });
    const cm = seg(t, 12.2, 12.6) * a; if (cm > 0) f.T(ctx, ',', P.x - P.cw, P.dy + 10, { size: P.s * 1.9, alpha: cm });
    // ÷ 10 hops between the columns, under the values
    for (let i = 0; i < 3; i++) {
      const p = seg(t, 24.6 + i * 0.4, 25.2 + i * 0.4); if (p <= 0) continue;
      const r = P.cw * 0.3, c = [(X(i) + X(i + 1)) / 2, P.vy + 30];
      A.arc(ctx, c, r, 200, 340, { p, alpha: a, w: 4, seed: 330 + i });
      f.T(ctx, '÷ 10', c[0], c[1] + r + 22, Object.assign({ size: P.s * 0.7, alpha: a * p }, f.AMB));
    }
    lines(ctx, t, { x: L.W.x, y: L.W.y[1], s: L.W.s, w: L.W.w }, [[16.2, 18.4, 'onda birler: 1’in 10’da biri'], [18.6, 20.8, 'yüzde birler: 1’in 100’de biri'],
      [21.0, 24.2, 'binde birler: 1’in 1000’de biri'], [24.4, 29.8, 'Sağa gittikçe her basamak 10 kat küçülür', true]]);
  }

  /* ── a metre, magnified three times (30–52 s) ── */
  function metre(ctx, env, t) {
    const L = KD.L(env), R = L.RL, f = F(), a = seg(t, 30.4, 30.8) * (1 - seg(t, 51.4, 52.2)); if (a <= 0) return;
    f.ruler(ctx, R, 0, seg(t, 30.6, 31.6), 3 * seg(t, 32.0, 33.4), seg(t, 34.6, 35.0), a);
    f.zoom(ctx, R, 0, 3, seg(t, 35.0, 35.6), a);
    f.ruler(ctx, R, 1, seg(t, 35.4, 36.4), 7 * seg(t, 37.0, 38.4), seg(t, 39.6, 40.0), a);
    f.zoom(ctx, R, 1, 7, seg(t, 40.0, 40.6), a);
    f.ruler(ctx, R, 2, seg(t, 40.4, 41.4), 5 * seg(t, 42.0, 43.0), 0, a);
    const lab = (row, s, g) => { if (g > 0) f.T(ctx, s, R.x0 - 18, R.y[row], { size: R.s * 0.8, alpha: a * g, align: 'right' }); };
    lab(0, '1 m', seg(t, 30.8, 31.2)); lab(1, '1 dm', seg(t, 35.6, 36.0)); lab(2, '1 cm', seg(t, 40.6, 41.0));
    const X = (R.x0 + R.x1) / 2;
    exprs(ctx, t, X, R.y[0] + R.ly + 14, R.s, 900, [[34.0, 51.8, ['3 dm = ', fr(3, 10, true), ' m']]]);
    exprs(ctx, t, X, R.y[1] + R.ly + 14, R.s, 900, [[38.6, 51.8, ['7 cm = ', fr(7, 100, true), ' m']]]);
    exprs(ctx, t, X, R.y[2] + R.ly + 14, R.s, 900, [[43.6, 51.8, ['5 mm = ', fr(5, 1000, true), ' m']]]);
    lines(ctx, t, { x: L.W.x, y: L.W.y[1] + (env.V ? 60 : 0), s: L.W.s, w: L.W.w }, [[46.0, 51.8, '0,375 m = 3 dm + 7 cm + 5 mm', true]]);
  }

  /* ── as fractions (52–68 s), and 4,05 against 4,5 (68–80 s) ── */
  function fractions(ctx, env, t) {
    const E = KD.L(env).E, x = E.x, s = E.s, w = E.w;
    exprs(ctx, t, x, E.y[0], s, w, [[52.6, 67.8, ['2,375 = 2 + ', fr(3, 10), ' + ', fr(7, 100), ' + ', fr(5, 1000)]],
      [69.0, 79.8, ['4,05 = 4 + ', fr(0, 10), ' + ', fr(5, 100)]]]);
    exprs(ctx, t, x, E.y[1], s, w, [[55.6, 67.8, ['= 2 + ', fr(300, 1000), ' + ', fr(70, 1000), ' + ', fr(5, 1000)]],
      [71.0, 79.8, ['4,5 = 4 + ', fr(5, 10), ' = 4 + ', fr(50, 100), ' = 4,50']]]);
    exprs(ctx, t, x, E.y[2], s, w, [[58.6, 67.8, ['= 2 + ', fr(375, 1000, true)], true], [73.4, 79.8, ['50 yüzde bir, 5 yüzde birden çok: 4,5 daha büyük'], true]]);
    exprs(ctx, t, x, E.y[3], s * 0.85, w, [[61.6, 67.8, ['Okunuşu: iki tam binde üç yüz yetmiş beş']], [76.0, 79.8, ['4,05’teki 0: onda birler basamağı boş']]]);
  }

  function summary(ctx, env, t) {
    if (t < 80.4) return;
    const S = KD.L(env).SUM, f = F(), a = END(t);
    [[['Virgülden sonra: onda birler, yüzde birler, binde birler'], 80.6], [['Her basamak solundakinin 10’da biri'], 81.6],
      [['2,375 = 2 + ', fr(3, 10), ' + ', fr(7, 100), ' + ', fr(5, 1000)], 82.6, true], [['0,375 m = 3 dm + 7 cm + 5 mm'], 83.6]].forEach(([items, t0, hot], i) => {
      const al = seg(t, t0, t0 + 0.4) * a; if (al <= 0) return;
      f.expr(ctx, items, S.x, S.y[i], S.s * (i === 2 ? 1.15 : 1), { alpha: al, w: S.w, halo: true, color: hot ? A.amber : undefined });
    });
  }

  LI.fireworks = function (ctx, env, t) {
    const k = seg(t, 84.4, 86.4);
    if (k <= 0 || t >= 91) return;
    const n = F().nokta(t, env), C = [n.x, n.y - 170];
    [30, 60, 90, 120, 150].forEach((d, i) => {
      const r = 150 + 30 * Math.sin(t * 2 + i);
      A.arc(ctx, C, r, d - 12, d + 12, { p: seg(k, i * 0.12, i * 0.12 + 0.4), alpha: 0.8 * (1 - seg(t, 90.2, 91)), w: 6, seed: 80 + i });
    });
  };

  LI.world = function (ctx, env, t) { context(ctx, env, t); number(ctx, env, t); table(ctx, env, t); metre(ctx, env, t); fractions(ctx, env, t); summary(ctx, env, t); };

  function camera(t, env) {
    const L = KD.L(env);
    return LI.Camera.breathe(LI.Camera.track([
      [0, KD.cam(env, { x: L.nx, y: env.V ? 380 : 140, zoom: 1.6 })],
      [3.0, KD.cam(env, { x: L.nx, y: env.V ? 380 : 140, zoom: 1.6 })],
      [4.8, KD.cam(env, { zoom: 1 })],
    ], t), t, 0.5);
  }
  function render(ctx, lt, env, t) { F().base(ctx, env, t, camera(t, env), () => LI.world(ctx, env, t)); }
  LI.registerScene({ id: 1, start: 0, end: 10, name: '2.375 metres', nameTr: '2,375 metre', concept: 'Digits after the comma', conceptTr: 'Virgülden sonraki rakamlar', render });
})(window.LI = window.LI || {});
