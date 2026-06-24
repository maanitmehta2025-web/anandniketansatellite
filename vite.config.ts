import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // listen on 0.0.0.0 so cloudflared can reach it
    port: process.env.PORT ? Number(process.env.PORT) : 5173,
    cors: true, // allow cross-origin requests
    allowedHosts: true, // accept any Host header (e.g. *.trycloudflare.com)
  },
  preview: {
    host: true,
    cors: true,
    allowedHosts: true,
  },
})
