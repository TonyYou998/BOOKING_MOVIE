import React,{useEffect} from "react";
import Info from "./Components/DetailMovie__Info";
import ShowTimeModal from "./Components/DetailMovie__ShowTime"; 
import { useParams } from "react-router-dom";

import {connect } from "react-redux";
import { actDetailMovieApi } from "./Modules/action";
import Loader from "../../../components/Loading";

import {actListMovieApi} from "../HomePage/modules/action";
import {useSelector,useDispatch} from "react-redux";
import { ListMovieRecommend } from "./Components/ListMovieRecommend";

import TrailerModal from "../../../components/TrailerModal";
import Footer from "../HomePage/Components/footer";


 function DetailMoviePage(props) {
  let {id} = useParams();
  const listMovieData=useSelector(state=>state.listMovieReducer.data);
  const dispatch=useDispatch();
   const listShowTimeData=useSelector(state=>state.getListDateTimeReducer.data);

  useEffect(()=>{
    dispatch(actListMovieApi());
   
  },[])
  
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
 const renderShowTime=()=>{
   
   return <ShowTimeModal data={listShowTimeData}/>
 }

 const renderFooter=()=>{
   return <Footer/>
 }
  return (
    <div>

      <div> {renderDetailMovieInfo()}</div>
     
      <div className="detailMovie__listMovie">{renderListMovie()}</div>
    
      
     
      
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