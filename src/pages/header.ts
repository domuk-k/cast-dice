import styles from './header.module.scss';

class Header {
  public $header = document.createElement('header');
  public $h1 = document.createElement('h1');
  public $h2 = document.createElement('h2');

  element() {
    this.$header.className = styles.header;
    return this.$header;
  }

  private get children() {
    this.$h1.textContent = 'the die is cast';
    this.$h1.className = styles.heading1;

    this.$h2.textContent = 'Alea iacta est';
    this.$h2.className = styles.heading2;

    return [this.$h1, this.$h2];
  }

  constructor() {
    this.$header.append(...this.children);
  }
}

export default Header;
