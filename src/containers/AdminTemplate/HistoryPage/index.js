import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router"
import {actHistoryApi} from "./Modules/action";
export default function HistoryPage(props) {
    let dispatch=useDispatch();
    let data=useSelector(state=>state.historyReducer.data);
    const info=JSON.parse(localStorage.getItem("user"));
    useEffect(()=>{
        dispatch(actHistoryApi(info && info.taiKhoan));
        },[]
    )
    if(!localStorage.getItem("user")){
        
        return <Redirect to="/login" />
    }
const showTenHeThongRap=(data)=>{
   
   return (
       <span>{data[0].tenHeThongRap}</span>
   )

}

const showTenRap=(data)=>{

   return (
       <span>{data[0].tenRap}</span>
   )

}
const showTenGhe=(data)=>{
    return data.map((item,index)=>{
        return (
            <span key={index}>{item.tenGhe},</span>
        )

    })

}





    

    const renderTable=(data)=>{
    
        if(data && data.length>0){
             return data.map((item,index)=>{
                
             return(
            <tr key={index}>
                <td>{showTenHeThongRap(item.danhSachGhe)}</td>
                <td>{showTenRap(item.danhSachGhe)}</td>
                <td>{showTenGhe(item.danhSachGhe)}</td>
               
                <td>{item.maVe}</td>
                <td>{item.tenPhim}</td>
                <td>{item.ngayDat}</td>
                <td>{item.giaVe}</td>
            </tr>
        )

        })
             
        }
      
         
    }

    return (
        <div className="history__wrapper">
               <h2>Lịch Sử Đặt vé</h2>
               <div className="table-responsive">
                   <table className="table table-striped table-sm">
                       <thead>
                             <tr>
                               <th>Tên hệ thống rạp</th>
                               <th>Rạp</th>
                               <th>Số ghế</th>
                              
                               <th>Mã vé</th>
                               <th>Tên phim</th>
                               <th>Ngày đặt</th>
                               <th>Giá vé/ghế</th>
                           </tr>
                       </thead>
                       <tbody>
                         {renderTable(data && data.thongTinDatVe)}
                       </tbody>
                   </table>

               </div>
        </div>
    )
}
