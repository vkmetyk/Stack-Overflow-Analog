import axios from 'axios'

const baseUrl = `https://api.stackexchange.com/2.2/`;
const baseParams = {site: `stackoverflow`};

async function apiGetRequest(whatAsk, parameters, source) {
  const result = await axios.get(baseUrl + whatAsk,
    {
      params: {...baseParams, ...parameters},
      cancelToken: source.token,
    })
    .then(({ data }) => data)
    .catch(error => null)
  console.log("REQUEST SHOW", {...baseParams, ...parameters});
console.log("REQUEST: ", result)
  return result;
}

export default apiGetRequest;