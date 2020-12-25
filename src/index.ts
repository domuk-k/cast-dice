import App from './app';
import './index.module.scss';

const app = new App('div');

document.getElementById('root')?.append(app.element);
