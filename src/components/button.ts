import Component from '../component';
import styles from './button.module.scss';

class Button extends Component {
  public element = document.createElement('button');

  constructor(tagName, props) {
    super(tagName, props);
    this.element.onclick = props.onClick;
    this.element.textContent = 'cast';
    this.element.className = styles.button;
  }
}

export default Button;
