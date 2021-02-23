import React from "react";
import {Link} from "react-router-dom"
export default function NavbarCheckout() {
  return (
    <div className="navbar__wrapper">
       <nav className="navbar navbar-expand-lg navbar-light ">
          <div className="container-fluid">
         
            <div className="collapse navbar-collapse d-flex " id="navbarNav">
              <ul className="navbar-nav ">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">01 CHỌN GHẾ & THANH TOÁN</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">02 KẾT QUẢ ĐẶT VÉ</a>
                </li>
               
              </ul>
              <div style={{color:"rgb(225,225,225)"}}>
                USER
              </div>
            </div>
          </div>
        </nav>

    </div>
  );
}
