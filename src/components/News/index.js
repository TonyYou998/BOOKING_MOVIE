import React from "react";

export default function News(props) {
  const { news } = props;

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-6 news__item">
            <div>
              {/* {news.hinhAnh1} */}
              <img className="new1__img" src="https://s3img.vcdn.vn/123phim/2021/01/khai-truong-rap-xin-gia-ngon-chuan-xi-tai-sai-gon-16111317082644.jpg" />
              <div className="news__tittle">
                Khai trương rạp xịn giá ngon, chuẩn xì-tai Sài Gòn
                {/* {news.tieuDe1} */}
              </div>
              <p className="news__content">
                Cư dân nơi khác đang sắp “gato nổ mắt” với dân Sài Thành khi sắp
               
                {/* {news.noiDung1} */}
              </p>

              <div className="row">
                <div className="mr-4 ">
                  <i class="fa fa-thumbs-up"></i>5
                </div>
                <div className="mr-5 ">
                  <i class="fa fa-comment"></i> 6
                </div>
              </div>
            </div>
          </div>

          <div className="col-6 news__item">
            <div>
              <img className="new1__img" src="https://s3img.vcdn.vn/123phim/2020/11/boc-tem-to-hop-giai-tri-moi-toanh-cua-gioi-ha-thanh-16056938333773.jpg" />
              <div className="news__tittle">asdasdsada sadasda</div>
              <p className="news__content">dsd shadhaskd jkhashkd</p>
              <div className="row">
                <div className="mr-4 ">
                  <i class="fa fa-thumbs-up"></i> 55
                </div>
                <div className="mr-5 ">
                  <i class="fa fa-comment"></i> 99
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row small-news__mobile">
          <div className="smallNew__item col-4">
            <img src="https://s3img.vcdn.vn/123phim/2020/11/tiec-trang-mau-chinh-thuc-can-moc-100-ty-chi-sau-2-tuan-cong-chieu-16043752411629.png" />
            <p class="news__tittle">adas bdgjkeerw wek</p>
            <p className="news__content">jsjsj bjdawjjkh ewkhe</p>
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
              phim điện ảnh đạt 100 tỷ đồng doanh thu phòng vé. 
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
