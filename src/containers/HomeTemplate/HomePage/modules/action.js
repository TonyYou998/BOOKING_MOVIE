import * as ActionType from "./constants";
import { mainAPi, mockApi } from "../../../../api";

export const actListMovieApi = () => {
 
  return (dispatch) => {
    dispatch(actListMovieRequest());

    mainAPi
      .get("/QuanLyPhim/LayDanhSachPhim?maNhom=GP01")
      .then((result) => {
        dispatch(actListMovieSuccess(result.data));
      })
      .catch((err) => {
        dispatch(actListMovieFailed(err));
      });
  };
};
// listMovie
const actListMovieRequest = () => {
  return {
    type: ActionType.LIST_MOVIE_REQUEST,
  };
};

const actListMovieSuccess = (data) => {
  return {
    type: ActionType.LIST_MOVIE_SUCCESS,
    payload: data,
  };
};

const actListMovieFailed = (err) => {
  return {
    type: ActionType.LIST_MOVIE_FALIED,
    payload: err,
  };
};

// News

export const actNewApi = () => {
  return (dispatch) => {
    dispatch(actNewRequest());

    mockApi
      .get("/news")
      .then((result) => {
        dispatch(actNewSuccess(result.data));
      })
      .catch((err) => {
        dispatch(actNewFailed(err));
      });
  };
};
const actNewRequest = () => {
  return {
    type: ActionType.LIST_NEW_REQUEST,
  };
};
const actNewSuccess = (NewData) => {
  return {
    type: ActionType.LIST_NEW_SUCCESS,
    payload: NewData,
  };
};
const actNewFailed = (err) => {
  return {
    type: ActionType.LIST_NEW_FAILED,
    payload: err,
  };
};
// list cinema
export const actListCinemaApi=()=>{
  return (dispatch)=>{
    dispatch(actListCinemaRequest());
    mainAPi
    .get("/QuanLyRap/LayThongTinHeThongRap")
    .then((result)=>{
    
      dispatch(actListCinemaSuccess(result.data));

    })
    .catch((err)=>{
      dispatch(actListCinemaFailed(err));

    })
  }
}
const actListCinemaRequest=()=>{
 
  return {
    type:ActionType.LIST_CINEMA_REQUEST,
  }
}
const actListCinemaSuccess=(data)=>{
  return {
    type:ActionType.LIST_CINEMA_SUCCESS,
    payload:data,
  }

}
const actListCinemaFailed=(err)=>{
  return {
    type:ActionType.LIST_MOVIE_FALIED,
    payload:err,
  }

}
//list cinema showtime
export const actListCinemaShowtimeApi=(id)=>{
  
  return (dispatch)=>{
    
    dispatch(actListCinemaShowtimeRequest());
   
    mainAPi
    .get(`/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${id}`)
    .then((result)=>{
   
      dispatch(actListCinemaShowtimeSuccess(result.data));

    })
    .catch((err)=>{
      dispatch(actListCinemaShowtimeFailed(err));

    })
  }
}
const actListCinemaShowtimeRequest=()=>{
 
  return {
    type:ActionType.LIST_CINEMA_SHOWTIME_REQUEST,
  }
}
const actListCinemaShowtimeSuccess=(data)=>{
 
  return {
    type:ActionType.LIST_CINEMA_SHOWTIME_SUCCESS,
    payload:data,
  }

}
const actListCinemaShowtimeFailed=(err)=>{
 
  return {
    type:ActionType.LIST_CINEMA_SHOWTIME_FAILED,
    payload:err,
  }

}
// listPhimTheoHeThongRap
export  const actListMovieOnCinemaApi=(id)=>{
  // console.log(id);
  return (dispatch)=>{
    
    dispatch(actListMovieOnCinemaRequest());
    mainAPi
    .get(`/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${id}&maNhom=GP01`)
    .then((result)=>{
      
      dispatch(actListMovieOnCinemaSuccess(result.data));

    })
    .catch((err)=>{
      dispatch(actListMovieOnCinemaFailed(err));

    })

  }

}
const actListMovieOnCinemaRequest=()=>{
  
  return {
    type:ActionType.LIST_MOVIE_ON_CINEMA_REQUEST,
    
  }
}
const actListMovieOnCinemaSuccess=(data)=>{
 
  return{
    type:ActionType.LIST_MOVIE_ON_CINEMA_SUCCESS,
    payload:data,
  }

}
const actListMovieOnCinemaFailed=(err)=>{
  return {
    type:ActionType.LIST_MOVIE_ON_CINEMA_FAILED,
    payload:err,
  }

}
