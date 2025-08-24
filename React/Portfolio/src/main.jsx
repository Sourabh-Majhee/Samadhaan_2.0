/*
    @copyright - 2025
    @licence - Sourabh Majhee
*/

// Node Modules
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Components
import App from './App.jsx'

// Css link 
import './index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
