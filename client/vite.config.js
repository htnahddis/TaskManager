import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  server:{
    port: 3000,
    proxy:{
      "/api":{
        target: "https://localhost:8080",
        changeOrigin: true,
      },
        },
        
  }
})