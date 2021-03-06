import * as ActionType from "./constants";
const initialState = {
    data:null,
    err:null,
    loading:null,
}

const loginReducer= (state = initialState, action) => {
    switch (action.type) {

    case ActionType.LOGIN_REQUEST:
        state.data=null;
        state.err=null;
        state.loading=true;
        return { ...state}
    case ActionType.LOGIN_SUCCESS:
        // console.log(action.payload);
        console.log("run reducer");
        state.data=action.payload;
        state.err=false;
        state.loading=null;
        return {...state}
    case ActionType.LOGIN_FAILED:
        state.data=false;
        state.err=true;
        state.loading=null;
        return {...state}
    case ActionType.LOGIN_CLEAR_DATA:
        state.data=null;
        state.err=null;
        state.loading=false;

    default:
        return {...state}
    }
}
export default loginReducer;
