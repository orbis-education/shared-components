import { defineConfig } from "vite";
import dotenv from "dotenv";
import react from '@vitejs/plugin-react';
import path from 'path';

// * https://vitejs.dev/config/ -- 04/04/2023 JH

// * Vite with ESLint: https://www.robinwieruch.de/vite-eslint/ -- 01/23/2024 KH
// * vite-plugin-eslint: https://github.com/gxmari007/vite-plugin-eslint -- 01/23/2024 KH

// * https://stackoverflow.com/questions/66389043/how-can-i-use-vite-env-variables-in-vite-config-js -- 09/22/2023 MF
dotenv.config();

// * The port 5173 is the Vite default port. -- 09/28/2023 MF
// * If the port is already being used, Vite will automatically try the next available port so this may not be the actual port the server ends up listening on. (https://vitejs.dev/config/preview-options.html#preview-port) -- 09/28/2023 MF
let applicationPort = 5173;

if (process.env.PORT !== null && process.env.PORT !== undefined && process.env.PORT !== "") {

	applicationPort = process.env.PORT;

};

export default defineConfig({
	base: "./",
	plugins: [react()],
	server: {
		port: applicationPort
	},
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