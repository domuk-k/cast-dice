import Main from './pages/main';
import Header from './components/header';
import style from './app.module.scss';
import Component from './component';
import Log from './components/log';

class App extends Component {
  constructor(tagName) {
    super(tagName);

    this.element.className = style.app;

    this.onClick = this.onClick.bind(this);
    this.element.style.backgroundColor = this.state.bgColor;
  }

  state = {
    bgColor: 'lightgrey',
    log: [],
  };

  onClick(e) {
    this.setState({
      bgColor: randomHue(),
      log: [this.state.bgColor, ...this.state.log].slice(0, 5),
    });

    const $desc = document.querySelector('#desc');

    $desc.prepend(
      new Log('li', {
        textContent: this.state.log[0],
      }).createElement()
    );

    if ($desc.childNodes.length > 5) {
      $desc.removeChild($desc.childNodes[5]);
    }

    this.element.style.backgroundColor = this.state.bgColor;
  }
}

export default App;

function randomHue() {
  const randomNum = () => parseInt('' + Math.random() * 256);
  return `rgba(${randomNum()},${randomNum()},${randomNum()})`;
}
