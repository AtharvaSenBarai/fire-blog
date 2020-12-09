export const initialState = {
  title: '',
  time: '',
  editorHTML: '',
  excerpt: '',
  successed: false,
  failed: false,
  errorTxt: '',
};

const editReducer = (state, action) => {
  switch (action.type) {
    case 'SET_ORIGINAL_DATA':
      const {title, time, content} = action.data;
      return {...state, title, time, editorHTML: content};
    case 'SET_TITLE':
      return {...state, title: action.data};
    case 'SET_EXCERPT':
      return {...state, excerpt: action.data};
    case 'SET_EDITOR_HTML':
      return {...state, editorHTML: action.data};
    case 'SUCCESSED':
      return {...state, failed: false, successed: true};
    case 'SET_ERROR':
      return {...state, successed: false, failed: true, errorTxt: action.data};
    default:
      return state;
  }
};

export default editReducer;
