import React,{useState} from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import {actRegApi} from "../../AdminTemplate/DashBoardPage/modules/action";
export default function RegPage(props) {
        let dispatch=useDispatch();
        const history=useHistory();
        let [state,setState]=useState({
            taiKhoan:"",
            matKhau:"",
            email:"",
            hoTen:"",
            soDt:"",
        })
         let [taiKhoan,setTaiKhoan]=useState({
            taiKhoan:"",
            
        });
      
        let [matKhau,setMatKhau]=useState(
            {
                matKhau:"", 
        
            }
        );
        let [email,setEmail]=useState({
            email:"",
        });
          let [hoTen,sethoTen]=useState({
            hoTen:"",
        });
          let [soDt,setSoDt]=useState({
            soDt:"",
        })
         const handleOnChangeTaiKhoan=(e)=>{
            const {value}=e.target;
            setTaiKhoan(value);


        }
         const handleOnChangeMatKhau=(e)=>{
            const {value}=e.target;
            setMatKhau(value);


        }
         const handleOnChangeEmail=(e)=>{
            const {value}=e.target;
            setEmail(value);


        }
         const handleOnChangeHoTen=(e)=>{
            const {value}=e.target;
            sethoTen(value);


        }
         const handleOnChangeSDT=(e)=>{
            const {value}=e.target;
            setSoDt(value);


        }
       const handleReg=(e)=>{
           e.preventDefault();
        
            dispatch(actRegApi(taiKhoan,matKhau,email,soDt,hoTen,history));
       }
    return (
        <div className="container ">
            <div className="reg__wrapper form" onSubmit={handleReg}>
                  <h1 class="text-center">Đăng Ký</h1>
                  <div className="form-group input-group">
                     <div class="input-group-prepend">
		            <span class="input-group-text"> <i class="fa fa-user"></i> </span>
		            </div>
                  <input name="hoTen" class="form-control" onChange={handleOnChangeHoTen} placeholder="Họ Tên" type="text"></input>
                  </div>
                <div className="form-group input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text"> <i className="fa fa-envelope" /> </span>
                    </div>
                    <input name="email" onChange={handleOnChangeEmail} className="form-control" placeholder="Email " type="email" />
                </div>
                <div className="form-group input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text"> <i className="fa fa-phone" /> </span>
                </div>
                <select className="custom-select" style={{maxWidth: 120}}>
                    <option selected>+971</option>
                    <option value={1}>+972</option>
                    <option value={2}>+198</option>
                    <option value={3}>+701</option>
                </select>
                <input name="soDt" onChange={handleOnChangeSDT} className="form-control" placeholder="Phone number" type="text" />
                </div>
                <div  className="form-group input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text"> <i className="fa fa-envelope" /> </span>
                    </div>
                    <input name="taiKhoan" onChange={handleOnChangeTaiKhoan} className="form-control" placeholder="Tên Tài Khoản" type="text" />
		         
                </div>
                <div className="form-group input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text"> <i className="fa fa-lock" /> </span>
                </div>
                <input name="matKhau" onChange={handleOnChangeMatKhau} className="form-control" placeholder="Mật Khẩu" type="password" />
                </div>
                <form className="form-group">
                    <button type="submit" className="btn btn-primary btn-block" > Đăng Ký</button>
                </form>


            </div>
    
        </div>
    )
}
