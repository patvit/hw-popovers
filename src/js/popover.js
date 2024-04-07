export default class Popover {
  constructor(element) {
    this.relatedElement = element;
    this.title = element.dataset.popoverTitle;
    this.content = element.dataset.popoverContent;
    this.html = this.createPopover();

    this.removePopover = this.removePopover.bind(this);
  }

  createPopover() {
    const popover = document.createElement('div');
    popover.classList.add('popover');

    const popoverTitle = document.createElement('div');
    popoverTitle.textContent = this.title;
    popoverTitle.classList.add('popover-header');
    popover.appendChild(popoverTitle);

    const popoverContent = document.createElement('div');
    popoverContent.textContent = this.content;
    popoverContent.classList.add('popover-body');
    popover.appendChild(popoverContent);

    return popover;
  }

  showPopover() {
    this.relatedElement.parentElement.appendChild(this.html);
    const { offsetTop: top, offsetLeft: left, offsetWidth: width } = this.relatedElement;
    this.html.style.top = `${top - this.html.offsetHeight - 5}px`;
    this.html.style.left = `${left + width / 2 - this.html.offsetWidth / 2}px`;
  }

  // eslint-disable-next-line class-methods-use-this
  removePopover() {
    const currentPopover = document.querySelector('.popover');
    if (currentPopover) {
      currentPopover.remove();
    }
  }
}
