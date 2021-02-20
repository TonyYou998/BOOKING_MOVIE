import React from "react";
import ListMovie from "../ListMovie";
import Slider from "react-slick";
export default function ListMovieWrapper(props) {
  const renderListMovie = () => {
    const { data } = props;

    if (data && data.length > 0) {
      return data.map((movie, index) => {
        return <ListMovie movie={movie} />;
      });
    }
  };
  var settings = {
    dots: 0,
    infinite: 0,
    speed: 500,
    slidesToShow: 4,
    rows: 2,
    slidesToScroll: 4,
  };
  return (
    <div className="movie__wrapper  container" id="carlendar">
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item">
          <a
            className="nav-link active"
            id="home-tab"
            data-toggle="tab"
            href="#home"
            role="tab"
            aria-controls="home"
            aria-selected="true"
          >
            Đang Chiếu
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            id="profile-tab"
            data-toggle="tab"
            href="#profile"
            role="tab"
            aria-controls="profile"
            aria-selected="false"
          >
            Sắp Chiếu
          </a>
        </li>
      </ul>
      <div className="tab-content" id="myTabContent">
        <div
          className="tab-pane fade show active"
          id="home"
          role="tabpanel"
          aria-labelledby="home-tab"
        >
          <Slider {...settings}>{renderListMovie()}</Slider>
        </div>
        <div
          className="tab-pane fade"
          id="profile"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
          <Slider {...settings}>{renderListMovie()}</Slider>
        </div>
      </div>
    </div>
  );
}
