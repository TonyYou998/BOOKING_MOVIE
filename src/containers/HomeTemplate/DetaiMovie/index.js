import React,{useEffect} from "react";
import Info from "../../../components/DetailMovie__Info";
import ShowTime from "../../../components/DetailMovie__ShowTime";
import { useParams } from "react-router-dom";

import {connect } from "react-redux";
import { actDetailMovieApi } from "./Modules/action";
import Loader from "../../../components/Loading";
import ListMovieWrapper from "../../../components/ListMovieWrapper";
import {actListMovieApi} from "../HomePage/modules/action";
import {useSelector,useDispatch} from "react-redux";
import { ListMovieRecommend } from "../../../components/ListMovieRecommend";
import { Demo } from "../../../components/demo";

// import { Link } from "react-router-dom";
 function DetailMoviePage(props) {
  let {id} = useParams();
  const listMovieData=useSelector(state=>state.listMovieReducer.data);
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(actListMovieApi());
  },[])
  // console.log(typeof id);
  useEffect(()=>{
  
    props.fetchDetailMovie(id);
},[id]);


const {data,loading}=props;
if(loading)
return <Loader/>
  
  
  
  const renderDetailMovieInfo = () => {
   
    return <Info MovieData={data} />;
  };
  const renderListMovie=()=>{
    return <ListMovieRecommend data={listMovieData}/>
  }
 
 
  return (
    <div>

      <div> {renderDetailMovieInfo()}</div>
      <div>{renderListMovie()}</div>
      
     
      
    </div>
  );
}
const mapStateToProps=(state)=>{
  return {
    data:state.DetailMovieReducer.data,
    loading:state.DetailMovieReducer.loading,
  }

}
const mapDispatchToProps=(dispatch)=>{
  return {
    fetchDetailMovie:(id)=>{
      
      dispatch(actDetailMovieApi(id));
    }
  }


}
export default connect (mapStateToProps,mapDispatchToProps)(DetailMoviePage);