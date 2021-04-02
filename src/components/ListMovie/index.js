import React from "react";
import { Link } from "react-router-dom";
import TrailerModal from "../TrailerModal";

export default function ListMovie(props) {
  const { movie } = props;
  // console.log(movie);
  return (
    <div className="card  py-4 ">
      <img className="card-img-top" src={movie.hinhAnh} alt="Card image cap" />
      <div className="overlay"></div>
      
      <TrailerModal movie={movie}/>
      <div className="card-body">
        <h5 className="card-title text-center ">{movie.tenPhim}</h5>
        <span className="release__date">0 phút</span>

        <Link
          className="movie__button"
          to={`/detail/${movie.maPhim}`}
          style={{ textDecoration: "none" }}
        >
          Mua Vé
        </Link>
      </div>
    </div>
  );
}
