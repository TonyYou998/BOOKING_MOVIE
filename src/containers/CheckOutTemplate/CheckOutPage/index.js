    import React,{useEffect} from "react";
    import SeatCheckout from "../../../components/SeatCheckout";
    import {useParams} from "react-router-dom";
    import {actListGheApi} from "./Modules/action";
    import {useDispatch,useSelector} from "react-redux";
    export default function CheckOutPage(props) {
        let {id} =useParams();
        const dispatch=useDispatch();
        const listGheData=useSelector (state=>state.listGheReducer.data);
        useEffect(()=>{
            dispatch(actListGheApi(id))
        },[])

        // console.log(props);
        return (    
            <div >
                {/* this is checkout page */}
                <SeatCheckout data={listGheData}/>
            </div>
        )
    }
