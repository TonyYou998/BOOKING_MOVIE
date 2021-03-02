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