import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base relative: the site works locally and on GitHub Pages (/atelier-magique/).
export default defineConfig({ base: './', plugins: [react()], optimizeDeps: { include: ['gifenc'] } });
