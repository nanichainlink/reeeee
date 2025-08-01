import React from 'react'
import Tarjeta from './Tarjeta'
import { useSelector, useDispatch } from "react-redux";

const Tarjetas = () => {

    const tareas = useSelector((state) => state.tareasSlice);

    return (
        <div className="tarjetas">
            {tareas.map(tarea => <Tarjeta key={tarea.id} {...tarea} />)}
        </div>
    )
}
export default Tarjetas