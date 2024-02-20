import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { PokedexApp } from './PokedexApp'
// import "bootstrap/dist/css/bootstrap.min.css";
import './sass/customBoostrap.scss'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import 'animate.css/animate.min.css'
import { Provider } from 'react-redux'
import { store } from './store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Provider store={store}>
    <PokedexApp></PokedexApp>
    </Provider>
  </>,

)
