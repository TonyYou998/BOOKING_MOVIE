import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { actFetchListUserApi } from "./Modules/action";

export default function RemovePage(props) {
    let dispatch=useDispatch();
    useEffect(()=>{
        dispatch(actFetchListUserApi());
    },[])
    const listUserData=useSelector(state=>state.listUserReducer.data);
   

     const renderTable=(data)=>{
    
        if(data && data.length>0){
             return data.map((item,index)=>{
                console.log(item);
             return(


             <tr key={index}>
                 lll
                 {/* <td>{showTenHeThongRap(item.danhSachGhe)}</td>
            //     <td>{showTenRap(item.danhSachGhe)}</td>
            //     <td>{showTenGhe(item.danhSachGhe)}</td> */}
               
              
             </tr>
        )

        })
             
        }
      
         
    }

    return (
       <div className="history__wrapper">
               <h2 style={{width:"30%"}}>Danh sách account</h2>
               <div className="table-responsive">
                   <table className="table table-striped table-sm">
                       <thead>
                             <tr>

                               <th>Username</th>
                               <th>Email</th>
                               <th>Vị trí</th>
                              
                            
                           </tr>
                       </thead>
                       <tbody style={{height:"500px",overflowY:"scroll"}}>
                         {renderTable(listUserData)}
                       </tbody>
                   </table>

               </div>
        </div>
    )
}
