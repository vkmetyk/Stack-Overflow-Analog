import axios from 'axios'
import info from "../constants";

async function apiGetRequest(whatAsk, parameters, source) {
  const result = await axios.get(info.baseUrl + whatAsk,
    {
      params: {...info.baseParams, ...parameters},
      cancelToken: source.token,
    })
    .then(({ data }) => data)
    .catch(() => null)
  return result;
}

export default apiGetRequest;