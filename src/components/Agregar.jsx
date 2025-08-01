import { useRef } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { agregarTareaSlice } from '../slices/features/tareasSlices';
import { agregarTareasAPI } from '../services/serviciosTiny';

const Agregar = () => {

    const dispatch = useDispatch();

    const titleRef = useRef()

    const handleAgregar = async () => {
        try {
            //llamar a api antes de agregar para obtener el id (siempre sera 201)
            const title = titleRef.current.value;
            const nuevaTarea = {
                title: title,
                completed: false,
                idUser: 1
            }
            //resultado es un objeto con el id
            const resultado = await agregarTareasAPI(nuevaTarea);
            console.log('resultado', resultado);
            //se valida que el resultado tenga id
            if (resultado && resultado.id) {
                dispatch(agregarTareaSlice(resultado))
            }
        } catch (e) {
            alert(e);
        }

    }
    return (
        <div className="agregar">
            <label htmlFor="txtAgregar">Agregar:</label>
            <input ref={titleRef} type="text" name="txtAgregar" id="txtAgregar" />
            <input type="button" value="Agregar" onClick={handleAgregar} />
        </div>
    )
}
export default Agregar