import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { actLogout } from "./modules/action";
export default function Dashboard(props) {
    let dispatch=useDispatch();
    let history=useHistory();
    const info=JSON.parse(localStorage.getItem("user"));
    console.log(info);
    return (
        
            <div className="container col-10 info__wrapper py-5 px-5">
                <h1 className="title">Tổng Quan Tài Khoản</h1>
                <h3>Hồ Sơ</h3>
               
                <table className="table">
                    <tbody>
                        <tr className="py-5">
                            <td>Tên Tài Khoản</td>
                            <td>{info &&  info.taiKhoan}</td>
                        </tr>
                         <tr className="py-5">
                            <td>Tên Đầy Đủ</td>
                            <td>{info && info.hoTen}</td>
                        </tr>
                        <tr className="py-5">
                            <td>Chức Vụ</td>
                            <td>{info && info.maLoaiNguoiDung}</td>
                        </tr>
                         <tr className="py-5">
                            <td>Email</td>
                            <td>{info && info.email}</td>
                        </tr>
                        <tr className="py-5">
                            <td>SĐT</td>
                            <td>{info && info.soDT}</td>
                        </tr>
                        
                    </tbody>
                </table>
                <div className="btn btn-danger" onCLick={dispatch(actLogout(history))} >Logout</div>
            </div>
        
    


    )
}