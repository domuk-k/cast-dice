import styles from './button.module.scss';

class Button {
  public $element = document.createElement('button');
  public onClick: any;

  constructor(onClick) {
    this.$element.textContent = 'cast';
    this.$element.className = styles.button;

    this.onClick = onClick;
  }

  element() {
    this.$element.onclick = this.onClick;
    return this.$element;
  }
}

export default Button;
