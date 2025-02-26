import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Accordion from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Accordion />
  </StrictMode>,
)
