import * as ActionType from "./constant";
const initialState = {
    data:null,
    err:null,
}

const historyReducer=(state = initialState, action) => {
    switch (action.type) {

    case ActionType.HISTORY_REQUEST:
        state.data=null;
        state.err=null;

        return { ...state }
    case ActionType.HISTORY_SUCCESS:
        state.data=action.payload;
        state.err=false;
        
    return {...state}
    case ActionType.HISTORY_FAILED:
        state.data=null;
        state.err=action.payload;
        return {...state}

    default:
        return {...state}
    }
}
export default historyReducer;
