import axios from "@/api/axios.js";

export default {
    listarContratos(){
        return axios.get('contratos/tipos-contrato')
    }
}