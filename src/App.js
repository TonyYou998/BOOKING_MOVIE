import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { routesCheckout, routesHome } from "./routes";
import Carousel from "./components/Carousel";
import HomeTemplate from "./containers/HomeTemplate";
import CheckOutTemplate from "./containers/CheckOutTemplate";
import { connect } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import DemoHooks from "./HOOKS";

import ChildUserCallBack from "./HOOKS/ChildUserCallBack";
import DemoHooksUserCallBack from "./HOOKS/DemoHooksUserCallBAck";
import DemoHooksUseMemo from "./HOOKS/DemoHooksUseMemo";
import BTGameBauCua from "./baucua/btgamebaucua";

export default class App extends Component {
  showLayoutHome = (routes) => {
    if (routes && routes.length > 0) {
      return routes.map((item, index) => {
        return (
          <HomeTemplate
            key={index}
            exact={item.exact}
            path={item.path}
            Component={item.Component}
          />
        );
      });
    }
  };
  showLayoutCheckout=(routes)=>{
    if(routes && routes.length>0) {
      return routes.map((item,index)=>{
        return (
          <CheckOutTemplate
            key={index}
            exact={item.exact}
            path={item.path}
            Component={item.Component}
          />
        )
      })
    }

  }
  render() {
    return (
      <BrowserRouter>
        <Switch>
          {this.showLayoutHome(routesHome)}
          {this.showLayoutCheckout(routesCheckout)}
        </Switch>

      </BrowserRouter>
      // <DemoHooks />
      // <BTGameBauCua />
      // <DemoHooksUserCallBack />
      // <DemoHooksUseMemo />
    );
  }
}

// export default App;
