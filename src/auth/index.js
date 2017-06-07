import axios from 'axios';

const { SCHEME, HOSTNAME } =
  (process.env.NODE_ENV === 'production')
  ? { SCHEME: 'https', HOSTNAME: window.location.hostname }
  : { SCHEME: 'http', HOSTNAME: 'localhost:3001' };

const API_URL = `${SCHEME}://${HOSTNAME}`;

export default {
  user: {
    authenticated: !!window.localStorage.getItem('id_token'),
  },
  login() {
    // eslint-disable-next-line
    const config = { method: 'get', url: 'http://localhost:3001/auth/github', responseType: 'json'}

    console.info(`${API_URL}/auth/github`);
    axios.request(config)
    .then((data) => {
      // eslint-disable-next-line
      console.info(data);
    })
    .catch((error) => {
      // eslint-disable-next-line
      console.info(error);
    });
  },
};
