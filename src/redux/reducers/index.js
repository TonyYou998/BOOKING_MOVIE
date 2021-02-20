import { combineReducers } from "redux";
import listMovieReducer from "../../containers/HomeTemplate/HomePage/modules/ListMovieReducers";
import NewReducers from "../../containers/HomeTemplate/HomePage/modules/NewReducers";
import btgamebaucuareducer from "./btgamebaucuareducer";
import DetailMovieReducer from "../../containers/HomeTemplate/DetaiMovie/Modules/DetailMoviereduce";
const rootReducer = combineReducers({
  listMovieReducer,
  NewReducers,
  btgamebaucuareducer,
  DetailMovieReducer,
});
export default rootReducer;
