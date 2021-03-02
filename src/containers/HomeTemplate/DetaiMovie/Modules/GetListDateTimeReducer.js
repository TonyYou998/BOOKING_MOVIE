import * as ActionType from "./constants";
const initialState = {
    data:null,
    err:null,
}

const getListDateTimeReducer = (state = initialState, action) => {
    switch (action.type) {

    case ActionType.GET_LIST_DATE_TIME_REQUEST:
        state.data=null;
        state.err=null;
       
        
        return { ...state }
    case ActionType.GET_LIST_DATE_TIME_SUCCESS:
        state.data=action.payload;
        state.err=false;
        return {...state}
    case ActionType.GET_LIST_DATE_TIME_FAILED:
        state.data=false;
        state.err=action.payload;
        return {...state}
    default:
        return {...state}
    }
}
export default getListDateTimeReducer;