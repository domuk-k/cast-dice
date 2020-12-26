import Component from '../component';
import styles from './header.module.scss';

class Header extends Component {
  constructor(tagName) {
    super(tagName);
    this.createElement(this.h1, this.h2);
  }

  private $h1: HTMLHeadingElement;
  private get h1() {
    this.$h1 = document.createElement('h1');
    this.$h1.textContent = 'the die is cast';
    this.$h1.className = styles.heading1;
    return this.$h1;
  }

  private $h2: HTMLHeadingElement;
  private get h2() {
    this.$h2 = document.createElement('h2');
    this.$h2.textContent = 'Alea iacta est';
    this.$h2.className = styles.heading2;
    return this.$h2;
  }
}

export default Header;
