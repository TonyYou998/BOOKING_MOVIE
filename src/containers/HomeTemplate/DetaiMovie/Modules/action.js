import * as ActionType from "./constants";
import { mainAPi } from "../../../../api";

export const actDetailMovieApi = (id) => {

  return (dispatch)=>{
    dispatch(actDetailMovieRequest());
    // console.log(id);
    
    // console.log(`/QuanLyPhim/LayThongTinPhim?MaPhim=${id.id}`);
    mainAPi
    .get(`/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`)
    .then((result)=>{
      // console.log(result.data);  
      dispatch(actDetailMovieSuccess(result.data));


    })
    .catch((err)=>{
    
      dispatch(actDetailMovieFailed(err));

    })
  }
};
const actDetailMovieRequest = () => {
  
  return {
    type: ActionType.DETAIL_MOVIE_REQUEST,
  };
};

const actDetailMovieSuccess = (data) => {
  
  return {
    type: ActionType.DETAIL_MOVIE_SUCCESS,
    payload: data,
  };
};
const actDetailMovieFailed = (err) => {
  return {
    type: ActionType.DETAIL_MOVIE_FAILED,
    payload: err,
  };
};
// list date time
export const actGetListDateTimeApi=(id)=>{
  
  return (dispatch)=>{
    dispatch(actGetListDateTimeRequest());
    mainAPi
    .get(`/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${id}`)
    .then((result)=>{
      dispatch(actGetListDateTimeSuccess(result.data));
      

    })
    .catch((err)=>{
      dispatch(actGetListDateTimeFailed(err));

    })
  }

}
const actGetListDateTimeRequest=()=>{
  return{
    type:ActionType.GET_LIST_DATE_TIME_REQUEST,
  }
}
const actGetListDateTimeSuccess=(data)=>{
  return {
    type:ActionType.GET_LIST_DATE_TIME_SUCCESS,
    payload:data,
  }
} 
const actGetListDateTimeFailed=(err)=>{
  return{
    type:ActionType.GET_LIST_DATE_TIME_FAILED,
    payload:err,
  }

}
