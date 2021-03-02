import { combineReducers } from "redux";
import listMovieReducer from "../../containers/HomeTemplate/HomePage/modules/ListMovieReducers";
import NewReducers from "../../containers/HomeTemplate/HomePage/modules/NewReducers";
import btgamebaucuareducer from "./btgamebaucuareducer";
import DetailMovieReducer from "../../containers/HomeTemplate/DetaiMovie/Modules/DetailMoviereduce";
import listCinemaReducer from "../../containers/HomeTemplate/HomePage/modules/ListCinemaReducer";
import listCinemaShowtimeReducer from "../../containers/HomeTemplate/HomePage/modules/ListCinemaShowtimeReducer";
import listMovieOnCinemaReducer from "../../containers/HomeTemplate/HomePage/modules/ListMovieOnCinemaReducer";
import getListDateTimeReducer from "../../containers/HomeTemplate/DetaiMovie/Modules/GetListDateTimeReducer";
import listGheReducer from "../../containers/CheckOutTemplate/CheckOutPage/Modules/ListGheReducer"
const rootReducer = combineReducers({
  listMovieReducer,
  NewReducers,
  btgamebaucuareducer,
  DetailMovieReducer,
  listCinemaReducer,
  listCinemaShowtimeReducer,
  listMovieOnCinemaReducer,
  getListDateTimeReducer,
  listGheReducer,
});
export default rootReducer;
