
import { html } from '../helpers/preact';

import CarbonButton from './carbon/button';

import { getStore } from '../store';

export default () => {
	const log = (message) => {
		const [nfcLog, setNfcLog] = getStore.nfcData();

		console.log(nfcLog);

		setNfcLog([
			...nfcLog,
			message
		]);
	};

	const handleOnClick = async () => {
		log('Clicked!');

		try {
			const ndef = new NDEFReader();
			await ndef.scan();
			log('');
			log('Scan started');

			ndef.addEventListener('readingerror', () => {
				log('');
				log('Argh! Couldn\'t read data from the NFC tag.');
			});

			ndef.addEventListener('reading', ({ message, serialNumber }) => {
				log('');
				log(`> Serial Number: ${serialNumber}`);
				log(`> Records: (${message.records.length})`);
				message.records.forEach((record) => {
					[
						'encoding',
						'id',
						'lang',
						'mediaType',
						'recordType',
					].forEach((type) => {
						log(`> ${type}: ${record?.[type]}`);
					});

					if (record.recordType === 'text') {
						const decoder = new TextDecoder(record.encoding);
						const text = decoder.decode(record.data);
						log(`> Data: ${text}`);
					} else if (record.recordType === 'url') {
						const decoder = new TextDecoder(record.encoding);
						const text = decoder.decode(record.data);
						log(`> Data: ${text}`);
					} else if (record.recordType === ':act') {
						const action = record.data.getUint8(0);
						log(`> Data: ${action}`);
					}
				});
			});

		} catch (error) {
			log('');
			log('Argh! ' + error);
		}
	};

	return html`
		<${CarbonButton}
			onClick='${handleOnClick}'
			text='Read Tag'
		/>
	`;
};
