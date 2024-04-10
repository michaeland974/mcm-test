const selector = 'div > .frvtbum > img';
const { clone, width, height } = getImageElement(selector);

const canvas = createElement('canvas', 'canvas-drop', width, height);
const ctx = canvas.getContext('2d');
const position = (width / 2) - 10;

ctx.drawImage(clone, 0, 0, width, height);
ctx.clearRect(position, position, width/2, height/3);
ctx.save();

function createElement(tag, id, width, height){
  const element = document.createElement(tag);
  if(document.getElementById(id) === null){
    element.id = id;
  }
  if(tag === 'canvas'){
    element.width = width;
    element.height = height;
  }
  document.body.appendChild(element);
  return element;
};

function getImageElement(selector){
  const el = document.querySelector(selector);
  const clone = el.cloneNode(true);
  const {width, height} = clone;
  return {clone, width, height};
};



