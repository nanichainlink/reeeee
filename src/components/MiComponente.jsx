//agregamos preventDefault para href y onSubmit
import React, { useState } from "react";
export default function MiComponente() {
    const [valores, setValores] = useState({ nombre: "", apellido: "Prueba" });
    const onSubmit = (e) => {
        console.log(`valoresActuales`, valores);
        e.preventDefault();
    };
    const handleChange = (e) => {
        setValores((valoresActuales) => {
            console.log(`valoresActuales`, valoresActuales);
            console.log(`e.target.name`, e.target.name);
            return {
                ...valoresActuales,
                [e.target.name]: e.target.type === "checkbox" ? e.target.checked : e.target.value,
            };
        });
    };
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input
                    name="nombre" value={valores.nombre} type="text"
                    placeholder="Ingrese nombre" onChange={handleChange}
                />
                <input
                    name="apellidp" value={valores.apellido} type="text"
                    placeholder="Ingrese nombre" onChange={handleChange}
                />

                <input type="submit" value="Enviar" />
            </form>
        </div>
    );
}