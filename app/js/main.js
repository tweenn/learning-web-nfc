
import {
	render,
	createElement
} from './helpers/preact';

import App from './app';

const init = async () => {
	render(createElement(App), document.body);
};

init();
