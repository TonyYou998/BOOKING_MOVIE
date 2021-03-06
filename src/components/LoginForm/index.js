import React,{useState} from "react";
import {useDispatch} from "react-redux";
import {actLoginApi} from "../../containers/AdminTemplate/DashBoardPage/modules/action";
import {useHistory,Redirect} from "react-router-dom";
export default function LoginForm(props) {
        let [taiKhoan,setTaiKhoan]=useState({
            taiKhoan:"",
            
        });
        const info=JSON.parse(localStorage.getItem("user"));

        let history=useHistory();
        let [matKhau,setMatKhau]=useState(
            {
                matKhau:"",
        
            }
        );
        let dispatch=useDispatch();
        
        const handleOnChangeTaiKhoan=(e)=>{
            const {value}=e.target;
            setTaiKhoan(value);


        }
        const handleOnChangeMatKhau=(e)=>{
            const {value}=e.target;
            setMatKhau(value);

        }
        const handleLogin=(e)=>{
            e.preventDefault();
            dispatch(actLoginApi(taiKhoan,matKhau,history));
        }
       
    
        if(localStorage.getItem("user"))
        return <Redirect to ="/dashboard"/>
    return (
        <div className="form__wrapper">
            <div className="tittle px-5">
                <img src="https://tix.vn/app/assets/img/login/group@2x.png"/>
                <p>Đăng nhập để được nhiều ưu đãi, mua vé
                    và bảo mật thông tin!
                </p>
            </div>
            <div className="form"  onSubmit={handleLogin}>
                <p>Username</p>
                <input type="text" name="taiKhoan" className="input" onChange={handleOnChangeTaiKhoan}></input>
                <p>Password</p>
                <input type="text" name="matKhau" className="input" onChange={handleOnChangeMatKhau}></input>
                <form className="logNreg mt-3">
                    <button type="submit" className="btn btn-success button mr-2">Đăng Nhập</button>
                    <button type="submit" className="btn btn-info button">Đăng Ký</button>
                </form>
            </div>
        </div>
    )
}
