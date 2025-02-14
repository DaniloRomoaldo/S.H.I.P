import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  theme:{
    extend:{
      fontFamily:{
        'inter': ['Inter', 'serif']
      }
    },
  },
  variants: {
    extend: {
        rotate: ['hs-accordion-active'], // Adiciona a variante hs-accordion-active para a propriedade rotate
    },
},
  content: [
    'node_modules/preline/dist/*.js',
  ],
  plugins: [
    react(),
    tailwindcss()
  ]
})
