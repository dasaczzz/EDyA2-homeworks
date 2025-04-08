import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { QueueComponent } from './QueueComponent'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueueComponent />
  </StrictMode>,
)
