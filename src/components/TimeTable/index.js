import React,{useEffect} from "react";
import {useSelector,useDispatch} from "react-redux";
import {actListCinemaApi,actListCinemaShowtimeApi, actListMovieOnCinemaApi} from "../../containers/HomeTemplate/HomePage/modules/action";
import {Link} from "react-router-dom";
export default function TimeTable(props) {
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(actListCinemaApi());
      
    },[]);
    const listCinemaData=useSelector(state=>state.listCinemaReducer.data);
    const listData=useSelector(state=>state.listCinemaShowtimeReducer.data);
    // const listDataOnCinema=useSelector(state=>state.listMovieOnCinemaReducer.data);
   
    
    
    const renderListCinema=(data)=>{
            
        if(data && data.length>0){
          
             return data.map((item,index)=>{
                
                return(
                     <li onClick={()=>{
                       dispatch(actListCinemaShowtimeApi(item.maHeThongRap));
                       
                        
                     }} className="nav-item " role="presentation">
                        <a className="nav-link  " id="bhd-tab" data-toggle="tab" href={`#${item.biDanh}`} role="tab">
                        <img src={item.logo} alt="bhd"  /></a>
                    </li>
                )

            })
        }
           
       
    }
  
    const renderDanhSachCumRap=(data)=>{
        if(data && data.length>0){
             let tempListCumRap=data[0].lstCumRap;
            

            return tempListCumRap.map((item,index)=>{
              
                return(
                    <li className="nav-item" role="presentation">

                          <a className="nav-link" id="bhd__cinema1-tab" data-toggle="tab" href={`#${item.maCumRap}`} role="tab">
                                <div className="lichchieu__diadiem__content">
                                     <img style={{height:"50px",width:"50px"}} src="https://s3img.vcdn.vn/123phim/2018/09/bhd-star-bitexco-15379552241200.jpg" alt="bhd-star-bitexco-15379552241200" />
                                     <div className="lichchieu__diadiem" style={{maxWidth:"282px"}}>
                                            <h5><span>{item.tenCumRap}</span></h5>
                                            <p>{item.diaChi}</p>
                                            <span className="chitiet">[chi tiết]</span>
                                     </div>
                                </div>
                            </a>
                    </li>
                )

            })
        }
       

    }
    const renderDateTime=(data)=>{

       return data.map((item,index)=>{
            
            return  <p> <span>{item.ngayChieuGioChieu}</span></p>
        })

    }
    const renderLichChieu=(data)=>{
        if (data && data.length>0){
            return data.map((item,index)=>{
                
                return (
                    <Link to={`/detail/${item.maPhim}`} class="lichchieu__detail">
                        <div class="lichchieu__detail__upper">
                            <img src={item.hinhAnh} />
                            <div class="lichchieu__detail__upper__text">
                                    <h5><span>P</span>{item.tenPhim}</h5>
                                    <p>109 phút - TIX 9.4 - IMDB 8.7</p>
                            </div>
                        </div>
                        <h3>2D Digital</h3>
                        
                    </Link>
                )

            })
        }

    }
    const renderShowTime=(data)=>{
        if(data){
           
             let tempListCumRap=data[0].lstCumRap;
                
        
            return tempListCumRap.map((item,index)=>{
               
                return (
                    <div className="tab-pane fade " id={item.maCumRap} role="tabpanel" >
                            <div className="lichchieu__content b4__scroll" >
                                {renderLichChieu(item.danhSachPhim)}
                            </div>
                    </div>
                )

            })
            
        }
        
    }
    const renderTabContent=(data)=>{
       
        if(data && data.length>0){
          
            return data.map((item,index)=>{
                    return (
                 
                         <div className="tab-pane fade " id={item.biDanh} role="tabpanel"> 
                            <div className="lichchieu">
                                <ul  className="nav nav-tabs b4__scroll" id="bhd__cinemasTab" role="tablist" >
                                    {/* {renderDanhSachCumRap(listData,item.maHeThongRap)} */}
                                    {renderDanhSachCumRap(listData)}
                                  
                                </ul>
                                <div  className="tab-content"  id="bhd__cinemasTabContent" >
                                     {renderShowTime(listData)}
                                    
                                     
                                </div>
                            </div>                                
                        </div> 
                    )

                })
            
        }

    }
   

    return (
        
            <section id="time-table" className="time-table">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                             <div className="time" style={{height:"800px"}}>
                                <ul className="nav nav-tabs" id="brandTab" role="tablist">
                                   {renderListCinema(listCinemaData)}
                                </ul>
                                <div className="tab-content" id="brandTabContent">
                                    {renderTabContent(listCinemaData)} 
                                </div> 
                             
                            </div>
                        </div>
                    </div>
                </div>
  </section>
        

    )
}
