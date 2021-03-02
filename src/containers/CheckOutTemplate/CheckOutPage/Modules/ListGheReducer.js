import * as ActionType from "../../../CheckOutTemplate/CheckOutPage/Modules/constants";
const initialState = {
    data:null,
    err:null,
}

const listGheReducer =(state = initialState, action) => {
    switch (action.type) {

    case ActionType.LIST_GHE_REQUEST:
        state.data=null;
        state.err=null;
        
        return { ...state }
    case ActionType.LIST_GHE_SUCCESS:
        state.data=action.payload;
        state.err=false;
        return {...state}
    case ActionType.LIST_GHE_Failed:
        state.data=false;
        state.err=action.payload;
    return {...state}

    default:
        return {...state}
    }

}
export default listGheReducer;
