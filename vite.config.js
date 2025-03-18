import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // ✅ Ensure base path is correct
  server: {
    host: "0.0.0.0", // 👈 Ye line add karo
    port: process.env.PORT || 5173, // 👈 Render ka assigned port use karo
  },
});
