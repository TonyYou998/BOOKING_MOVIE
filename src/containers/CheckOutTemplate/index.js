import React from "react";
import {Route} from "react-router-dom";
import NavbarCheckout from "../../components/NavbarCheckout";
function LayoutCheckout(props) {
    

    return (
        <div>
            <NavbarCheckout/>
            {props.children}
        </div>
    )
}
export default function CheckOutTemplate({Component,...props}){

 return (
    <Route
      {...props}
      render={(propsComponent) => (
        <LayoutCheckout>
          <Component {...propsComponent} />
        </LayoutCheckout>
      )}
    />
  );

}
