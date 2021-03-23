import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { routesCheckout, routesHome,routesAdmin,routesInform } from "./routes";
// import Carousel from "./components/Carousel";
import HomeTemplate from "./containers/HomeTemplate";
import CheckOutTemplate from "./containers/CheckOutTemplate";
import { connect } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import AdminTemplate from "./containers/AdminTemplate";
import InformTemplate from "./containers/InformTemplate";
import PageNotFound from "./containers/PageNotFound";

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
  ShowLayoutAdmin=(routes)=>{
    if(routes && routes.length>0){
      return routes.map((item,index)=>{
        return (
          <AdminTemplate
            key={index}
            exact={item.exact}
            path={item.path}
            Component={item.Component}
          />
        )
      })
    }
  }
   ShowLayoutInform=(routes)=>{
    if(routes && routes.length>0){
      return routes.map((item,index)=>{
        return (
          <InformTemplate
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
          {this.ShowLayoutAdmin(routesAdmin)}
          {this.ShowLayoutInform(routesInform)}
            <Route path="" component={PageNotFound} />
        </Switch>

      </BrowserRouter>
     
    );
  }
}


