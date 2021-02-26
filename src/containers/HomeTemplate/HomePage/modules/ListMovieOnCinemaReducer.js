import * as ActionType from "./constants";
const initialState = {
    data:null,
    err:null,
}

const listMovieOnCinemaReducer = (state = initialState, action) => {

    switch (action.type) {

    case ActionType.LIST_MOVIE_ON_CINEMA_REQUEST:
        
        state.data=null;
        state.err=null;

        return { ...state}
    case ActionType.LIST_MOVIE_ON_CINEMA_SUCCESS:
        
        state.data=action.payload;
        state.err=false;
        return {...state}
    case ActionType.LIST_MOVIE_ON_CINEMA_FAILED:
        state.data=false;
        state.err=action.payload;
        return {...state}

    default:
        return {...state}
    }
}
export default  listMovieOnCinemaReducer ;
