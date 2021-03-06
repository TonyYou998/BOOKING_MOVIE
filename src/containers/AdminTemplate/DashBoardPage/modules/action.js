import * as ActionType from "./constants";
// import {Redirect} from "react-router-dom";
import {mainAPi} from "../../../../api";

export const actLoginApi=(taiKhoan,matKhau,history)=>{
   
    return (dispatch)=>{

        dispatch(actLoginRequest());
        mainAPi
        .post("/QuanLyNguoiDung/DangNhap",{
            taiKhoan,
            matKhau,
        })
        .then((result)=>{
            dispatch(actLoginSuccess(result.data));
            
            localStorage.setItem("user",JSON.stringify(result.data));     
                    
            history.replace("/dashboard");
           
               

        })
        .catch((err)=>{
            dispatch(actLoginFailed(err));
            console.log("đăng nhập thất bại");

        })


    }
}
const actLoginRequest=()=>{
    return {
        type:ActionType.LOGIN_REQUEST,
    }
}
const actLoginSuccess=(data)=>{
   
    return{
        type:ActionType.LOGIN_SUCCESS,
        payload:data,
    }

}
const actLoginFailed=(err)=>{
    return {
        type:ActionType.LOGIN_FAILED,
        payload:err,
    }

}
 export const actLogout=(history)=>{
            console.log("run out");
        localStorage.removeItem("user");
        history.replace("/home");
        return {
            type:ActionType.LOGIN_CLEAR_DATA,
        }
    }
