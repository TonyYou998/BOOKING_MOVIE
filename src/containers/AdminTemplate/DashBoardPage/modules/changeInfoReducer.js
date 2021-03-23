import * as ActionType from "./constants";
const initialState = {
    data:null,
    err:null,
}

export default (state = initialState, actiion) => {
    switch (actiion.type) {

    case typeName:
        return { ...state, ...payload }

    default:
        return state
    }
}
