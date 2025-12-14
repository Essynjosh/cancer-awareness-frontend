// vite.config.js

// 🚨 THIS IS THE MISSING LINE! 🚨
import { defineConfig } from 'vite' 

import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // Use the correct base path for deployment (e.g., GitHub Pages)
  base: '/cancer-awareness2/', 
  plugins: [react()],
})