import React from "react";
import {Route} from "react-router-dom";

import SideBarAdmin from "../../components/SideBarAdmin";
import SideBarUser from "../../components/SideBarUser";

function LayoutAdmin(props) {
  let info=JSON.parse(localStorage.getItem("user"));
  const renderSidebar=()=>{
  if(info && info.maLoaiNguoiDung==="QuanTri")
        return    <SideBarAdmin/>
  else 
        return <SideBarUser/>
  
}    

    return (
        <div className="d-flex">
           
            {renderSidebar()}
            {props.children}
        </div>
    )
}
export default function AdminTemplate({Component,...props}){

 return (
    <Route
      {...props}
      render={(propsComponent) => (
        <LayoutAdmin>
          <Component {...propsComponent} />
        </LayoutAdmin>
      )}
    />
  );

}
