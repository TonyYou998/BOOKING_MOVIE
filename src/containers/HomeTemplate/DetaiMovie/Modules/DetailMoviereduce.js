import * as ActionType from "./constants";
const initialState = {
  data: null,
  err: null,
  loading:false,
};

const DetailMovieReducer = (state = initialState, action) => {
  
  switch (action.type) {
    case ActionType.DETAIL_MOVIE_REQUEST:
      state.loading=true;
      state.data = null;
      state.err = null;

      return { ...state };
    case ActionType.DETAIL_MOVIE_SUCCESS:
     
      state.data = action.payload;
      state.err = null;
      state.loading=false;
      return { ...state };
    case ActionType.DETAIL_MOVIE_FAILED:
      state.data = null;
      state.err = action.payload;
      state.loading=false;
      return { ...state };

    default:
      return state;
  }
};
export default DetailMovieReducer;
