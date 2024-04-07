import Element from './initEl';

document.querySelectorAll('.btn').forEach((el) => {
  const element = new Element(el);
  element.init();
});
