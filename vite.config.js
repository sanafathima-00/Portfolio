import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  // Load environment variables using import.meta.env
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react()],
    server: {
      host: true, // Allows external access
      port: Number(env.VITE_PORT) || 4173, // Convert to number
    },
    preview: {
      allowedHosts: ['sana-fathima.onrender.com'], // Allow Render URL
    },
  };
});
