/* ─────────────────────────────────────────────────────────────
   ALTYAZILAR / CAPTIONS — düzenlenebilir.
   Kısa, tek fikir, 6. sınıf dili. start/end saniye cinsinden.
   note: öğretmen için önerilen seslendirme cümlesi.
   ───────────────────────────────────────────────────────────── */
(function (root) {
  const CAPTIONS = [
    { scene: 1, start: 4.4, end: 10.0, tr: 'Kurdele 2,375 metre: virgülden sonrası ne anlatır?', en: 'The ribbon is 2.375 m: what do the digits after the comma mean?',
      note: 'Bir kurdelenin boyu 2,375 metre. Virgülün solundaki 2 tam metreyi gösteriyor. Peki virgülden sonraki 3, 7 ve 5 ne anlatıyor?' },
    { scene: 2, start: 10.8, end: 16.0, tr: 'Basamaklar: birler, onda birler, yüzde birler, binde birler', en: 'Places: ones, tenths, hundredths, thousandths',
      note: 'Rakamları basamak tablosuna yerleştirelim. Virgülün solunda birler, sağında onda birler, yüzde birler ve binde birler basamakları var.' },
    { scene: 2, start: 16.2, end: 24.2, tr: '3 onda bir, 7 yüzde bir, 5 binde bir', en: '3 tenths, 7 hundredths, 5 thousandths',
      note: '3, onda birler basamağında: değeri 3 bölü 10. 7, yüzde birler basamağında: 7 bölü 100. 5, binde birler basamağında: 5 bölü 1000.' },
    { scene: 2, start: 24.4, end: 29.8, tr: 'Sağa gittikçe her basamak 10 kat küçülür', en: 'Each place to the right is 10 times smaller',
      note: 'Sağa doğru her basamak, solundakinin 10’da biri kadardır.' },
    { scene: 3, start: 30.6, end: 35.0, tr: '1 metre 10 desimetre: 3 dm, metrenin 10’da 3’ü', en: '1 m is 10 dm: 3 dm is 3 tenths of a metre',
      note: 'Bir metreyi 10 eşit parçaya bölelim; her parça 1 desimetre. 3 desimetre, metrenin onda üçü.' },
    { scene: 3, start: 35.2, end: 39.8, tr: '1 desimetre 10 santimetre: 7 cm = 7/100 m', en: '1 dm is 10 cm: 7 cm = 7/100 m',
      note: 'Sıradaki desimetreyi büyütelim: 10 santimetre. 7 santimetre, metrenin yüzde yedisi.' },
    { scene: 3, start: 40.2, end: 45.6, tr: '1 santimetre 10 milimetre: 5 mm = 5/1000 m', en: '1 cm is 10 mm: 5 mm = 5/1000 m',
      note: 'Bir santimetreyi de büyütelim: 10 milimetre. 5 milimetre, metrenin binde beşi.' },
    { scene: 3, start: 46.0, end: 51.8, tr: '0,375 m = 3 dm + 7 cm + 5 mm', en: '0.375 m = 3 dm + 7 cm + 5 mm',
      note: 'Yani virgülden sonraki 375, 3 desimetre, 7 santimetre ve 5 milimetre demek. Her basamak solundakinin 10’da biri.' },
    { scene: 4, start: 52.6, end: 58.4, tr: '2,375 = 2 + 3/10 + 7/100 + 5/1000', en: '2.375 = 2 + 3/10 + 7/100 + 5/1000',
      note: 'Aynı sayıyı paydası 10, 100 ve 1000 olan kesirlerin toplamı olarak yazabiliriz: 2 artı 3 bölü 10 artı 7 bölü 100 artı 5 bölü 1000.' },
    { scene: 4, start: 58.6, end: 67.8, tr: '= 2 + 375/1000: iki tam binde üç yüz yetmiş beş', en: '= 2 + 375/1000: two and 375 thousandths',
      note: 'Hepsini bindelik yaparsak 300, 70 ve 5 binde bir eder: toplam binde 375. Sayı “iki tam binde üç yüz yetmiş beş” diye okunur.' },
    { scene: 5, start: 68.6, end: 73.2, tr: '4,05 ile 4,5 aynı değil', en: '4.05 and 4.5 are not the same',
      note: '4,05 mi büyük, 4,5 mi? 4,05’te onda birler basamağı 0, yüzde birler 5. 4,5’te onda birler 5; bu da 50 yüzde bir demek.' },
    { scene: 5, start: 73.4, end: 79.8, tr: '4,5 daha büyük: 50 yüzde bir, 5 yüzde birden çok', en: '4.5 is bigger: 50 hundredths is more than 5',
      note: '50 yüzde bir, 5 yüzde birden çok olduğu için 4,5 daha büyük. 4,05’teki 0, onda birler basamağının boş olduğunu gösterir.' },
    { scene: 6, start: 80.6, end: 86.4, tr: 'Her basamak solundakinin 10’da biri', en: 'Each place is a tenth of the one to its left',
      note: 'Aklında kalsın: virgülden sonra onda birler, yüzde birler ve binde birler gelir. Her basamak solundakinin 10’da biridir.' },
    { scene: 6, start: 86.8, end: 91.0, tr: 'Ondalık sayılar da kesirdir!', en: 'Decimals are fractions too!',
      note: 'Ondalık gösterim, paydası 10, 100, 1000 olan kesirlerin kısa yazılışıdır.' },
  ];
  if (typeof module !== 'undefined' && module.exports) module.exports = CAPTIONS;
  else { root.LI = root.LI || {}; root.LI.CAPTIONS = CAPTIONS; }
})(typeof window !== 'undefined' ? window : globalThis);
