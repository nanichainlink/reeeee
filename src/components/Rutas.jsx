import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import App from '../App';
import Login from './Login';
import Dashboard from './Dashboard';
import GraficaPrueba from './GraficaPrueba';

const Rutas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<Navigate to="/login" replace></Navigate>}></Route>
                <Route path="/grafica" element={<GraficaPrueba />}></Route>
                <Route path="login" element={<Login />} />
                <Route path="/" element={<Dashboard />}>
                    <Route index element={<App />} />
                    {/* <Route path="graficasCompletadas"
                        element={<GraficasCompletadas />} />
                    <Route path="prueba" element={<Prueba />} />
                    <Route path="editarTarjeta/:tareaId" element={<EditarTarjeta />} />
                    <Route path="tarjetasListado" element={<TarjetasListado
                    />} /> */}
                </Route>

            </Routes>
        </BrowserRouter>
    )
}
export default Rutas

