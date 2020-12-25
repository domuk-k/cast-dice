import Button from '../components/button';
import styles from './main.module.scss';

class Main {
  public $element = document.createElement('main');
  public $descriptors = document.createElement('section');
  public $button: HTMLElement;

  element() {
    // this.$element.className = styles.main;
    return this.$element;
  }

  private get children() {
    return [this.$button, this.$descriptors];
  }

  constructor(onClick) {
    this.$button = new Button(onClick).element();
    // this.$element.className = styles.main;
    this.$element.append(...this.children);
  }
}

export default Main;
