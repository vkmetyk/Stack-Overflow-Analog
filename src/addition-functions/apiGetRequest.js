import axios from 'axios'

const baseUrl = `https://api.stackexchange.com/2.2/`;
const baseParams = {site: `stackoverflow`};

async function apiGetRequest(whatAsk, parameters) {
  const result = await axios.get(baseUrl + whatAsk,
    {params: {...baseParams, ...parameters,}})
    .then(({ data }) => data);

  return result;
}

export default apiGetRequest;