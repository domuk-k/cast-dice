import Component from '../component';

class Log extends Component {
  element: HTMLLIElement;
  constructor(tagName, props) {
    super(tagName, props);
    this.element.onclick = (e) => {
      console.log((e.currentTarget as any).textContent);

      (document.querySelector('#root')
        .firstChild as any).style.backgroundColor = (e.currentTarget as any).textContent;
    };
    this.element.textContent = props.textContent;
  }
}

export default Log;
