import React from "react";
import {useSelector,useDispatch} from "react-redux";
import {actRequestGhe} from "../../containers/CheckOutTemplate/CheckOutPage/Modules/action";
export default function Seat(props) {
    const {data}=props;
    const {css}=props;
    let dispatch=useDispatch();
    let cssGheDaDat="";
    let cssGheVip="";
    let cssSelected="";
    let disable=false;
    let danhSachGheDaChon=useSelector(state=>state.datVeReducer.data);
    
    if(data.daDat===true){
         cssGheDaDat="daDat";
         disable=true;
    }
       
    if(data.loaiGhe==="Vip" && data.daDat ===false)
        cssGheVip="Vip";
    return (
        <button disabled={disable} className={` btn btn-success seat col-1 ${cssGheDaDat} ${cssGheVip} ${cssSelected} ${css}`} style={{color:"white"}} onClick={()=>{
            dispatch(actRequestGhe(data));
            }}>
                {data.tenGhe}
                
        </button>
    )
}
