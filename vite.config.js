import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/portfolio-web/', // yaha apne repo ka naam daalo
  plugins: [react()],
})
