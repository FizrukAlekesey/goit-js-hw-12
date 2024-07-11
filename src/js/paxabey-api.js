import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';

export const searchSettings = {
  key: '44806307-d12e03f2029e8f4cd22b76ce7',
  q: '',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
  per_page: 15,
  page: 1,
};

export async function fetchImage() {
  const response = await axios.get('/', { params: searchSettings });
  return response.data;
}


