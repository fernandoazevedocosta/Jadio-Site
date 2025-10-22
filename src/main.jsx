import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AppRouter } from './routes/AppRouter.jsx'
import { ThemeProvider } from './context/ThemeContent.jsx'

import { BrowserRouter } from "react-router";

import "./index.css"
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
)
