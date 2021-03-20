import * as ActionType from "./constants";
// import {Redirect} from "react-router-dom";
import {mainAPi} from "../../../../api";

export const actLoginApi=(taiKhoan,matKhau,history)=>{
   console.log(taiKhoan);
    return (dispatch)=>{

        dispatch(actLoginRequest());
          console.log("run login reducer");
        mainAPi
        .post("/QuanLyNguoiDung/DangNhap",{
            taiKhoan,
            matKhau,
        })
        .then((result)=>{
            dispatch(actLoginSuccess(result.data));
            
            localStorage.setItem("user",JSON.stringify(result.data));     
            
            history.goBack();
           
               

        })
        .catch((err)=>{
            dispatch(actLoginFailed(err));
            alert(err.response.data);
            

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
    console.log("failed");
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


    export const actRegApi=(state,history)=>{
      
        return (dispatch)=>{
            dispatch(actRegRequest());
            mainAPi
            .post("/QuanLyNguoiDung/DangKy",state)
            .then((result)=>{
                    dispatch(actRegSuccess());
                    alert("đăng ký thành công");
                    history.push("/noti");
                   

            })
            .catch((err)=>{
               dispatch(actRegFailed(err));
               alert(err.response.data);
            })

        }
    }


  export   const actAddUser=(taiKhoan,matKhau,email,soDt,hoTen,history,token)=>{
        console.log(taiKhoan,matKhau,email,soDt,hoTen,token);
             return (dispatch)=>{
            dispatch(actRegRequest());
            mainAPi
            .post("/QuanLyNguoiDung/ThemNguoiDung",{
                taiKhoan,
                matKhau,
                email,
                soDt,
                maNhom: "GP01",
                maLoaiNguoiDung: "QuanTri",
                hoTen,
            },{  
            headers: { Authorization: `Bearer ${token}` }
        })
            .then((result)=>{
                    dispatch(actRegSuccess());
                    history.push("/noti")
                   

            })
            .catch((err)=>{
               dispatch(actRegFailed())
            })

        }
    }
    const actRegRequest=()=>{
        return {
            type:ActionType.REG_REQUEST,
        }
    }
    const actRegSuccess=(data)=>{
        return {
            type:ActionType.REG_SUCCESS,
            payload:data,
        }

    }

    const actRegFailed=(err)=>{
        return {
            type:ActionType.REG_FAILED,
            payload:err,
        }

    }


    export  const  actChangeInfoApi=(data,token)=>{
           
            
            console.log(token);
    
              
            return (dispatch)=>{
                dispatch(actchangeInfoRequest());
                mainAPi
                .put("/QuanLyNguoiDung/CapNhatThongTinNguoiDung",data,{headers: { Authorization: `Bearer ${token} `}})
                .then((result)=>{
                    alert("thay đổi thành công");

                })
                .catch((err)=>{
                    alert("lỗi");

                })

            }
    }
    const actchangeInfoRequest=()=>{
        
       
        return {
            type:ActionType.CHANGE_INFO_REQUEST,
        }
    }
    const actChangeInfoSuccess=(data)=>{
        return {
            type:ActionType.CHANGE_INFO_SUCCESS,
            payload:data,
        }
    }
    const actChangeInfoFailed=(err)=>{
        return {
            type:ActionType.CHANGE_INFO_FAILED,
            payload:err,
        }

    }