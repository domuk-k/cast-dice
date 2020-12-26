class Component {
  element: HTMLElement;
  state: object;

  constructor(tagName, props?) {
    this.element = document.createElement(tagName);

    if (props) {
      for (const [key, value] of Object.entries(props)) {
        if (key === 'style') {
          for (const [styleKey, styleValue] of Object.entries(
            value
          )) {
            this.element[key][styleKey] = styleValue;
          }
          continue;
        }

        this.element[key] = value;
      }
    }
  }

  setState(newState) {
    this.state = { ...this.state, ...newState };
  }

  createElement(...children: HTMLElement[]) {
    if (children.length) {
      this.element.append(...children);
    }
    return this.element;
  }
}

export default Component;
