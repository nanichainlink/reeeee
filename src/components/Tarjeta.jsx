import React from 'react'
import { useDispatch } from "react-redux";
import { borrarTareaSlice, cambiarCheckSlice } from '../slices/features/tareasSlices';
import { eliminarTareasAPI } from '../services/serviciosTiny';


const Tarjeta = ({ id, title, completed }) => {

    const dispatch = useDispatch();

    const handleChange = (e) => {
        // cambiarCheck(id, e.target.checked);

        const payload = {
            idTarea: id,
            completed: e.target.checked
        }
        dispatch(cambiarCheckSlice(payload))
    }
    const handleBorrar = async (e) => {
        // borrarTarea(id)
        try {
            const resultado = await eliminarTareasAPI(id);
            console.log('resultado', resultado)
            dispatch(borrarTareaSlice(id))
        } catch (e) {
            alert(e);
        }

    }

    return (
        <div className="tarjeta">
            <button onClick={handleBorrar}>Eliminar</button>

            <label className="checkLabel">
                <input type="checkbox" className="checkbox" checked={completed} onChange={handleChange} />
                {title}
            </label>
        </div>
    )
}
export default Tarjeta