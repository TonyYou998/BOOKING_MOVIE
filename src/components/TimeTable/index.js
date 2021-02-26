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
    const listDataOnCinema=useSelector(state=>state.listMovieOnCinemaReducer.data);
    console.log(listDataOnCinema);
    
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
     const  renderDanhSachCumRap=(data,maHeThongRap)=>{
        if(data && data.length>0){
            
            return data.map((item,index)=>{
                return (
                    <li onClick={()=>{
                        // console.log(item);
                        dispatch(actListMovieOnCinemaApi(maHeThongRap));
                    }}>
                          <a className="nav-link" id="bhd__cinema1-tab" data-toggle="tab" href={`#${item.tenCumRap}`} role="tab">
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
    const renderTabContent=(data)=>{

        if(data && data.length>0){
          
            return data.map((item,index)=>{
                       
                    return (
                 
                         <div className="tab-pane fade " id={item.biDanh} role="tabpanel"> 
                            <div className="lichchieu">
                                <ul  className="nav nav-tabs" id="bhd__cinemasTab" role="tablist" style={{overflow:"scroll",height:"800px"}}>
                                    {renderDanhSachCumRap(listData,item.maHeThongRap)}
                                  
                                </ul>
                                <div  className="tab-content" id={item.tenCumRap}>
                                       dhdhd
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
                                    
                                    {/* <div className="tab-pane fade show active" id="bhd" role="tabpanel">
                                        <div className="lichchieu">
                                            <ul className="nav nav-tabs" id="bhd__cinemasTab" role="tablist">
                                                <li className="nav-item" role="presentation">
                                                    <a className="nav-link active" id="bhd__cinema1-tab" data-toggle="tab" href="#bhd__cinema1" role="tab">
                                                        <div className="lichchieu__diadiem__content">
                                                            <img src="https://s3img.vcdn.vn/123phim/2018/09/bhd-star-bitexco-15379552241200.jpg" alt="bhd-star-bitexco-15379552241200" />
                                                            <div className="lichchieu__diadiem">
                                                                <h5><span>BHD Star</span> - Bitexco</h5>
                                                                <p>L3-Bitextco Icon 68,2 Hải Triều...</p>
                                                                <span className="chitiet">[chi tiết]</span>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li className="nav-item" role="presentation">
                                                <a className="nav-link" id="bhd__cinema2-tab" data-toggle="tab" href="#bhd__cinema2" role="tab">
                                                    <div className="lichchieu__diadiem__content">
                                                    <img src="https://s3img.vcdn.vn/123phim/2018/09/bhd-star-vincom-thao-dien-15379553942188.jpg" alt="bhd-star-vincom-thao-dien-15379553942188" />
                                                    <div className="lichchieu__diadiem">
                                                        <h5><span>BHD Star</span> - Vincom Thảo Điền</h5>
                                                        <p>L5-megamall, 159XL Hà Nội,Q...</p>
                                                        <span className="chitiet">[chi tiết]</span>
                                                    </div>
                                                    </div>
                                                </a>
                                                </li>
                                                <li className="nav-item" role="presentation">
                                                <a className="nav-link" id="bhd__cinema3-tab" data-toggle="tab" href="#bhd__cinema3" role="tab">
                                                    <div className="lichchieu__diadiem__content">
                                                    <img src="https://s3img.vcdn.vn/123phim/2018/09/bhd-star-vincom-3-2-15379527367766.jpg" alt="bhd-star-vincom-3-2-15379527367766" />
                                                    <div className="lichchieu__diadiem">
                                                        <h5><span>BHD Star</span> - Vincom 3/2</h5>
                                                        <p>L5-Vincom 3/2, 3C Đường 3/2, ...</p>
                                                        <span className="chitiet">[chi tiết]</span>
                                                    </div>
                                                    </div>
                                                </a>
                                                </li>
                                            </ul>
                                            <div className="tab-content" id="bhd__cinemasTabContent">
                            here
                                            <div className="tab-pane fade show active" id="bhd__cinema1" role="tabpanel">
                                            <div className="lichchieu__content">
                                                <div className="lichchieu__detail">
                                                <div className="lichchieu__detail__upper">
                                                    <img src="https://s3img.vcdn.vn/123phim/2017/06/coco-14967202410118.jpg" alt="coco-14967202410118" />
                                                    <div className="lichchieu__detail__upper__text">
                                                    <h5><span>P</span> CoCo</h5>
                                                    <p>109 phút - TIX 9.4 - IMDB 8.7</p>
                                                    </div>
                                                </div>
                                                <h3>2D Digital</h3>
                                                <div className="lichchieu__detail__lower">
                                                    <p><span>14:00</span> ~ 15:49</p>
                                                </div>
                                                </div>
                                                <div className="lichchieu__detail">
                                                <div className="lichchieu__detail__upper">
                                                    <img src="https://s3img.vcdn.vn/mobile/123phim/2020/09/rom-c18-15996245056088_60x60.png" alt="rom-c18-15996245056088_60x60" />
                                                    <div className="lichchieu__detail__upper__text">
                                                    <h5><span className="red">C18</span> Ròm</h5>
                                                    <p>91 phút - TIX 7.9 - IMDB 0</p>
                                                    </div>
                                                </div>
                                                <h3>2D Digital</h3>
                                                <div className="lichchieu__detail__lower">
                                                    <p><span>11:10</span> ~ 12:41</p>
                                                    <p><span>13:00</span> ~ 14:31</p>
                                                    <p><span>15:40</span> ~ 17:11</p>
                                                    <p><span>17:30</span> ~ 19:01</p>
                                                    <p><span>19:01</span> ~ 20:41</p>
                                                    <p><span>23:25</span> ~ 00:56</p>
                                                </div>
                                                </div>
                                                <div className="lichchieu__detail">
                                                <div className="lichchieu__detail__upper">
                                                    <img src="https://s3img.vcdn.vn/mobile/123phim/2020/10/phi-vu-hoan-luong-honest-thief-c16-16018821184337_60x60.png" alt="phi-vu-hoan-luong-honest-thief-c16-16018821184337_60x60" />
                                                    <div className="lichchieu__detail__upper__text">
                                                    <h5>
                                                        <span className="red">C16</span> Phi Vụ Hoàn Lương
                                                        - Honest Thief
                                                    </h5>
                                                    <p>99 phút - TIX 7.4 - IMDB 0</p>
                                                    </div>
                                                </div>
                                                <h3>2D Digital</h3>
                                                <div className="lichchieu__detail__lower">
                                                    <p><span>13:40</span> ~ 15:19</p>
                                                </div>
                                                </div>
                                            </div>
                                            </div>
                                            <div className="tab-pane fade" id="bhd__cinema2" role="tabpanel">
                                            bhd lich chieu 2
                                            </div>
                                            <div className="tab-pane fade" id="bhd__cinema3" role="tabpanel">
                                            bhd lich chieu 3
                                            </div>
                                            </div>
                                        </div>
                                    </div>  */}
      
      



      
                                    {/* <div className="tab-pane fade" id="star" role="tabpanel">star</div>
                                    <div className="tab-pane fade" id="dongda" role="tabpanel"> 
                                      dongdacinema
                                    </div> */}
                                    {renderTabContent(listCinemaData)} 
                                </div> 
                             
                            </div>
                        </div>
                    </div>
                </div>
  </section>
        

    )
}
