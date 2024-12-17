import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
	plugins: [react()],
	build: {
		lib: {
			entry: path.resolve(__dirname, 'lib/index.js'), // Entry point of your library
			name: 'shared-components', // lib name
			fileName: 'shared-components', // Output file name
			formats: ['es', 'cjs'] // Output formats (ESM and CommonJS)
		},
		rollupOptions: {
			external: ['react', 'react-dom'] // External dependencies
		}
	}
});