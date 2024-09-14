import { useCallback, useRef } from "react";

/**
 * Хук для дебаунса функции
 * Дебаунсинг позволяет избежать частого вызова функции, особенно при изменении значений в полях ввода и т.д.
 * Функция будет вызвана только после того, как пройдет указанный интервал времени без новых вызовов.
 *
 * @param {Function} callback - Функция, которую нужно вызвать с задержкой.
 * @param {number} delay - Задержка в миллисекундах перед вызовом функции.
 * @returns {Function} Возвращает функцию, которая запускает `callback` с задержкой.
 *
 * @example
 * const handleChange = useDebounce((value) => {
 *   console.log(value);
 * }, 300);
 *
 * // Вызов handleChange будет вызывать функцию только через 300 миллисекунд после последнего вызова
 * handleChange('input value');
 */
const useDebounce = (callback, delay) => {
  const timer = useRef(null);

  return useCallback(
    (...args) => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
      timer.current = setTimeout(() => {
        callback(...args);
      }, delay);
    },
    [callback, delay],
  );
};

export default useDebounce;
