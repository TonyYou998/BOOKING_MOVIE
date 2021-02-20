import React from "react";

export default function News(props) {
  const { news } = props;

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-6 news__item">
            <div>
              <img className="new1__img" src={news.hinhAnh1} />
              <div className="news__tittle">
                {/* Khai trương rạp xịn giá ngon, chuẩn xì-tai Sài Gòn */}
                {news.tieuDe1}
              </div>
              <p className="news__content">
                {/* Cư dân nơi khác đang sắp “gato nổ mắt” với dân Sài Thành khi sắp
                tới đây thành phố HCM sẽ chào đón một rạp chiếu phim mang phong
                cách Artistic Urban Lifestyle đầu tiên tại Việt Nam! */}
                {news.noiDung1}
              </p>

              <div className="row">
                <div className="mr-4 ">
                  <i class="fa fa-thumbs-up"></i> {news.likes1}
                </div>
                <div className="mr-5 ">
                  <i class="fa fa-comment"></i> {news.cmt1}
                </div>
              </div>
            </div>
          </div>

          <div className="col-6 news__item">
            <div>
              <img className="new1__img" src={news.hinhAnh2} />
              <div className="news__tittle">{news.tieuDe2}</div>
              <p className="news__content">{news.noiDung2}</p>
              <div className="row">
                <div className="mr-4 ">
                  <i class="fa fa-thumbs-up"></i> {news.likes2}
                </div>
                <div className="mr-5 ">
                  <i class="fa fa-comment"></i> {news.cmt2}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="smallNew__item col-4">
            <img src={news.hinhAnh3} />
            <p class="news__tittle">{news.tieuDe3}</p>
            <p className="news__content">{news.noiDung2}</p>
            <div className="row">
              <div className="mr-5 ">
                <i class="fa fa-thumbs-up"></i> 0
              </div>
              <div className="mr-5 ">
                <i class="fa fa-comment"></i> 0
              </div>
            </div>
          </div>
          <div className="smallNew__item col-4">
            <img src="https://s3img.vcdn.vn/123phim/2020/10/ngo-thanh-van-chinh-thuc-khoi-dong-cuoc-thi-thiet-ke-trang-phuc-cho-sieu-anh-hung-dau-tien-cua-viet-nam-vinaman-16041597587981.jpg" />
            <p class="news__tittle">
              Tiệc Trăng Máu chính thức cán mốc 100 tỷ chỉ sau 2 tuần công chiếu
            </p>
            <p className="news__content">
              Sau 2 tuần ra mắt, Tiệc Trăng Máu chính thức gia nhập câu lạc bộ
              phim điện ảnh đạt 100 tỷ đồng doanh thu phòng vé. Dàn ngôi sao
              “bạc tỷ” của phim cũng lần đầu tiên hội tụ đầy đủ trong một
            </p>
            <div className="row">
              <div className="mr-5 ">
                <i class="fa fa-thumbs-up"></i> 0
              </div>
              <div className="mr-5 ">
                <i class="fa fa-comment"></i> 0
              </div>
            </div>
          </div>

          <div className="list__news col-4">
            <div className="demo">
              <img src="https://s3img.vcdn.vn/123phim/2020/08/da-n-my-nhan-trong-the-gio-i-die-n-a-nh-cu-a-qua-i-kie-t-christopher-nolan-15970503793246.png" />

              <p>
                Dàn mỹ nhân trong thế giới điện ảnh của quái kiệt Christopher
                Nolan
              </p>
            </div>
            <div className="demo">
              <img src="https://s3img.vcdn.vn/123phim/2020/08/truy-cung-giet-tan-cuoc-tai-ngo-cua-hai-ong-hoang-phong-ve-xu-han-15966122262210.png" />
              <p>
                Dàn mỹ nhân trong thế giới điện ảnh của quái kiệt Christopher
                Nolan
              </p>
            </div>
            <div className="demo">
              <img src="https://s3img.vcdn.vn/123phim/2020/07/tenet-cong-bo-ngay-khoi-chieu-chinh-thuc-tai-viet-nam-15959320275248.png" />
              <p>
                Dàn mỹ nhân trong thế giới điện ảnh của quái kiệt Christopher
                Nolan
              </p>
            </div>
            <div className="demo">
              <img src="https://s3img.vcdn.vn/123phim/2020/08/da-n-my-nhan-trong-the-gio-i-die-n-a-nh-cu-a-qua-i-kie-t-christopher-nolan-15970503793246.png" />
              <p>
                Dàn mỹ nhân trong thế giới điện ảnh của quái kiệt Christopher
                Nolan
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
