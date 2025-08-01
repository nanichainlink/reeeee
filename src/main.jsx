import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Login from './components/Login.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from "react-redux";
import { store } from './slices/store';
import MiComponente from './components/MiComponente.jsx'
import Rutas from './components/Rutas.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <Login /> */}
      <Rutas></Rutas>
    </Provider>
  </React.StrictMode>,
)


