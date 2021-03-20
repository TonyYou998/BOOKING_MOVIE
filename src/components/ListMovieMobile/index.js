import React from "react";
import { Link } from "react-router-dom";
export default function ListMovieMobile(props) {
    
        const {id}=props;
    
    return (
        <Link  to={`/detail/${id}`} className="movie__mobile">
            <img className="my-1" src={props.data}/>
        </Link>
    )
}
