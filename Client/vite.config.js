import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    server: {
        port: 50334, 
        proxy: {
            '/api': {
                target: 'http://localhost:5000', // backend port
                changeOrigin: true,
                secure: false,
            },
        },
    },
    build: {
        outDir: 'dist', // output goes inside Client/dist
        emptyOutDir: true,
    },
});

