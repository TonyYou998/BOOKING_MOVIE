import React, { Fragment } from "react";
import {Link} from "react-router-dom"
import $ from "jquery";
export default function NavbarHome() {
    
  const showName=()=>{
      if(localStorage.getItem("user")){
     
        const info=JSON.parse(localStorage.getItem("user"));
        
        return <Fragment>{info.taiKhoan}</Fragment>
      }
      else{
        return <Fragment>Đăng nhập</Fragment>
      }
  }

  $(window).scroll(()=>{
    if($(window).scrollTop()>90){
        $(".header").addClass("active__navbar");

    }
    else{
        $(".active__navbar").removeClass("active__navbar");

    }
}); 



  
  return (
    <div>
      <header className="header transition">
        <div className="row">
          <div className="col-xl-2 col-lg-2 col-md-2 col-1">
            <div className="header__logo">
              <Link to="/" className="d-flex  align-items-center">
                <img
                  src="https://image.freepik.com/free-vector/cinema-logo_23-2147503279.jpg?1"
                  alt="web-logo"
                />
                <span style={{textDecoration:"none",color:"white",fontSize:"20px"}} className="pl-2 header__title">Booking Movie</span>
              
              </Link>
            </div>
              
          </div>
          <div className="col-xl-7 col-lg-9 col-md-9 middleLi ">
            <nav className="header__nav">
              <ul>
                <li>
                  <a  href="#carlendar">Lịch Chiếu</a>
                  <a  href="#calendar">Cụm rạp</a>
                  {/* <a href="#news">Tin Tức</a> */}
                  <a  href="#app">Ứng Dụng</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-xl-3  login pl-0">
            <div className="header__login">
              <ul className="nav justify-content-end nav-pills">
                <li className="nav-item border-right" >
                  <img
                    src="https://tix.vn/app/assets/img/avatar.png"
                    alt="avatar"
                  />
                  <Link to={"/login"} className="nav-link " >
                    {showName()}
                  </Link>

                </li>
                <li className="nav-item dropdown">
                  <img
                    src="https://tix.vn/app/assets/img/icons/location-header.png"
                    alt="location-header"
                  />
                  <a
                    className="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                    href="#"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Hồ Chí Minh
                  </a>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">
                      Hà Nội
                    </a>
                    <a className="dropdown-item" href="#">
                      Đà Nẵng
                    </a>
                    <a className="dropdown-item" href="#">
                      Campuchia
                    </a>
                  </div>
                </li>
              </ul>
         
            </div>
          </div>
          <div className="dropdown__button col-lg-1 col-sm-2 col-2">
              <img src="https://tix.vn/app/assets/img/icons/menu-options.png"/>
          </div>
        </div>
      </header>
      
    </div>
  );
} 