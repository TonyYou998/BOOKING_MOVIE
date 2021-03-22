import { combineReducers } from "redux";
import listMovieReducer from "../../containers/HomeTemplate/HomePage/modules/ListMovieReducers";
import NewReducers from "../../containers/HomeTemplate/HomePage/modules/NewReducers";

import DetailMovieReducer from "../../containers/HomeTemplate/DetaiMovie/Modules/DetailMoviereduce";
import listCinemaReducer from "../../containers/HomeTemplate/HomePage/modules/ListCinemaReducer";
import listCinemaShowtimeReducer from "../../containers/HomeTemplate/HomePage/modules/ListCinemaShowtimeReducer";
import listMovieOnCinemaReducer from "../../containers/HomeTemplate/HomePage/modules/ListMovieOnCinemaReducer";
import getListDateTimeReducer from "../../containers/HomeTemplate/DetaiMovie/Modules/GetListDateTimeReducer";
import listGheReducer from "../../containers/CheckOutTemplate/CheckOutPage/Modules/ListGheReducer"
import datVeReducer from "../../containers/CheckOutTemplate/CheckOutPage/Modules/DatVeReducer";
import loginReducer from "../../containers/AdminTemplate/DashBoardPage/modules/loginReducer";
import historyReducer from "../../containers/AdminTemplate/HistoryPage/Modules/reducer";
import listUserReducer from "../../containers/AdminTemplate/RemovePage/Modules/reducer";
import searchMovieReducer from "../../containers/HomeTemplate/HomePage/modules/SearchMovieReducer";
import detailInfoReducer from "../../containers/AdminTemplate/DashBoardPage/modules/detailInfoReducer";
const rootReducer = combineReducers({
  listMovieReducer,
  NewReducers,
 
  DetailMovieReducer,
  listCinemaReducer,
  listCinemaShowtimeReducer,
  listMovieOnCinemaReducer,
  getListDateTimeReducer,
  listGheReducer,
  datVeReducer,
  loginReducer,
  historyReducer,
  listUserReducer,
 searchMovieReducer,
 detailInfoReducer,
});
export default rootReducer;
