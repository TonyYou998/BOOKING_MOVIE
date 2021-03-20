import React from "react";
import { Fragment } from "react";
import { useState } from "react";
import { useDispatch ,useSelector} from "react-redux";
import { useHistory } from "react-router";
import { actSeachMovieApi } from "../../containers/HomeTemplate/HomePage/modules/action";
export default function Search(props) {
    let [state,setState]=useState({
        keyWork:"",
    })
    let history=useHistory();
    let dispatch=useDispatch();
     const data = useSelector(state => state.searchMovieReducer.data);
    
    const handleSubmit=(e)=>{
            e.preventDefault();
            dispatch(actSeachMovieApi(state.keyWork,history));

    }
    return (
        <div className="hometool hideOnMobile ">
            <form className="form" onSubmit={handleSubmit}>
                <input className="searchBox ml-2" placeholder="Tên phim" onChange={(e)=>{
               setState({keyWork:e.target.value});
                }}></input>
                    <div className="dropdown show showCinema">
                  
                    </div>

                
                <button type="submit" className="btn btn-success showButton">Tìm kiếm</button>

            </form>
         
            


          
            

        </div>
    )
}
