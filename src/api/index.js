import Axios from "./axios"  // Importar el archivo axios configurado


// Encapsular la función de solicitud de axios y exportarla con export
export function getItemList(datas) {
    return Axios({
	url: "/api/getItemList",
	method: "post",
	headers: {
	    'Content-Type': 'application/x-www-form-urlencoded' // Establecer el formulario de formato de solicitud de encabezado de solicitud
	},
	data: datas
    })
}
export function getItem(datas) {
    return Axios({
	url: "/api/getItem",
	method: "post",
	headers: {
	    'Content-Type': 'application/json' // Establecer el formato de solicitud del encabezado de solicitud en json
	},
	data: datas
    })
}
export function getItemInfo(datas) {
    return Axios({
	url: "/api/getItemInfo"+datas,
        method: "get",
    })
}
