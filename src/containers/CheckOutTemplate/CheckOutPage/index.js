    import React,{useEffect} from "react";
    import SeatCheckout from "../../../components/SeatCheckout";
    import {useParams} from "react-router-dom";
    import {actListGheApi} from "./Modules/action";
    import {useDispatch,useSelector} from "react-redux";
    import DetailTicket from "../../../components/DetaiTicket";
    export default function CheckOutPage(props) {
        let {id} =useParams();
        const dispatch=useDispatch();
        const listGheData=useSelector (state=>state.listGheReducer.data);
        useEffect(()=>{
            dispatch(actListGheApi(id))
        },[])

        
        return (    
            <div className="d-flex" >
            
                <SeatCheckout data={listGheData}/>
                <DetailTicket/>
            </div>
        )
    }
