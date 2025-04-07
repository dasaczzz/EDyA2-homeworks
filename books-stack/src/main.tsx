import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BookStack } from './BookStack'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BookStack />
  </StrictMode>,
)
