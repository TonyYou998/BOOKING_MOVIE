import * as ActionType from "./constants";
// import {Redirect} from "react-router-dom";
import {mainAPi} from "../../../../api";

export const actLoginApi=(taiKhoan,matKhau,history)=>{
        const TimeExp=3600000;
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
            const date=new Date().getTime();
            const exp=date+TimeExp;
            localStorage.setItem("exp",exp);
            dispatch(actTimeOutLogout(history,TimeExp));
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
          
        localStorage.removeItem("user");
        localStorage.removeItem("exp");
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


  export   const actAddUser=(state,history,token)=>{

             return (dispatch)=>{
            dispatch(actRegRequest());
            
            mainAPi
            .post("/QuanLyNguoiDung/ThemNguoiDung",state,{  
            headers: { Authorization: `Bearer ${token}` }
        })
            .then((result)=>{

                    dispatch(actRegSuccess());
                    history.push("/noti")
                   

            })
            .catch((err)=>{
               dispatch(actRegFailed());
               alert(err.response.data);
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
           
            
         
               
              
            return (dispatch)=>{
                dispatch(actchangeInfoRequest());
                mainAPi
                .put("/QuanLyNguoiDung/CapNhatThongTinNguoiDung",data,{headers: { Authorization: `Bearer ${token} `}})
                .then((result)=>{

                 
                    alert("thay đổi thành công");
                   
                })
                .catch((err)=>{
                    alert(err.response.data);

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

    // detai info


    export const actDetailInfoApi=(taiKhoan)=>{
     
        return (dispatch)=>{
            dispatch(actDetailInfoRequest());
            mainAPi
            .post("/QuanLyNguoiDung/ThongTinTaiKhoan",{taiKhoan})
            .then((result)=>{
                dispatch(actDetailInfoSuccess(result.data));

            })
            .catch((err)=>{
                console.log(err);

            })
        }

    }
    const actDetailInfoRequest=()=>{
        return {
            type:ActionType.DETAIL_INFO_REQUEST,
        }
    }

    const actDetailInfoSuccess=(data)=>{
        return {
            type:ActionType.DETAIL_INFO_SUCCESS,
            payload:data,
        }
    }
    const actDetailInfoFailed=(err)=>{
        return {
            type:ActionType.DETAIL_INFO_FAILED,
            payload:err,
        }

    }

    const actTimeOutLogout=(history,exp)=>{
        return (dispatch)=>{
            setTimeout(()=>{
                dispatch(actLogout(history));

            },exp);

        }



    }