import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import {actAddMovieApi, actDeleteMovieApi} from "./modules/action";
import {actListMovieApi} from "../../HomeTemplate/HomePage/modules/action";
import EditMovie from "./Components/EditMovie";
export default function AddMoviePage(props) {
     let info=JSON.parse(localStorage.getItem("user"));
        let [state,setState]=useState({
            tenPhin:"",
            hinhAnh:{},
            biDanh:"",
            trailer:"",
            moTa:"",
            ngayKhoiChieu:"",
            danhGia:"",
            maNhom:"GP02",
        })
        let dispatch=useDispatch();
        useEffect(()=>{
            dispatch(actListMovieApi());
        },[]);
        const listMovieData=useSelector(state=>state.listMovieReducer.data);
      
      
        const handleSubmit=(e)=>{
            e.preventDefault();
             var form_data = new FormData();
             for (var key in state) {
                  form_data.append(key,state[key]);
            }
            dispatch(actAddMovieApi(form_data));
            
        }
        const rednerListMovie=(listMovieData)=>{
            if(listMovieData && listMovieData.length>0)
                return listMovieData.map((item,index)=>{
                    return (
                        <tr>
                            <td>{item.tenPhim}</td>
                            <td>{item.maPhim}</td>
                            <td><button className="btn btn-danger" onClick={()=>{
                                handleDeleteMovie(item.maPhim)

                            }} style={{width:"100%"}}>Delete</button><EditMovie data={item}/></td>
                        </tr>
                    )

                })

        }
          const handleDeleteMovie=(maPhim)=>{
            dispatch( actDeleteMovieApi(maPhim,info.accessToken));
        }
  if(!localStorage.getItem("user") || info.maLoaiNguoiDung!=="QuanTri")
    return<Redirect to="/login" />
    return (
       <div className="container row ">
           
            <div className="reg__wrapper col-6 add_movie__wrapper form" onSubmit={handleSubmit} >
                  <h1 class="text-center">Thêm phim</h1>
                  
                <div className="form-group input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text"> <i className="fa fa-envelope" /> </span>
                    </div>
                    <input name="tenPhim" className="form-control" placeholder="Tên phim " type="text" onChange={
                        (e)=>{
                            
                            setState({...state,tenPhim:e.target.value});
                        }
                    } />
                </div>
            
             
             
                <div  className="form-group input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text"> <i className="fa fa-envelope" /> </span>
                    </div>
                    <input name="biDanh"  className="form-control" placeholder="Bí danh" type="text" onChange={(e)=>{
                           
                             setState({...state,biDanh:e.target.value});
                            
                    }} />
		         
                </div>
                
                <div  className="form-group input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text"> <i className="fa fa-envelope" /> </span>
                    </div>
                    <input name="trailer"  className="form-control" placeholder="Trailer" type="text" onChange={(e)=>{
                       
                        setState({...state,trailer:e.target.value});

                    }} />
		         
                </div>
                
                <div  className="form-group input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text"> <i className="fa fa-envelope" /> </span>
                    </div>
                    <input name="hinhAnh"  className="form-control" placeholder="hinhAnh" type="file" onChange={(e)=>{
                      
                        setState({...state,
                            hinhAnh:e.target.files[0]
                        });
                    }} />
		         
                </div>


                <div  className="form-group input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text"> <i className="fa fa-envelope" /> </span>
                    </div>
                    <input name="moTa"  className="form-control" placeholder="Mô tả" type="text" onChange={
                        (e)=>{
                           
                            setState({...state,moTa:e.target.value});
                        }
                    } />
		         
                </div>


                
                <div  className="form-group input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text"> <i className="fa fa-envelope" /> </span>
                    </div>
                    <input name="ngayKhoiChieu"  className="form-control" placeholder="Ngày khởi chiếu" type="text" onChange={(e)=>{
                        setState({...state,ngayKhoiChieu:e.target.value});
                    }
                        
                    } />
		         
                </div>
                
                <div  className="form-group input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text"> <i className="fa fa-envelope" /> </span>
                    </div>
                    <input name="danhGia"  className="form-control" placeholder="Đánh giá" type="number" onChange={
                        (e)=>{
                            setState({...state,danhGia:e.target.value});
                            
                        }
                    } />
		         
                </div>


                <form className="form-group">
                    <button type="submit" className="btn btn-primary btn-block" >Thêm phim</button>
                </form>


            </div>
             <div className="list_movie__wrapper col-6" style={{paddingTop:"100px"}}>
               <h2>Danh sách phim</h2>
               <div className="table-responsive" style={{height:"430px",overflow:"auto"}}>
                   <table className="table table-striped table-sm">
                       <thead>
                             <tr>
                               <th>Tên phim</th>
                               <th>Mã phim</th>
                               <th>Edit</th>
                              
                           </tr>
                       </thead>
                       <tbody>
                            {rednerListMovie(listMovieData)}
                       </tbody>
                   </table>

               </div>
        </div>
        </div>
    )
}
