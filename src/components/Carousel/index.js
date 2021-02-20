import React from "react";

export default function Carousel(props) {
  const { arrMovie } = props;
  let anh1 = arrMovie[0],
    anh2 = arrMovie[1],
    anh3 = arrMovie[2];
  // console.log(props);

  // console.log(anh1);

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
              <a href="#">
                <div class="carousel__overlay"></div>
                <img
                  className="d-block w-100"
                  src="https://s3img.vcdn.vn/123phim/2021/01/lua-deu-gap-lua-dao-16105107337344.jpg"
                  alt="First slide"
                />

                <i class="fa fa-play-circle"></i>
              </a>
            </div>
            <div className="carousel-item">
              <a href="#">
                <div class="carousel__overlay"></div>
                <img
                  className="d-block w-100"
                  src="https://s3img.vcdn.vn/123phim/2021/01/sam-hoi-16106874942953.jpg"
                  alt="First slide"
                />

                <i class="fa fa-play-circle"></i>
              </a>
            </div>
            <div className="carousel-item">
              <a href="#">
                <div class="carousel__overlay"></div>
                <img
                  className="d-block w-100"
                  src="https://s3img.vcdn.vn/123phim/2021/01/em-la-cua-em-16106818552756.jpg"
                  alt="First slide"
                />

                <i class="fa fa-play-circle"></i>
              </a>
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
