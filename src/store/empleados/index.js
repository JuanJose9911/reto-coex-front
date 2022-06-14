import axios from "@/services/empleados.js";
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default {
    state: {
        empleados: [],
        empleado: [],
        pdf: ''
    },
    mutations: {
        set_empleados(state, payload){
            state.empleados = payload
        },
        set_empleado(state, payload){
            state.empleado = payload
        },
        set_pdf(state, payload){
            state.pdf = payload
        }
    },
    getters: {
        empleados: state => state.empleados,
        empleado: state => state.empleado,
        pdf: state => state.pdf
    },
    actions: {
        async obtener_empleados({commit}){
            const {data} = await axios.listarEmpleados();
            if(data) {
                commit('set_empleados', data);
            }
        },

        async detalle_empleado({commit}, id){
            const {data} = await axios.detalleEmpelado(id);
            if(data) {
                commit('set_empleado', data);
            }
        },

        async crear_empleado({commit}, payload){
            const {data} = await axios.crearEmpleado(payload);
            if (data) {
                commit('set_empleado', data);
                return true;
            }
            return false;
        },

        async editar_empleado({commit}, payload){
            const { id } = payload;
            const {data} = await axios.editarEmpleado(id, payload);
            if(data){
                commit('set_empleado', data);
                return true
            }
        },

        async eliminar_empleado({dispatch}, id){
            const {data} = await axios.eliminarEmpleado(id);
            if (data) {
                await dispatch('obtener_empleados');
            }
        },

        async reporte_general({commit}){
            const {data} = await axios.generarReporteGeneral();
            if (data) {
                commit('set_pdf', data)
            }
        },

        async reporte_individual({commit}, id){
            const {data} = await axios.reporteIndividual(id);
            if (data) {
                commit('set_pdf', data);
            }
        }
    }
}