import { data } from "jquery";
import * as ActionType from "./constants";
import {mainAPi} from "../../../../api";

export const actListGheApi=(id)=>{
   
    return (dispatch)=> {
        dispatch(actListGheRequest());
        mainAPi
        .get(`/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${id}`)
        .then((result)=>{
            dispatch(actListGheSuccess(result.data));

        })
        .catch((err)=>{
            dispatch(actListGheFailed(err));

        })


    }

}
const actListGheRequest=()=>{
    return {
        type:ActionType.LIST_GHE_REQUEST,

    }
}
const actListGheSuccess=(data)=>{
    return {
        type:ActionType.LIST_GHE_SUCCESS,
        payload:data,
    }
}
const actListGheFailed=(err)=>{    
    return {
        type:ActionType.LIST_GHE_Failed,
        payload:err,
    }

}


export const actRequestGhe=(ghe)=>{
  
    return {
        type:ActionType.DAT_GHE,
        ghe
    }
}


export const actDatVeApi=(data,accessToken,history)=>{
    return (dispatch)=>{
        dispatch(actDatVeRequest());
        mainAPi
        .post("/QuanLyDatVe/DatVe",data,{  
            headers: { Authorization: `Bearer ${accessToken}` }
        })
        .then((result)=>{
           dispatch(actDatVeSuccess(result.data));
            history.replace("/noti");

        })
        .catch((err)=>{
            dispatch(actDatVeFailed(err));

        })

    }
}

export const actClearReducerDispatch=()=>{
    return (dispatch)=>{
        dispatch(actClearReducer());

    }
}
const actDatVeRequest=()=>{
    return {
        type:ActionType.DAT_VE_REQUEST,
    }
}
const actDatVeSuccess=(data)=>{
    return {
        type:ActionType.DAT_VE_SUCCESS,
        payload:data,
    }

}
const actDatVeFailed=(err)=>{
    return {
        type:ActionType.DAT_VE_FAILED,
        payload:err,
    }

}

const actClearReducer=()=>{
    return{
        type:ActionType.CLEAR__REDUCER,
    }
}