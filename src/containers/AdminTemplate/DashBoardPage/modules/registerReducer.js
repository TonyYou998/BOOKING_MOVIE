import * as ActionType from "./constants";
const initialState = {
    data:null,
    err:null,
}

const registerReducer= (state = initialState, action) => {
    switch (action.type) {

    case ActionType.REG_REQUEST:

        return { ...state}
    case ActionType.REG_SUCCESS:
        return {...state}
    case ActionType.REG_FAILED:
        return {...state}

    default:
        return {...state};
    }
}
