
import createStore from '../vendor/teaful';

const initialStore = {
	nfcData: []
};

export const { useStore, getStore } = createStore(initialStore);
