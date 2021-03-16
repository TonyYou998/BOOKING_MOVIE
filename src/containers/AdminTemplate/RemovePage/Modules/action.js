import { mainAPi } from "../../../../api";
import * as ActionType from "./constants"; 
   export const actFetchListUserApi=()=>{
      
            return (dispatch)=>{
                dispatch(actFetchListUserRequest());
                mainAPi
                .get("/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01")
                .then((result)=>{
                    dispatch(actFetchListUserSuccess(result.data));

                })
                .catch((err)=>{
                    dispatch(actFetchListUserFailed(err));

                })

            }
    }

    const actFetchListUserRequest=()=>{
        return{
            type:ActionType.FETCH_LIST_USER_REQUEST,
        }
    }


    const actFetchListUserSuccess=(data)=>{
        return {
            type:ActionType.FETCH_LIST_USER_SUCCESS,
            payload:data,
        }

    }


    const actFetchListUserFailed=(err)=>{
        return {
            type:ActionType.FETCH_LIST_USER_FAILED,
            payload:err,
        }

    }

    export const actDeleteUserAPi=(id)=>{
        let info=JSON.parse(localStorage.getItem("user"));
        
            return (dispatch)=>{
                mainAPi
                .delete(`/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${id}`,{  
                        headers: { Authorization: `Bearer ${info.accessToken}` }
                    })
                .then((result)=>{
                    
                    alert("xóa thành công")

                })
                .catch((err)=>{
                    
                    alert(err.response.data)

                })

            }
    }
    

