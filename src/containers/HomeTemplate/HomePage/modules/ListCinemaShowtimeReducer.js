import * as ActionType from "./constants";
const initialState = {
    data:null,
    err:null,
}

 const listCinemaShowtimeReducer = (state = initialState, action) => {
    switch (action.type) {

    case ActionType.LIST_CINEMA_SHOWTIME_REQUEST:
        
        state.data=null;
        state.err=null;
        return { ...state }
    case ActionType.LIST_CINEMA_SHOWTIME_SUCCESS:
        // console.log(action.payload);
        state.data=action.payload;
        state.err=false;
        return {...state}
    case ActionType.LIST_CINEMA_SHOWTIME_FAILED:
        state.data=false;
        state.err=action.payload;
        return {...state}
    default:
        return {...state}

    }
}
export default listCinemaShowtimeReducer;
