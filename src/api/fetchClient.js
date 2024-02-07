import axios from 'axios';

export const getModes = () => (
  axios.get('https://60816d9073292b0017cdd833.mockapi.io/modes')
    .then(response => response.data)
    .catch((error) => {
      throw new Error(error);
    })
);
