import api from "./apiRequest";

const fetchData = async (
  endpoint,
  method,
  setAction,
  ignoreResponse = false
) => {
  const req = await api(endpoint, method);

  if (!ignoreResponse && !req.response) throw new Error("Error fetching data");

  setAction(req.data);

  console.info(
    `[${method.toUpperCase()}] /${endpoint}: ${JSON.stringify(req.data)}`
  );
};

export default fetchData;
