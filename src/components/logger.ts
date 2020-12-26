import Component from '../component';
import styles from './logger.module.scss';

class Logger extends Component {
  logs: HTMLElement[];
  constructor(tagName, props) {
    super(tagName, props);

    this.element.className = styles.ul;
  }
}

export default Logger;
