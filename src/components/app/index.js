import React from "react";

export default function App() {
  return (
    <div id="app">
      <section className="app" style={{ background: "url(./img/backapp.jpg)" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <div className="app__text">
                <h5>Ứng dụng tiện lợi dành cho người yêu điện ảnh</h5>
                <p>
                  Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp
                  và đổi quà hấp dẫn.
                </p>
                <button>
                  <a href="#">App miễn phí - Tải về ngay!</a>
                </button>
                <span>
                  TIX có hai phiên bản <a href="#">iOS</a> &amp;
                  <a href="#">Android</a>
                </span>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="app__mobile ">
                <div className="mobile__case">
                  <div className="mobile__iphone">
                    <img
                      src="https://tix.vn/app/assets/img/icons/mobile.png"
                      alt="mobile"
                    />
                  </div>
                  <div className="mobile__slide">
                    <img
                      src="https://tix.vn/app/assets/img/icons/slide/slide1.jpg"
                      alt="slide1"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
