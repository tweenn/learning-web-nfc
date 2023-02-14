
import { html } from '../../helpers/preact';

import 'https://1.www.s81c.com/common/carbon/web-components/tag/latest/button.min.js';

export default ({
	href = '',
	text = '',
	cssClass = '',
	onClick = (event) => {
		console.log('Button component default click action executed, please provide me an action', event);
	}
}) => {

	return html`
		<bx-btn
			href='${href}'
			onclick='${onClick}'
			class='${cssClass}'
			dangerouslySetInnerHTML='${{__html: text}}'
		>
		</bx-btn>
	`;
};
