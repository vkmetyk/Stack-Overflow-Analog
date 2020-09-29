import axios from 'axios'
import info from "../constants";
import alertMessage from "./alertMessage";

async function apiPostRequest(whatAsk, parameters, source) {
  if (parameters && parameters.access_token) {
    const formData = new FormData();

    for (let [key, value] of Object.entries(parameters))
      formData.append(key, '' + value);
    for (let [key, value] of Object.entries(info.baseParams))
      formData.append(key, '' + value);

    const result = await axios({
      method: 'POST',
      headers: {'Content-Type': 'multipart/form-data'},
      url: info.baseUrl + whatAsk,
      data: formData,
      cancelToken: source.token,
    }).then(({ data }) => data)
      .catch(({ response }) => response?.data?.error_message &&
        alertMessage(response.data.error_message))

    return result;
  }
  alertMessage('You need to be logged-in');
  return null;
}

export default apiPostRequest;