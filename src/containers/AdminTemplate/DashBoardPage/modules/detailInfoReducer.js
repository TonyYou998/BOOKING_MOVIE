import * as ActionType from "./constants";
const initialState = {
    data:null,
    err:null,
}

const detailInfoReducer= (state = initialState, action) => {
    switch (action.type) {

    case ActionType.DETAIL_INFO_REQUEST:
        state.err=null;
        state.data=null;
        return {...state}
    case ActionType.DETAIL_INFO_SUCCESS:
        state.err=false;
        state.data=action.payload;
        return {...state}
    case ActionType.DETAIL_INFO_FAILED:
         state.err=action.payload;
        state.data=false;
        return { ...state }

    default:
        return {...state}
    }
}


export default detailInfoReducer;