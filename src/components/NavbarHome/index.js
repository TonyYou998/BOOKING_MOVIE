import React from "react";
import {Link} from "react-router-dom"
export default function NavbarHome() {
  return (
    <div>
      <header className="header">
        <div className="row">
          <div className="col-3">
            <div className="header__logo">
              <Link to="/home">
                <img
                  src="https://tix.vn/app/assets/img/icons/web-logo.png"
                  alt="web-logo"
                />
              </Link>
            </div>
          </div>
          <div className="col-6">
            <nav className="header__nav">
              <ul>
                <li>
                  <a href="#carlendar">Lịch Chiếu</a>
                  <a href="#time-table">Cụm rạp</a>
                  <a href="#news">Tin Tức</a>
                  <a href="#app">Ứng Dụng</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-3">
            <div className="header__login">
              <ul className="nav nav-pills">
                <li className="nav-item border-right">
                  <img
                    src="https://tix.vn/app/assets/img/avatar.png"
                    alt="avatar"
                  />
                  <a className="nav-link" href="#">
                    Đăng Nhập
                  </a>
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
        </div>
      </header>
    </div>
  );
}
