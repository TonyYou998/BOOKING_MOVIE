import { post } from "jquery"
import { mainAPi } from "../../../../api"

export const actRegShowTimeApi=(data,token)=>{
    console.log(token);
    return (dispatch)=>{
         mainAPi
    .post("/QuanLyDatVe/TaoLichChieu",data,{headers: { Authorization: `Bearer ${token}` }})
    .then((result)=>{
        alert(result.data);

    })
    .catch((err)=>{
        alert(err.response.data);

    })
    }
   
}