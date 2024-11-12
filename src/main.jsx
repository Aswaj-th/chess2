import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MainBoard from './components/MainBoard.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MainBoard />
  </StrictMode>,
)
