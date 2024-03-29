import React from "react";
import ListMovie from "../../../../../components/ListMovie";
import Slider from "react-slick";
import ListMovieMobile from "../ListMovieMobile";
export default function ListMovieWrapper(props) {
  const renderListMovie = () => {
    const { data } = props;

    if (data && data.length > 0) {
      return data.map((movie, index) => {
        return <ListMovie key={index} movie={movie} />;
      });
    }
  };
  var settings = {
  
       dots: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      // autoplay: true,
      // speed: 0,
      rows:1,
      // autoplaySpeed: 0,
      // cssEase: "linear"
  };
  return (
    <div className="movie__wrapper " id="carlendar">
      <div className="container">

      
          {/* desktop */}
         
          <ul className="nav nav-tabs desktop pb-4" id="myTab" role="tablist">
        <li className="nav-item px-1">
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
        <li className="nav-item px-1">
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
      
         <div className="tab-content desktop" id="myTabContent">
                <div
          className="tab-pane display__desktop fade show active"
          id="home"
          role="tabpanel"
          aria-labelledby="home-tab"
        >
          <Slider {...settings}>{renderListMovie()}</Slider>
        </div>
                <div
          className="tab-pane  display__desktop fade"
          id="profile"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
          <Slider {...settings}>{renderListMovie()}</Slider>
        </div>


        </div>
        {/* mobile */}

         <ul className="nav nav-tabs mobile__display " style={{display:"none"}} id="myTab" role="tablist">
            <li className="nav-item">
          <a
            className="nav-link active"
            id="home-tab"
            data-toggle="tab"
            href="#home__mobile"
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
            href="#profile__mobile"
            role="tab"
            aria-controls="profile"
            aria-selected="false"
          >
            Sắp Chiếu
          </a>
        </li>
        </ul>

        <div className="tab-content mobile" id="myTabContent">
        <div
          className="tab-pane display__desktop fade show active"
          id="home__mobile"
          role="tabpanel"
          aria-labelledby="home-tab"
        >
            <ListMovieMobile data={`https://s3img.vcdn.vn/123phim/2021/03/bo-gia-16146819941008.png`} id={5967}/>
             <ListMovieMobile data={`https://s3img.vcdn.vn/123phim/2021/03/chaos-walking-16158835840511.jpg`} id={6018}/>
              <ListMovieMobile data={`https://s3img.vcdn.vn/123phim/2021/03/palm-springs-16146820863959.jpg`} id={6019}/>
             
        </div>
        <div
          className="tab-pane  display__desktop fade"
          id="profile__mobile"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
          <ListMovieMobile data={`https://s3img.vcdn.vn/123phim/2021/03/bo-gia-16146819941008.png`}/>
             <ListMovieMobile data={`https://s3img.vcdn.vn/123phim/2021/03/chaos-walking-16158835840511.jpg`}/>
              <ListMovieMobile data={`https://s3img.vcdn.vn/123phim/2021/03/palm-springs-16146820863959.jpg`}/>
        </div>


      </div>


    </div>
    </div>



  );
}
