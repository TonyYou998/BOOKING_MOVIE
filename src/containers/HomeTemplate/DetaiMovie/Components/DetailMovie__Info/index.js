import React,{useEffect} from "react";

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {Link} from "react-router-dom";
import ShowTimeModal from "../DetailMovie__ShowTime";

export default function Info(props) {
  const { MovieData } = props;
const renderButton=()=>{
  return <ShowTimeModal/>
}
  

 

 
  
  let percentage =0;
 
  if(MovieData)
  percentage= MovieData.danhGia*10;
  
  return (
    <div className="detailMovie__wrapper">
     
        
        <div
          style={{
            padding: "100px 0",
            
            width: "60%",
            margin: "0 auto",
          }}
        >
        
          <div className="row detailMovie__conatiner">
            <div className="col-8 detailMovie__content row">
              
                <img src={MovieData && MovieData.hinhAnh} style={{width:"250px",height:"400px"}} className="pb-4" />

              
              <div className="mx-2 pt-3 detailMovie__info  pl-4 pb-4">
                <p style={{color:"rgb(126,154,178)"}}>{MovieData && MovieData.ngayKhoiChieu}</p>
                <h3 style={{color:"rgb(126,154,178)"}}>{MovieData && MovieData.tenPhim}</h3>
               <p>{MovieData&& MovieData.moTa}</p>
                
                {renderButton()}
              </div>
            </div>
            <div className="col-4 markCircle">
            <CircularProgressbar value={percentage} text={`${ percentage }`} />;
            </div>
          </div>
        </div>

      
    </div>
    
  );
}
