import { data } from 'jquery';
import React, { useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actListCinemaApi,actListCinemaShowtimeApi } from '../../modules/action';
import CumRap from "../CumRap";
function Calendar() {
  let dispatch=useDispatch();
  useEffect(()=>{
    dispatch(actListCinemaApi());
    dispatch(actListCinemaShowtimeApi("BHDStar"));
    
  },[]);
  
  const listData=useSelector(state=>state.listCinemaReducer.data);
  const listCinemaData=useSelector(state=>state.listCinemaShowtimeReducer.data);
  
let [state,setState]=useState({
    indexCinema:"bhd-star-cineplex",
    code:"BHDStar",
});

  const renderLogo=(data)=>{
    if(data && data.length>0){
           return data.map((item,index)=>{
            
        if (index === 0)
            return (
              <a
                className="list-group-item list-group-item-action active"
                id={item.maHeThongRap}
                data-toggle="list"
                href={"#" + item.biDanh}
                role="tab"
                aria-controls="home"
                onClick={() => {
                  setState({
                    indexCinema:item.biDanh,
                    code:item.maHeThongRap,
                  })
                  // this.setState({
                  //   indexCinema: index,
                  // });
                }}
              >
                <img src={item.logo} className="w-100" alt="" />
              </a>
            );
          else
            return (
              <a
                className="list-group-item list-group-item-action"
                id={item.maHeThongRap}
                data-toggle="list"
                href={"#" + item.biDanh}
                role="tab"
                aria-controls="home"
                onClick={() => {
                  setState({
                    indexCinema:item.biDanh,
                    code:item.maHeThongRap,
                  });
                  dispatch(actListCinemaShowtimeApi(item.maHeThongRap));
                  // this.setState({
                  //   indexCinema: index,
                  // });
                }}
              >
                <img src={item.logo} className="w-100" alt="" />
              </a>
            );

    })
    }
  

  }
  const renderItem = (data,listData) => {
    // console.log(listData[1]);
      
      if(data && data.length>0)
      return (
        
          <div
            className="tab-pane fade show active"
            id={state.indexCinema}
            role="tabpanel"
            aria-labelledby={state.maHeThongRap}
          >
            <CumRap
              key={state.biDanh}
              nameCinema={state.maHeThongRap}
              listRap={listCinemaData[0].lstCumRap}
              state={state}
            />
          </div>
        
      );
    };
  
    return (
      <div id="calendar" className=" calendar__wrapper py-4">
            <div className="container my-5 cinemaListMovie px-0">
        <div className="row  animate__fadeInDown  m-0" data-wow-delay="0.3s">
          <div className="col-1 p-0">
            <div
              className="list-group rounded-0 rounded-left"
              id="list-tab"
              role="tablist"
            >
              {renderLogo(listData)}
              
            </div>
          </div>
          <div className="col-11 p-0">
            <div className="tab-content" id="nav-tabContent">
              {renderItem(listCinemaData,listData)}
              
            </div>
          </div>
        </div>
      </div>
      </div>
          

    )
}

export default Calendar
