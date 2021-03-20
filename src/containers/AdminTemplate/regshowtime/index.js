import { useState } from "react";
import { useDispatch } from "react-redux";
import { actRegShowTimeApi } from "./modules/action";

export default function RegShowTime(props) {
        let [state,setState]=useState({
            maPhim:0,
            ngayChieuGioChieu:"",
            maRap:"",
            giaVe:0,
        });
        const info=JSON.parse(localStorage.getItem("user"));
        
        let dispatch=useDispatch();
        const handleSubmit=(e)=>{
            e.preventDefault();
            
         
            dispatch(actRegShowTimeApi(state,info.accessToken))
        }
        
    return (
         <div className="container  ">
           
            <div className="reg__wrapper form" onSubmit={handleSubmit} >
                  <h1 class="text-center">Thêm lịch chiếu</h1>
                  
                <div className="form-group input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text"> <i className="fa fa-envelope" /> </span>
                    </div>
                    <input name="maPhim" className="form-control" placeholder="mã phim" type="text" onChange={
                        (e)=>{
                            
                            setState({...state,maPhim:e.target.value});
                        }
                    } />
                </div>
            
             
             
                <div  className="form-group input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text"> <i className="fa fa-envelope" /> </span>
                    </div>
                    <input name="ngayChieuGioChieu"  className="form-control" placeholder="ngày giờ chiếu" type="text" onChange={(e)=>{
                            
                             setState({...state,ngayChieuGioChieu:e.target.value});
                            
                    }} />
		         
                </div>
                
                <div  className="form-group input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text"> <i className="fa fa-envelope" /> </span>
                    </div>
                    <input name="maRap"  className="form-control" placeholder="mã rạp" type="text" onChange={(e)=>{
                        
                        setState({...state,maRap:e.target.value});

                    }} />
		         
                </div>
                
                <div  className="form-group input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text"> <i className="fa fa-envelope" /> </span>
                    </div>
                    <input name="giaVe"  className="form-control" placeholder="giá vé" type="number" onChange={(e)=>{
                        // setHinhAnh({ hinhAnh: e.target.files[0]})
                        setState({...state,
                            giaVe:e.target.value
                        });
                    }} />
		         
                </div>


              


                
              
               


                <form className="form-group">
                    <button type="submit" className="btn btn-primary btn-block" >Thêm phim</button>
                </form>


            </div>
             {/* <div className="list_movie__wrapper col-6" style={{paddingTop:"100px"}}>
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
             </div> */}
        </div>
    )
}
