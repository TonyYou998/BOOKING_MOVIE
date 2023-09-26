
import React, { useEffect } from "react";
import ShowTimeModal from "../DetailMovie__ShowTime";
import convertYoutubeLink from "../../../../../helper/convert-youtube-link";
export default function DetailMovieInfoRemake(props) {
   
       
    const  {MovieData}=props;


  
    return (
        <header>
            <div className="video-container">
                 <iframe  src={MovieData && convertYoutubeLink(MovieData.trailer)}
                frameborder="0" ></iframe>

            </div>
           
        <div class="text-content">
            <div className="d-flex ">
                <h2 className="text-center">{MovieData && MovieData.tenPhim}</h2>
                {/* <p>
                {MovieData && MovieData.moTa}
                </p> */}
             
                  <div className="pl-3"><ShowTimeModal/></div>
            </div>
           
          
        </div>
        </header>

    )
}
