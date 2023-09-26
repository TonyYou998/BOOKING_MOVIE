import React from "react";
import {Link} from "react-router-dom";
import Typical from 'react-typical'
import TrailerModal from "../../../../../components/TrailerModal";
export default function Carousel(props) {
 

  

  return (
     <div className="banner__wrapper">
       <div className="banner__content " >

              <h1 className="text-center text-white " >Interested in</h1>
                <Typical className="text-center  text-animation"
              steps={['Action',2000,'Drama',2000,'Comedy',2000,'Horor',2000,'Sci-Fi',2000,'...',500]}
              loop={Infinity}
              wrapper="p"
            />
              <h2 className="text-center text-white">Movies</h2>
       
       </div>
       <div className="d-flex justify-content-center ">
           <div className="btn btn-booking">Watch Now <span><i class="fa fa-angle-right"></i></span></div>
       </div>
      
     </div>

  );
}
