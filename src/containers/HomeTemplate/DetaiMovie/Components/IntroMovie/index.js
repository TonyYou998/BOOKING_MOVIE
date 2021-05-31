import { data } from 'jquery'
import React from 'react'
import { useSelector } from 'react-redux'

function IntroMovie(props) {

    const {data}=props;
 
    return (
        <div className="summery__wrapper ">
            <div className="container">
                <div className="summery__tittle mt-5 py-2">
                    <h2>Summery</h2>
                   
                </div>
                    <div className="text-white pt-3">
                         <h5>{data && data.tenPhim}</h5>
                        {data && data.moTa}
                    </div>
            </div>
           
        </div>
    )
}

export default IntroMovie
