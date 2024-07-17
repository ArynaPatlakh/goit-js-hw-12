// functions for HTTP
import axios from 'axios';

export async function getImages(param) {
  param.key = '44735338-079c6790302f7dc185545e42d';
  try {
    const response = await axios.get('https://pixabay.com/api/', {
      params: param,
    });
    return response.data;
  } catch (err) {
    err => `Error in FETCH: ${err}`;
  }
}
