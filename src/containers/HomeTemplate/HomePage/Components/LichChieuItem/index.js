import React from 'react'
import Button from "@material-ui/core/Button";
import { Link, NavLink } from "react-router-dom";
function LichChieuItem(props) {
    const {danhSachPhim}=props;
 
    
   
    const returnTimeMovie = (lstLichChieuTheoPhim, maPhim) => {
      return lstLichChieuTheoPhim.map((item) => {
        return (
          <div className="col-3 mb-1">
            <Link
              to={`/checkout/${item.maLichChieu}`}
              className="text-decoration-none"
            >
              <button  className=" w-100 btn btn-time ">
                <span className="text-decoration-none">
                  {item.ngayChieuGioChieu.slice(11, 16)}
                </span>
              </button>
            </Link>
          </div>
        );
      });
    };
     const renderHTML = () => {
      return danhSachPhim.map((item) => {
        return (
          <div>
            <div className="row mb-3">
              <div className="col-3">
                <Link
                  to={`/detail/${item.maPhim}`}
                  className="shadow-sm text-decoration-none"
                >
                  <img
                    src={item.hinhAnh}
                    style={{ height: "100px", width: "50px" }}
                    className="w-100"
                    alt=""
                  />
                </Link>
              </div>
              <div className="col-9">
                <p className="text-redorange mb-1">
                  <Link
                    to={`/detail/${item.maPhim}`}
                    className="shadow-none border-0 text-redorange text-decoration-none"
                  >
                    <b>{item.tenPhim}</b>
                  </Link>
                </p>
                {/* <p className="text-white">Mã phim: {item.maPhim}</p> */}
              </div>
              <div className="col-12">
                <div className="row">
                  <div
                    className="col-3 text-center text-white"
                    style={{ fontSize: "24px" }}
                  >
                    2D Digital
                  </div>
                  <div className="col-9">
                    <div className="row">
                      {returnTimeMovie(item.lstLichChieuTheoPhim, item.maPhim)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr style={{ height: "2px" }} />
          </div>
        );
      });
    };
    return <div className="container-fluid">{renderHTML()}</div>;
}

export default LichChieuItem
