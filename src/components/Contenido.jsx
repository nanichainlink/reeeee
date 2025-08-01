import { useState, useEffect } from "react";
import Agregar from './Agregar'
import Tarjetas from './Tarjetas'

const Contenido = () => {
    return (
        <div className="contenido">
            <Agregar />
            <Tarjetas />
        </div>
    )
}
export default Contenido