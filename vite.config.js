/* eslint-disable no-undef */
import react from '@vitejs/plugin-react-swc';
// import fs from 'fs';
import { defineConfig, loadEnv } from 'vite';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
    process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

    return {
        base: './',
        plugins: [react()],
        // server: {
        //     host: true,
        //     https: {
        //         key: fs.readFileSync(process.env.VITE_HTTPS_KEY),
        //         cert: fs.readFileSync(process.env.VITE_HTTPS_CERT),
        //     },
        // },
    };
});
