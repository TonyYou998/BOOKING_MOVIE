import React from "react";
import {Link} from "react-router-dom";
import TrailerModal from "../TrailerModal";
export default function Carousel(props) {
  const { arrMovie,arrCode } = props;
  
  let anh1 = arrMovie[0],
    anh2 = arrMovie[1],
    anh3 = arrMovie[2];
    let code1=arrCode[0],code2=arrCode[1],code3=arrCode[2];
  

  

  return (
    <div>
      <div>
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <div class="play__button"></div>
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to={0}
              className="active"
            />
            <li data-target="#carouselExampleIndicators" data-slide-to={1} />
            <li data-target="#carouselExampleIndicators" data-slide-to={2} />
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <Link to={`/detail/${code1}`}>
                <div class="carousel__overlay"></div>
                 
                <img
                  className="d-block w-100"
                  src={anh1}
                  alt="First slide"
                />

                
                <TrailerModal/>
              </Link>
            </div>
            <div className="carousel-item">
              <Link to={`/detail/${code2}`}>
                <div class="carousel__overlay"></div>
                 
                <img
                  className="d-block w-100"
                 src={anh2}
                  alt="First slide"
                />

                <i class="fa fa-play-circle"></i>
              </Link>
            </div>
            <div className="carousel-item">
              <Link to={`/detail/${code3}`}>
                <div class="carousel__overlay"></div>
                 
                <img
                  className="d-block w-100"
                  src={anh3}
                  alt="First slide"
                />

                <i class="fa fa-play-circle"></i>
              </Link>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  );
}
