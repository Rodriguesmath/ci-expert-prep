import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// O nome do seu repositório no GitHub (ex: ci-expert-prep)
const REPO_NAME = 'ci-expert-prep'; 

// A base URL é necessária para que o Vite carregue corretamente os assets (CSS, JS)
// quando o projeto está em um subdiretório (como no GitHub Pages).
const base = process.env.NODE_ENV === 'production' 
  ? `/${REPO_NAME}/` 
  : '/'; 

export default defineConfig({
  // ESSA É A CORREÇÃO PRINCIPAL PARA GITHUB PAGES:
  base: base, 
  
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,
    },
  },
})
