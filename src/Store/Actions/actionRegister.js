// import axios from "axios";


export function loginRegister(values){
    return async function(dispatch){
        try {
            
            // Habilitar linea cuando se pueda conectar con la base de datos 
            // y pasarle la respuesta al payload para que se genere un estado con la 
            // respúesta del back end
            // const registerResponse = await axios.post(`http://localhost:3001/users/register`,values)

            dispatch({
                type : "SUCCESSFUL_REGISTER",
                payload : "Registro exitoso"
            })

        } catch (e) {
            dispatch({
                type : "ERROR_REGISTER",
                payload : "No se puedo completar el registro, intente de nuevo"
            })
        }   
    }
}