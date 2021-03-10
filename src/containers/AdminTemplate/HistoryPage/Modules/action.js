import { mainAPi } from "../../../../api";
import * as ActionType from "./constant";

export const actHistoryApi=(taiKhoan)=>{
    return (dispatch)=>{
        dispatch(actHistoryRequest());
        mainAPi
        .post("/QuanLyNguoiDung/ThongTinTaiKhoan",{
            taiKhoan,
        })
        .then((result)=>{
            dispatch(actHistorySuccess(result.data));
            
        })
        .catch((err)=>{
            dispatch(actHistoryFailed(err));

        })

    }

}


const actHistoryRequest=()=>{
    return {
        type:ActionType.HISTORY_REQUEST,

    }
}

const actHistorySuccess=(data)=>{
    return{
        type:ActionType.HISTORY_SUCCESS,
        payload:data,
    }

}
const actHistoryFailed=(err)=>{
    return {
        type:ActionType.HISTORY_FAILED,
        payload:err,
    }
}