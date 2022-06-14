import axios from 'axios'        // Introducir la biblioteca axios
//import qs from 'qs'              // Introduce el módulo qs que viene con node (conversión de formato de datos)

// Configuración predeterminada global 
let baseURL
// Determinar el entorno de desarrollo (generalmente utilizado para agentes locales)
if (process.env.NODE_ENV === 'development') { // Entorno de desarrollo
    baseURL = "http://127.0.0.1:8000/api/"// La solicitud de proxy local que configuró (proxy entre dominios),
    //a continuación, se presentará en detalle cómo realizar el proxy entre dominios
} else {                                      // Entorno del compilador
    if (process.env.type === 'test') {        // entorno de prueba
        baseURL = ''
    } else {                                  // Ambiente formal
        baseURL = ''
    }
}
// Configurar los atributos de axios

const Axios = axios.create({
    baseURL: baseURL, 		      // dirección de servicio en segundo plano
    timeout: 6000, 		      // El tiempo de espera de la solicitud es de 1 minuto
    responseType: "json",
    withCredentials: false,
    //headers: `bearer ${localStorage.accesToken}`    // Si permitir estos con cookies
});



// Establecer el interceptor 
//Si no se configura mediante la creación de una instancia, 
//entonces el siguiente Axios debe reemplazarse con axios, es decir,
// al comienzo del archivo que usa import para importar axios
// Variables definidas cuando 
Axios.interceptors.request.use((request) => {
    //Interceptar antes de enviar la solicitud
    // Puede configurar la información del encabezado de la solicitud aquí
    
    //config.headers["token"] = localStorage.accesToken;
    //config.headers["appkey"]    ejemplo de otros parametros que se pueden configurar
    if (request.method == "post") {
        //Aqui se pueden realizar acciones como cambiar el tipo de dato segun la solicitud entre otros
        //config.data = qs.stringify(config.data)
    }
    return request;
}, (error) => {
    //console.log("Transferencia de parámetro incorrecta ", 'fail');
    return Promise.reject(error)
})
Axios.interceptors.response.use((res) => {
    //Interceptar tras solicitud de respuesta
    if (res.status == 200) { 
        
        return Promise.resolve(res)
    }
    return res;
}, (error) => {
    // alerta ("Red anormal!") 404 y otros problemas se pueden manejar aquí
    console.log(error)
    if (error.response.status == 500) {
        return Promise.reject(error)
    }

    if (error.response.status === 403) {
        localStorage.removeItem('accesToken');
        return Promise.reject(error)
    }
    return Promise.reject(error)
})
export default Axios 
