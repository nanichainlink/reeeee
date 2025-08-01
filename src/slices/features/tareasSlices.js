import { createSlice } from "@reduxjs/toolkit";
const initialState = []
const tareasSlice = createSlice({
    name: "tareas",
    initialState,
    reducers: {

        cargaInicialTareasSlice: (state, action) => {
            const tareasNuevas = action.payload;
            console.log('tareasNuevas', tareasNuevas)
            //sin return solo mutando
            return tareasNuevas;
        },

        agregarTareaSlice: (state, action) => {
            const tareaNueva = action.payload;
            //sin return solo mutando
            state.push(tareaNueva)
        },

        borrarTareaSlice: (state, action) => {
            const tareaId = action.payload;
            const estadoActual = state.filter(t => t.id != tareaId);
            console.log('estadoActual', estadoActual)
            return estadoActual;
        },



        cambiarCheckSlice: (state, action) => {
            const { idTarea, completed } = action.payload;

            const tareaModificar = state.find(t => t.id == idTarea);
            tareaModificar.completed = completed;
            return state;


            // const estadoActual = state.filter(t => t.id != tareaId);
            // console.log('estadoActual', estadoActual)
            // return estadoActual;
        },


    },
});
export const { agregarTareaSlice, cargaInicialTareasSlice, borrarTareaSlice, cambiarCheckSlice } = tareasSlice.actions;
export default tareasSlice.reducer;



/**
 * 
 * saldarDeuda: state => initialState, //devuelve estado inicial
        comprarBebidasApu: state => {
            const deudaBebidas = state.bebidas + 10;
            return {
                ...state,
                cervezas: deudaBebidas,
            };
        },
 */