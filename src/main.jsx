import React from 'react'
import ReactDOM from 'react-dom/client'
import AsaxiyHeader from './AsaxiyHeader.jsx'
import './index.css'
import BtnOpen from './btnOpen.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AsaxiyHeader />
    <BtnOpen />
  </React.StrictMode>,
)
