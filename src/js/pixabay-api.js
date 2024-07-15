// functions for HTTP
import axios from 'axios';

export async function getImages(value) {
  axios.defaults.baseURL = 'https://pixabay.com/api/';
  const myKey = '44735338-079c6790302f7dc185545e42d';
  try {
    const response = await axios.get('https://pixabay.com/api/', {
      params: {
        key: myKey,
        q: value,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page: 1,
        per_page: 15,
      },
    });
      return response.data;
  } catch (err) {
    err => `Error in FETCH: ${err}`;
  }
};
