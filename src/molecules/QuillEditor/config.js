const toolbarOptions = [
  [{header: '1'}, {header: '2'}, {font: []}],
  [{align: []}],
  [{size: []}],
  ['bold', 'italic', 'underline', 'strike', 'blockquote'],
  ['code-block'],
  [{list: 'ordered'}, {list: 'bullet'}, {indent: '-1'}, {indent: '+1'}],
  ['link', 'image', 'video'],
  ['clean'],
];

function imageHandler() {
  var range = this.quill.getSelection();
  var value = prompt('What is the image URL');
  if (value) {
    this.quill.insertEmbed(range.index, 'image', value, 'user');
  }
}

export const modules = {
  toolbar: {
    container: toolbarOptions,
    handlers: {image: imageHandler},
  },
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
};

export const formats = [
  'header',
  'font',
  'size',
  'align',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'code-block',
  'list',
  'bullet',
  'indent',
  'link',
  'image',
  'video',
  'clean',
];
