export const initialState = {
  title: '',
  excerpt: '',
  slug: '',
  editorHTML: '',
  successed: false,
  failed: false,
  errorTxt: '',
};

const createReducer = (state, action) => {
  switch (action.type) {
    case 'SET_TITLE':
      return {...state, title: action.data};
    case 'SET_EXCERPT':
      return {...state, excerpt: action.data};
    case 'SET_SLUG':
      return {...state, slug: action.data};
    case 'SET_EDITOR_HTML':
      return {...state, editorHTML: action.data};
    case 'SUCCESSED':
      return {...state, successed: true};
    case 'SET_ERROR':
      return {...state, failed: true, errorTxt: action.data};
    default:
      return state;
  }
};

export default createReducer;
