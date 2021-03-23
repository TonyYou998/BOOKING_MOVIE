import React from "react";
import Seat from "../Seat";
import {useSelector} from "react-redux";

export default function SeatRow(props) {
        const {data}=props;
        
        let danhSachGheDaChon=useSelector(state=>state.datVeReducer.data);
      
        
        const renderListGhe=(data)=>{
            if (data){
               

               return data.map((item,index)=>{
                
                  let indexGheDangdat=danhSachGheDaChon.findIndex(index=>index.stt===(item.stt) );
             
                 let cssGheDanngDat="";
               
                if(indexGheDangdat!==-1){
                    cssGheDanngDat="gheDangDat";
                }
                    return <Seat key={index} data={item} css={cssGheDanngDat}/>
            

               })
                
            }
            
        }
    return (
        <div className="row " style={{margin:"0 auto",width:"70%",height:"400px"}} > 
            {renderListGhe( data && data.danhSachGhe)}
        </div>
    )
}
