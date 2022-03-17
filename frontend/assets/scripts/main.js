import '../styles/styles.scss';
import App from './app';

const init = () => {
    App.init();
};

window.onbeforeunload = () => {
    window.scrollTo(0, 0);
};

document.addEventListener('DOMContentLoaded', () => init());
