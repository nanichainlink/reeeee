import React from 'react'
import Grafica from './Grafica'

const GraficaPrueba = () => {


    const etiquetas = ["Uruguay", "Argentina"];
    const datos = ["4", "3"];


    return (
        <div>

            <Grafica etiquetas={etiquetas} datos={datos}></Grafica>


        </div>
    )
}

export default GraficaPrueba