import React from 'react'

import ReactDOM from 'react-dom/client'
import { I18nextProvider } from 'react-i18next'

import { LanguageProvider } from '@/components/language-provider'
import { ThemeProvider } from '@/components/theme-provider'

import App from './App'
import './globals.css'
import { TooltipProvider } from './components/ui/tooltip'
import i18n from './i18n'

i18n.init()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <LanguageProvider>
        <TooltipProvider>
          <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <App />
          </ThemeProvider>
        </TooltipProvider>
      </LanguageProvider>
    </I18nextProvider>
  </React.StrictMode>
)
