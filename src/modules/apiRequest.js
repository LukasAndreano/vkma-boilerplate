export default async function api(endpoint, method, params, isUpload) {
  const headers = {
    authorization: `Bearer ${
      window.location.href
        .slice(window.location.href.indexOf("?") + 1)
        .split("#")[0]
    }`,
  };

  if (!isUpload) headers["Content-Type"] = "application/json";

  const data = await fetch(`https://api.domain.ru/v1/${endpoint}`, {
    method: method,
    headers: headers,
    body: !isUpload ? JSON.stringify(params) : params,
  });

  return await data.json();
}
