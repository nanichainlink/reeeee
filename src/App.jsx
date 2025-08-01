import { useState, useEffect } from 'react'
import { useDispatch } from "react-redux";
import './App.css'
import Menu from './components/Menu'
import Contenido from './components/Contenido'
import './estilos/estilos.css'
import { cargaInicialTareasSlice } from './slices/features/tareasSlices';
import { obtenerTareasAPI } from './services/serviciosTiny';


function App() {

  const dispatch = useDispatch();



  const [tareas, setTareas] = useState([]);
  useEffect(() => {
    recuperarTareas()

  }, [])

  const recuperarTareas = async () => {
    try {
      const tareasIniciales = await obtenerTareasAPI();
      console.log('entro en useEffect', tareasIniciales);
      dispatch(cargaInicialTareasSlice(tareasIniciales));

    } catch (e) {
      alert(e)
    }
  }



  return (
    <div>
      <Menu></Menu>
      <Contenido></Contenido>
    </div>
  )
}

export default App
