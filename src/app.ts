import Main from './pages/main';
import Header from './pages/header';
import style from './app.module.scss';
import Component from './component';

class App extends Component {
  constructor(tagName) {
    super(tagName);
    this.element.className = style.app;
    this.element.style.backgroundColor = this.state.bgColor;
    this.element.append(...this.children);
  }

  state = {
    bgColor: 'lightgrey',
  };

  private get children() {
    const $header = new Header().element();
    const $main = new Main(this.onClick.bind(this)).element();

    return [$header, $main];
  }

  onClick(e) {
    this.state.bgColor = `rgba(${randomHue()},${randomHue()},${randomHue()})`;
    this.element.style.backgroundColor = this.state.bgColor;
  }
}

export default App;

function randomHue() {
  return parseInt('' + Math.random() * 256);
}
