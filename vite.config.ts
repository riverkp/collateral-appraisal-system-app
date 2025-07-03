/// <reference types="node" />
import { defineConfig, loadEnv } from 'vite';
import fs from 'fs';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const keyPath = env.VITE_HTTPS_KEY_PATH;
  const certPath = env.VITE_HTTPS_CERT_PATH;

  return {
    server: {
      https:
        keyPath && certPath
          ? {
              key: fs.readFileSync(keyPath),
              cert: fs.readFileSync(certPath),
            }
          : undefined,
      port: 3000,
    },
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': '/src',
        '@app': '/src/app',
        '@features': '/src/features',
        '@shared': '/src/shared',
        '@styles': '/src/styles',
        '@config': '/src/config',
        '@assets': '/src/assets',
      },
    },
  };
});
