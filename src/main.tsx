import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource/pragati-narrow/400.css'
import '@fontsource/pragati-narrow/700.css'
import './index.css'
import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
