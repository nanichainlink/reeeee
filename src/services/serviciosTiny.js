
// Aquí irá la URL de la API que proporcionará el equipo docente
const API_BASE_URL = "https://goalify.develotion.com/";

// Función auxiliar para hacer requests con token
const makeAuthenticatedRequest = async (endpoint, options = {}) => {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('id');
    
    const headers = {
        'Content-Type': 'application/json',
        ...options.headers
    };
    
    if (token && userId) {
        headers['Authorization'] = `Bearer ${token}`;
        headers['X-User-Id'] = userId;
    }
    
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        ...options,
        headers
    });
    
    if (!response.ok) {
        const error = await response.text();
        throw new Error(error || 'Error en la solicitud');
    }
    
    return response.json();
};

// Servicios de autenticación
export const registrarUsuario = async (usuario, password, pais) => {
    return fetch(`${API_BASE_URL}usuarios.php`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            usuario,
            password,
            idPais: pais
        })
    }).then(response => response.json());
};

export const loginUsuario = async (usuario, password) => {
    return fetch(`${API_BASE_URL}login.php`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            usuario,
            password
        })
    }).then(response => response.json());
};

// Servicios de objetivos
export const obtenerObjetivos = async () => {
    return makeAuthenticatedRequest('objetivos.php');
};

// Servicios de evaluaciones
export const obtenerEvaluaciones = async () => {
    return makeAuthenticatedRequest('evaluaciones.php');
};

export const agregarEvaluacion = async (evaluacionData) => {
    return makeAuthenticatedRequest('evaluaciones.php', {
        method: 'POST',
        body: JSON.stringify(evaluacionData)
    });
};

export const eliminarEvaluacion = async (idEvaluacion) => {
    return makeAuthenticatedRequest(`evaluaciones.php?idEvaluacion=${idEvaluacion}`, {
        method: 'DELETE'
    });
};

// Servicios de países (para registro)
export const obtenerPaises = async () => {
    return fetch(`${API_BASE_URL}paises.php`)
        .then(response => response.json());
};
