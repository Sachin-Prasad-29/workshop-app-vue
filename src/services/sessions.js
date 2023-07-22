import axios from 'axios';
import Config from '@/config';

const { baseUrl } = Config;

const vote = async (sessionId, voteType) => {
  // in post / put / patch the 2nd argument is
  //      - null (if no data is to be passed)
  //      - the data object if data is to be passed
  // headers, params etc will be in a object (3rd agument)
  const response = await axios.put(
    `${baseUrl}/sessions/${sessionId}/${voteType}`,
    null /*, {

    } */
  );

  return response.data;
};

const addSession = async (session) => {
  const response = await axios.post(`${baseUrl}/sessions`, session);
  return response.data;
};

export { vote, addSession };
