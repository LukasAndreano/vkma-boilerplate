/**
 * Склонение числительных в зависимости от числа.
 *
 * @param {number} number - Число, для которого нужно выбрать правильную форму слова.
 * @param {string[]} words - Массив из трех вариантов слова: для единственного числа, для чисел от 2 до 4, и для чисел от 5 и больше.
 * @returns {string} Строка, состоящая из числа и подходящего склонения слова.
 *
 * @example
 * // вернет '5 яблок'
 * declOfNum(5, ['яблоко', 'яблока', 'яблок']);
 *
 * @example
 * // вернет '1 яблоко'
 * declOfNum(1, ['яблоко', 'яблока', 'яблок']);
 */
const declOfNum = (number, words) =>
	`${number.toLocaleString("ru")} ` +
	words[
		number % 100 > 4 && number % 100 < 20
			? 2
			: [2, 0, 1, 1, 1, 2][number % 10 < 5 ? Math.abs(number) % 10 : 5]
	];

export default declOfNum;
