import React from "react";
import SeatRow from "../SeatRow";
export default function SeatCheckout(props) {
    const {data}=props;
    
  
    return (
        <div className="Checkout__wrapper">
            
            <div className="Checkout__topContent d-flex">
                <div className="lefttitle ">
                    {/* <div className="logocinema">
                        <img src="https://s3img.vcdn.vn/123phim/2018/09/1721cfa98768f300c03792e25ceb0191.png"/>
                    </div> */}
                    <div className="contentcinema ml-2">
                        <p className="address m-0" style={{color:"#8bc541"}}>{data && data.thongTinPhim.tenCumRap}</p>
                        <p className="timeNdate m-0" style={{fontSize:"14px",color:"#9b9b9b"}}><span>{data && data.thongTinPhim.ngayChieu} - </span>{data && data.thongTinPhim.gioChieu} - {data && data.thongTinPhim.tenRap}</p>

                    </div>
                </div>
                <div className="righttitle">
                    <p style={{fontSize:"10px"}} className="m-0">Thời Gian Giữ Ghế</p>
                    <p>0:00</p>
                </div>
            </div>
            <div className="seatmap">
                <div className="screen">
                    <img style={{width:"100%"}} src="https://tix.vn/app/assets/img/icons/screen.png"/>
                </div>
                <div className="seat_row">
                        <SeatRow data={data}/>

                </div>
            </div>
        </div>
    )
}
