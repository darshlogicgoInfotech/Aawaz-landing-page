import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // ✅ Ensure base path is correct
  server: {
    host: true, // ✅ Ensure local dev works
    strictPort: true,
    allowedHosts: ["aawaz-landing-page.onrender.com"], // ✅ Live host allow karo
  },
});
