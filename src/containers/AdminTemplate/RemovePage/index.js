import {useState} from "react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Redirect } from "react-router";
import { actFetchListUserApi,actDeleteUserAPi } from "./Modules/action";

export default function RemovePage(props) {
  
    let dispatch=useDispatch();
    const info=JSON.parse(localStorage.getItem("user"));
    let [state,setState]=useState({
        count:0,
    })
    useEffect(()=>{
        dispatch(actFetchListUserApi());
    },[state]);
    const handleDelete=(id)=>{
        dispatch(actDeleteUserAPi(id));

    }
    const listUserData=useSelector(state=>state.listUserReducer.data);
   

     const renderTable=(data)=>{
    
        if(data && data.length>0){
             return data.map((item,index)=>{
                
             return(


             <tr key={index}>
                 
                 <td>{item.taiKhoan}</td>
                <td>{item.email}</td>
                 <td>{item.maLoaiNguoiDung}</td>
                <td><button className="btn btn-danger" onClick={()=>{
                    handleDelete(item.taiKhoan);
                    setState({count:state.count+1})
                
                }} >delete</button></td>
              
             </tr>
        )

        })
             
        }
      
         
    }
  if(!localStorage.getItem("user") || info.maLoaiNguoiDung!=="QuanTri")
    return <Redirect to="/login"/>
    return (
       <div className="history__wrapper">
               <h2 style={{width:"30%"}}>Danh sách account</h2>
               <div className="table-responsive" style={{height:"600px",overflow:"auto"}}>
                   <table className="table table-striped table-sm">
                       <thead>
                             <tr>

                               <th>Username</th>
                               <th>Email</th>
                               <th>Vị trí</th>
                                <th>Xóa</th>
                            
                           </tr>
                       </thead>
                       <tbody >
                         {renderTable(listUserData)}
                       </tbody>
                   </table>

               </div>
        </div>
    )
}
