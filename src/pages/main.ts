import Component from '../component';
import Button from '../components/button';
import Logger from '../components/logger';
import styles from './main.module.scss';

class Main extends Component {
  private button: HTMLButtonElement;
  private logger: HTMLElement;

  constructor(tagName, props?) {
    super(tagName);

    this.button = new Button('button', {
      onClick: props.onClick,
    }).element;

    this.logger = new Logger('ul', {
      id: 'desc',
      log: props.state.log,
    }).element;

    this.createElement(this.button, this.divider, this.logger);
  }

  get divider() {
    const $divider = document.createElement('hr');
    $divider.className = styles.divider;
    return $divider;
  }
}

export default Main;
