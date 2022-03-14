import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
/**El ReactDOM tiene todos los componentes de web dev
 * También está React Native, que se traería desde aquí
 */
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
