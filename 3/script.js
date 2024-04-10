const regex = new RegExp(/Copyright (\S) (?:(?:19|20)[0-9]{2})/g);
const currentYear = new Date().getFullYear();
const copyright = ("\u00a9");
const styledElement = `<span style="color: red;" js-styled>Copyright ${copyright} ${currentYear}</span>`;

document.querySelectorAll('body *').forEach((node) => {
  const isElement = (node.nodeType === 1);
  
  if(isElement && regex.test(node.innerHTML)){
    const text = node.innerHTML;
    node.innerHTML = text.replaceAll(regex, styledElement);
  }
});