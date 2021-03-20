import React,{useState} from "react";
import {useDispatch} from "react-redux";
import {actLoginApi} from "../../containers/AdminTemplate/DashBoardPage/modules/action";
import {useHistory,Redirect} from "react-router-dom";
import {Link} from "react-router-dom";

export default function LoginForm(props) {
      const info=JSON.parse(localStorage.getItem("user"));
        let dispatch=useDispatch();
        let history=useHistory();  
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
            <div className="form"  onSubmit={
                 handleLogin }>
                <p>Username</p>
                <input type="text" name="taiKhoan" className="input" onChange={handleOnChangeTaiKhoan}></input>
                <p>Password</p>
                <input type="password" name="matKhau" className="input" onChange={handleOnChangeMatKhau}></input>

                <form className="logNreg mt-3">
                    <button type="submit" className="btn btn-success button mr-2">Đăng Nhập</button>
                     <Link to={"/register"} className="btn btn-primary" >
                           Đăng ký
                    </Link>
                </form>
               
            <div>
           
               
                </div>





                    
                
            </div>
        </div>
    )
}
