import App from './app';
import './index.module.scss';
import Header from './pages/header';
import Main from './pages/main';

const root = document.getElementById('root');
const app = new App('div');
const header = new Header('header');
const main = new Main('main', {
  onClick: app.onClick,
  state: app.state,
});

root.append(
  app.createElement(header.createElement(), main.createElement())
);
