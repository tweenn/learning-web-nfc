
import { html } from '../helpers/preact';

import { useStore } from '../store';

export default () => {
	const [log] = useStore.nfcData();

	return html`
		<p
			id='reader-log'
			dangerouslySetInnerHTML='${{ __html: log.join('<br />') }}'
		/>
	`;
};
