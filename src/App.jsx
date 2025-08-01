
import { useState, useEffect } from 'react'
import { useDispatch } from "react-redux";
import './App.css'
import Menu from './components/Menu'
import Contenido from './components/Contenido'
import './estilos/estilos.css'
import { setObjetivos, setEvaluaciones, setLoading, setError } from './slices/features/tareasSlices';
import { obtenerObjetivos, obtenerEvaluaciones } from './services/serviciosTiny';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    cargarDatosIniciales()
  }, [])

  const cargarDatosIniciales = async () => {
    try {
      dispatch(setLoading(true));
      
      // Cargar objetivos y evaluaciones en paralelo
      const [objetivos, evaluaciones] = await Promise.all([
        obtenerObjetivos(),
        obtenerEvaluaciones()
      ]);
      
      dispatch(setObjetivos(objetivos));
      dispatch(setEvaluaciones(evaluaciones));
      
    } catch (error) {
      console.error('Error cargando datos:', error);
      dispatch(setError(error.message));
    } finally {
      dispatch(setLoading(false));
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
