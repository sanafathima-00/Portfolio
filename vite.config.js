import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  // Load environment variables
  // eslint-disable-next-line no-undef
  const env = loadEnv(mode, process.cwd(), '');
  
  return {
    plugins: [react()],
    server: {
      host: true, // Allows external access
      port: env.VITE_PORT ? Number(env.VITE_PORT) : 5173, // Use .env variable or default to 5173
    },
    define: {
      'import.meta.env.VITE_PORT': JSON.stringify(env.VITE_PORT),
    },
  };
});
