import { ON_LOGIN,ON_LOGOUT, GET_CIUDADES, GET_ENVIOS, NEW_ENVIO, ELIM_ENVIO } from "./constants";

const initialState = {
    user: null,
    ciudades: [],
    envios: [],
    new_envio: {},
    elim_envio: {},

}

const appReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case ON_LOGIN:
            return { ...state, user: payload.user };
        case ON_LOGOUT:
            return { ...state, user: null };
        case GET_CIUDADES:
            return { ...state, ciudades: payload.ciudades };
        case GET_ENVIOS:
            return { ...state, envios: payload.envios };
        case NEW_ENVIO:
            return { ...state, new_envio: payload.new_envio };
        case ELIM_ENVIO:
            return { ...state, elim_envio: payload.elim_envio };    
        default:
            return state
    }
}


export default appReducer;