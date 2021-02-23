import React from "react";
export default function SeatCheckout(props) {
    

    return (
        <div className="Checkout__wrapper">
            
            <div className="Checkout__topContent d-flex">
                <div className="lefttitle ">
                    <div className="logocinema">
                        <img src="https://s3img.vcdn.vn/123phim/2018/09/1721cfa98768f300c03792e25ceb0191.png"/>
                    </div>
                    <div className="contentcinema ml-2">
                        <p className="address m-0">CNS - Mỹ Tho</p>
                        <p className="timeNdate m-0">Hôm Nay</p>

                    </div>
                </div>
                <div className="righttitle">
                    <p style={{fontSize:"10px"}} className="m-0">Thời Gian Giữ Ghế</p>
                    <p>0:00</p>
                </div>
            </div>
            <div className="seatmap">
                <div className="screen">
                    <img style={{width:"100%"}} src="./img/screen.png"/>
                </div>
            </div>
        </div>
    )
}
