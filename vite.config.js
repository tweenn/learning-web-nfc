import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig(({ command }) => {
	return {
		server: {
			port: 4080,
		},
		root: path.resolve(process.cwd(), './app'),
		// base: command === 'serve' ? '/' : 'https://learning-web-nfc.surge.sh',
		base: command === 'serve' ? '/' : 'https://tweenn.github.io/learning-web-nfc/',
		build: {
			minify: 'esbuild',
			outDir: path.resolve(process.cwd(), './dist'),
		}
	}
});
