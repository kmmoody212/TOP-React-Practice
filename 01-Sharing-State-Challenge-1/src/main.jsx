import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import SyncedInputs from './App.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <SyncedInputs />
    </StrictMode>
)