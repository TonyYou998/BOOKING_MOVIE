import * as ActionType from "./constants";
import { mainAPi, mockApi } from "../../../../api";

export const actListMovieApi = () => {
  console.log("run");
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

// New

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
