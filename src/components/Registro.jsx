
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { registrarUsuario, obtenerPaises } from '../services/serviciosTiny';
import { setUsuario } from '../slices/features/tareasSlices';

const Registro = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const [formData, setFormData] = useState({
        usuario: '',
        password: '',
        pais: ''
    });
    const [paises, setPaises] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        cargarPaises();
        
        // Verificar si ya está logueado
        const id = localStorage.getItem("id");
        const token = localStorage.getItem("token");
        if (id && token) {
            navigate("/");
        }
    }, [navigate]);

    const cargarPaises = async () => {
        try {
            const paisesData = await obtenerPaises();
            setPaises(paisesData);
        } catch (error) {
            console.error('Error cargando países:', error);
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        setError('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!formData.usuario || !formData.password || !formData.pais) {
            setError('Todos los campos son obligatorios');
            return;
        }

        setLoading(true);
        
        try {
            const resultado = await registrarUsuario(formData.usuario, formData.password, formData.pais);
            
            if (resultado.codigo === 200) {
                // Guardar datos de sesión
                localStorage.setItem("id", resultado.id);
                localStorage.setItem("token", resultado.apiKey);
                
                // Actualizar estado global
                dispatch(setUsuario({
                    usuario: resultado,
                    token: resultado.apiKey
                }));
                
                // Auto-login después del registro
                navigate("/");
            } else {
                setError(resultado.mensaje || 'Error en el registro');
            }
        } catch (error) {
            setError(error.message || 'Error de conexión');
        } finally {
            setLoading(false);
        }
    };

    const isFormValid = formData.usuario && formData.password && formData.pais;

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="text-center">Registro - Goalify</h3>
                        </div>
                        <div className="card-body">
                            {error && (
                                <div className="alert alert-danger" role="alert">
                                    {error}
                                </div>
                            )}
                            
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="usuario" className="form-label">Usuario</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="usuario"
                                        name="usuario"
                                        value={formData.usuario}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Contraseña</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                
                                <div className="mb-3">
                                    <label htmlFor="pais" className="form-label">País</label>
                                    <select
                                        className="form-control"
                                        id="pais"
                                        name="pais"
                                        value={formData.pais}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Seleccionar país</option>
                                        {paises.map(pais => (
                                            <option key={pais.id} value={pais.id}>
                                                {pais.nombre}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                
                                <button
                                    type="submit"
                                    className="btn btn-primary w-100"
                                    disabled={!isFormValid || loading}
                                >
                                    {loading ? 'Registrando...' : 'Registrarse'}
                                </button>
                            </form>
                            
                            <div className="text-center mt-3">
                                <p>¿Ya tienes cuenta? <a href="/login">Inicia sesión</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registro;
