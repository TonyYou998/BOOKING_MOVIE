import React from "react";

import { Route } from "react-router-dom";
function LayoutInform(props) {
  return (
    <div>
      
      {props.children}
    </div>
  );
}

export default function HomeTemplate({ Component, ...props }) {
  return (
    <Route
      {...props}
      render={(propsComponent) => (
        <LayoutInform>
          <Component {...propsComponent} />
        </LayoutInform>
      )}
    />
  );
}
