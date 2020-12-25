abstract class Component {
  element: HTMLElement;
  constructor(tagName) {
    this.element = document.createElement(tagName);
  }
}

export default Component;
