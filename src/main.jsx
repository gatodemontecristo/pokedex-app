import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { PokedexApp } from './PokedexApp'
// import "bootstrap/dist/css/bootstrap.min.css";
import './sass/customBoostrap.scss'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import 'animate.css/animate.min.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PokedexApp></PokedexApp>
  </React.StrictMode>,

)
