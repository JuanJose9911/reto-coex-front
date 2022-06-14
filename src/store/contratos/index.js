import axios from "@/services/contratos.js";
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default {
    state: {
        contratos: new Array,
    },
    mutations: {
        set_contratos(state, payload){
            state.contratos = payload
        }
    },
    getters: {
        contratos: state => state.contratos
    },
    actions: {
        async obtener_contratos({commit}){
            const {data} = await axios.listarContratos();
            if(data.data) {
                commit('set_contratos', data.data);
            }
        }
    }
}