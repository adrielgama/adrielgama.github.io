import React from 'react'

import ReactDOM from 'react-dom/client'

import { ThemeProvider } from '@/components/theme-provider'

import App from './App'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <App />
    </ThemeProvider>
  </React.StrictMode>
)
