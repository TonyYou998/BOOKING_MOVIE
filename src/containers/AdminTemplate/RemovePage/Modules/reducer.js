import * as ActionType from "./constants";
const initialState = {
    data:null,
    err:null,
}

 const listUserReducer= (state = initialState, action) => {
    switch (action.type) {

    case ActionType.FETCH_LIST_USER_REQUEST:
        state.data=null;
        state.err=null;
        return {...state}
    case ActionType.FETCH_LIST_USER_SUCCESS:
        state.data=action.payload;
        state.err=false;
           return {...state}
    case ActionType.FETCH_LIST_USER_FAILED:
        state.data=false;
        state.err=action.payload;
           return {...state}

    default:
          return {...state}
    }
}
export default listUserReducer;