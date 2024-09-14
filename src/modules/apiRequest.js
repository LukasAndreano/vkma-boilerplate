/**
 * Выполняет запрос к API с указанным методом и параметрами.
 *
 * @param {string} endpoint - Конечная точка API для запроса.
 * @param {string} [method="GET"] - Метод HTTP-запроса (например, "GET", "POST", "PUT", "DELETE").
 * @param {Object} [params] - Параметры запроса, которые будут отправлены в теле запроса (для методов, отличных от "GET").
 * @returns {Promise<Object>} Возвращает промис с результатом запроса в формате JSON.
 *
 * @example
 * // Пример GET запроса
 * api('users')
 *   .then(data => console.log(data))
 *   .catch(error => console.error(error));
 *
 * @example
 * // Пример POST запроса
 * api('users', 'POST', { name: 'John Doe' })
 *   .then(data => console.log(data))
 *   .catch(error => console.error(error));
 */
const api = async (endpoint, method = "GET", params) => {
  const data = await fetch(`${import.meta.env.VITE_BACKEND_URL}/${endpoint}`, {
    method: method,
    headers: {
      authorization: `Bearer ${
        window.location.href
          .slice(window.location.href.indexOf("?") + 1)
          .split("#")[0]
      }`,
      "Content-Type": "application/json",
    },
    body: params ? JSON.stringify(params) : null,
  });

  return await data.json();
};

export default api;
