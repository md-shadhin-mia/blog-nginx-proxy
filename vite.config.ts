import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    proxy:{
      "/posts":{
        target:"https://jsonplaceholder.typicode.com",
        changeOrigin:true
      },
      "/users":{
        target:"https://jsonplaceholder.typicode.com",
        changeOrigin:true
      }
    }
  }
})
