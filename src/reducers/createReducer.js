export const initialState = {
  droppedImages: [],
  isUploading: false,
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
    case 'ADD_DROPPED_IMAGE':
      return {...state, droppedImages: [...state.droppedImages, action.data]};
    case 'SET_IS_UPLOADING':
      return {...state, isUploading: action.data};
    case 'SET_TITLE':
      return {...state, title: action.data};
    case 'SET_EXCERPT':
      return {...state, excerpt: action.data};
    case 'SET_SLUG':
      return {...state, slug: action.data};
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

export default createReducer;
