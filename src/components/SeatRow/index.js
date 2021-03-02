import React from "react";
import Seat from "../Seat";

export default function SeatRow(props) {
        const {data}=props;
        console.log(data);
        const renderListGhe=(data)=>{
            if (data){
                // return data.map((item,index)=>{
                //     return (
                      

                //     )

                // })
               return data.map((item,index)=>{
                   if(index<16){
                      
                       return data.map((item,index)=>{
                         
                           if(index<10){
                               console.log("run seat");
                                return <Seat/>
                           }
                         

                       })
                   }

               })
                
            }
            
        }
    return (
        <div> 
            {renderListGhe( data && data.danhSachGhe)}
        </div>
    )
}
