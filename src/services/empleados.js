import axios from "@/api/axios.js";

export default {
    crearEmpleado(form){
        return axios.post('empleados/crear', form);
    },

    listarEmpleados(){
        return axios.get('empleados/listar');
    },

    detalleEmpelado(id){
        return axios.get(`empleados/listar/${id}`);
    },

    editarEmpleado(id, form){
        return axios.put(`empleados/editar/${id}`, form);
    },

    eliminarEmpleado(id){
        return axios.delete(`empleados/eliminar/${id}`);
    },

    generarReporteGeneral(){
        return axios.get('empleados/pdf-empleados');
    },

    reporteIndividual(id){
        return axios.get(`empleados/pdf-empleado/${id}`)
    }
}