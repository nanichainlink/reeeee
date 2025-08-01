
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    objetivos: [],
    evaluaciones: [],
    usuario: null,
    token: null,
    filtroFecha: 'todas', // 'semana', 'mes', 'todas'
    loading: false,
    error: null
}

const goalifySlice = createSlice({
    name: 'goalify',
    initialState,
    reducers: {
        setUsuario: (state, action) => {
            state.usuario = action.payload.usuario;
            state.token = action.payload.token;
        },
        logout: (state) => {
            state.usuario = null;
            state.token = null;
            state.evaluaciones = [];
            state.objetivos = [];
        },
        setObjetivos: (state, action) => {
            state.objetivos = action.payload;
        },
        setEvaluaciones: (state, action) => {
            state.evaluaciones = action.payload;
        },
        agregarEvaluacion: (state, action) => {
            state.evaluaciones.push(action.payload);
        },
        eliminarEvaluacion: (state, action) => {
            state.evaluaciones = state.evaluaciones.filter(
                evaluacion => evaluacion.id !== action.payload
            );
        },
        setFiltroFecha: (state, action) => {
            state.filtroFecha = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        }
    }
});

export const {
    setUsuario,
    logout,
    setObjetivos,
    setEvaluaciones,
    agregarEvaluacion,
    eliminarEvaluacion,
    setFiltroFecha,
    setLoading,
    setError
} = goalifySlice.actions;

export default goalifySlice.reducer;
