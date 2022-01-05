import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import App from './App'
import Navbar from './Navbar'
import Footer from './Footer'

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <App />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
)
