const declOfNum = (number, words) =>
  `${number.toLocaleString("ru")} ` +
  words[
    number % 100 > 4 && number % 100 < 20
      ? 2
      : [2, 0, 1, 1, 1, 2][number % 10 < 5 ? Math.abs(number) % 10 : 5]
  ];

export default declOfNum;
