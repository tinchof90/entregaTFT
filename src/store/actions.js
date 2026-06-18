
import { ON_LOGIN,ON_LOGOUT, REGISTRO, GET_CIUDADES, GET_ENVIOS, NEW_ENVIO, ELIM_ENVIO } from "./constants"

const onLoginAction = (user) => ({
    type: ON_LOGIN,
    payload: {
        user: user,
    }
});


const onLogoutAction = (user) => ({
    type: ON_LOGOUT,
  });

const registroAction = (user) => ({
    type: REGISTRO,
    payload: {
        user: user,
    }
});  


const getCiudadesAction = (ciudades) => ({
    type: GET_CIUDADES,
    payload: {
        ciudades: ciudades,
    }
});

const getEnviosAction = (envios) => ({
    type: GET_ENVIOS,
    payload: {
        envios: envios,
    }
});
const newEnvioAction = (newEnvio) => ({
    type: NEW_ENVIO,
    payload: {
        new_envio: newEnvio,
    }
});

const eliminarEnvioAction = (envioEliminado) => ({
    type: ELIM_ENVIO,
    payload: {
        elim_envio: envioEliminado,
    }
});

export { onLoginAction,onLogoutAction, registroAction, getCiudadesAction, getEnviosAction, newEnvioAction, eliminarEnvioAction };