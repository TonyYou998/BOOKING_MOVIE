import { data } from "jquery";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import { useHistory, useParams } from "react-router";
import {actDatVeApi} from "../../containers/CheckOutTemplate/CheckOutPage/Modules/action";
export default function DetailTicket(props) {
    let history=useHistory();
    let {id}=useParams();
    
    const listGhe = useSelector(state => state.datVeReducer.data);
    let movieData=useSelector(state=>state.listGheReducer.data);
    const thongTinPhim=movieData && movieData.thongTinPhim;
   
    let gheData=useSelector(state=>state.datVeReducer.data);
    let dispatch=useDispatch();
    const rennderMaGhe=(data)=>{
    
        return data.map((item,index)=>{
    
            return (<span>{item.tenGhe},</span>)

            
        })

    }
    const renderTotalFee=(data)=>{

       return data.reduce((sum,item,index)=>{
           
           return sum+=item.giaVe;

       },0)

    }
    const handleDatVe=(history)=>{
        if(localStorage.getItem("user")){
            const info=JSON.parse(localStorage.getItem("user"));
          
           const data={
                maLichChieu:id,
                danhSachVe:listGhe,
                taiKhoanNguoiDung:info.taiKhoan,
            }
           console.log(data);
           dispatch(actDatVeApi(data,info.accessToken,history));
         
            
        }
        else {
            history.replace("/login");
        }
    }
    return (
        <div className="detailticket__wrapper">
            <div className="total-cash">
                <h1 className="text-center">{renderTotalFee(gheData).toLocaleString()} đ</h1>

            </div>
            <div className="movie__info">
                <h6 className="movie__name">{thongTinPhim && thongTinPhim.tenPhim}</h6>
                <p>{thongTinPhim && thongTinPhim.tenCumRap}</p>
                <p>Hôm nay 03/03/2021 - 20:40 - rạp 6</p>
            </div>
            <div className="cinema__info d-flex">
                <p>Ghế {rennderMaGhe(gheData)} </p>
                <p className="price">{renderTotalFee(gheData)} đ</p>
            </div>
            <div className="mail">
                <p style={{fontSize:"12px"}}>E-Mail</p> 
                <input type="text" placeholder="E-mail"></input>
            </div>
             <div className="mail">
                <p style={{fontSize:"12px"}}>Phone</p> 
                <input type="text" ></input>
            </div>
             <div className="mail">
                <p style={{fontSize:"12px"}}>Mã Giảm Giá</p> 
                <input type="text" ></input>
            </div>
            <div className="warning">
                <img className="ml-4 mr-1" src="https://tix.vn/app/assets/img/icons/exclamation.png"></img>
                <span className="title ml-1">Vé đã mua không thể đổi hoặc hoàn tiền</span>
                <br/>
                <span className="title ml-1 ">Mã vé sẽ được gửi qua tin nhắn <span style={{color:"#f9b566"}}>SMS</span> (tin nhắn Zalo) và <span style={{color:"#f9b566"}}>Emaill</span> đã nhập.</span>
            </div>
            <div className="booking__button">
                <button className="btn btn-primary" onClick={()=>{
                    handleDatVe(history);
                }}>Đặt Vé</button>
            </div>
        </div>
    )
}
