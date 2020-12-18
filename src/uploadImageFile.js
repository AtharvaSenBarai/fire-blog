const isDevMode = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

const PROXY = isDevMode ? 'https://cors-anywhere.herokuapp.com/' : '';
const URL = 'https://api.imgbb.com/1/upload?key=';
const KEY = process.env.REACT_IMGBB_API_KEY;

const uploadImageFile = (file) => {
  const data = new FormData();
  data.append('image', file);
  return fetch(PROXY + URL + KEY, {
    method: 'POST',
    body: data,
  }).then((res) => res.json());
};

export default uploadImageFile;
