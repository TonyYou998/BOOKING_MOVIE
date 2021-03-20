import * as ActionType from "./constants";
const initialState = {
    data:[],
    err:null,
}

const searchMovieReducer= (state = initialState, action) => {
    switch (action.type) {

    case ActionType.SEACRH_MOVIE_REQUEST:
            state.data=null;
            state.err=null;
        return { ...state }
    case ActionType.SEACRH_MOVIE_SUCCESS:
      
        state.data=action.payload;
         console.log(state.data);
        state.err=false;
        return {...state}
    case ActionType.SEACRH_MOVIE_FAILED:
       
        state.err=action.payload;
         state.data=false;
        return {...state}
    default:
        return {...state}
    }
}
export default searchMovieReducer;
