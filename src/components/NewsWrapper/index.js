import React from "react";
import News from "../News";

export default function NewsWrapper(props) {
  const renderNews = () => {
   
    const { data } = props;
  
    if (data && data.length > 0) {
      return <News news={data[0]} />;
    }
  };
  return (
    <div id="news">
      <nav className="container">
        <div
          class="nav nav-tabs news__wrapper  "
          style={{
            background: "url(./img/back-news.png)"
          }}
          id="nav-tab"
          role="tablist"
        >
          <a
            class="nav-item nav-link active"
            id="nav-home-tab"
            data-toggle="tab"
            href="#nav-home"
            role="tab"
            aria-controls="nav-home"
            aria-selected="true"
          >
            Điện Ảnh 24h
          </a>
          <a
            class="nav-item nav-link"
            id="nav-profile-tab"
            data-toggle="tab"
            href="#nav-profile"
            role="tab"
            aria-controls="nav-profile"
            aria-selected="false"
          >
            Review
          </a>
          <a
            class="nav-item nav-link"
            id="nav-contact-tab"
            data-toggle="tab"
            href="#nav-contact"
            role="tab"
            aria-controls="nav-contact"
            aria-selected="false"
          >
            Khuyến Mãi
          </a>
        </div>
      </nav>

      <div class="tab-content" id="nav-tabContent">
        <div
          class="tab-pane fade show active"
          id="nav-home"
          role="tabpanel"
          aria-labelledby="nav-home-tab"
        >
          {renderNews()}
          <br />
          <br />
          <div className="showmore__button">
            <button>XEM THÊM</button>
          </div>
        </div>
        
     
      </div>
    </div>
  );
}
