import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from "dotenv";
dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'WEBSITE_URL': JSON.stringify(process.env.WEBSITE_URL),
    'GOOGLE_CLIENT_ID': JSON.stringify(process.env.GOOGLE_CLIENT_ID),
    'WEBSITE_NAME': JSON.stringify(process.env.WEBSITE_NAME),
  }
})