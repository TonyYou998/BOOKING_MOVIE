import HomePage from "../containers/HomeTemplate/HomePage";
import DetailMoviePage from "../containers/HomeTemplate/DetaiMovie";
import CheckOutPage from "../containers/CheckOutTemplate/CheckOutPage";
import DashBoardPage from "../containers/AdminTemplate/DashBoardPage";
import LoginPage from "../containers/HomeTemplate/LoginPage";

const routesHome = [
  {
    exact: true,
    path: "/",
    Component: HomePage,
  },
  {
    exact:false,
    path:"/home",
    Component:HomePage,
  },

  {
    exact: false,
    path: "/detail/:id",

    Component: DetailMoviePage,
  },
  {
    exact:false,
    path:"/login",
    Component:LoginPage,
  }
 
];
const routesCheckout=[
  {
    exact:false,
    path:"/checkout/:id",
    Component:CheckOutPage,
  }
];
const routesAdmin=[
  {
    exact:false,
    path:"/dashboard",
    Component:DashBoardPage,
  }
]
export { routesHome,routesCheckout ,routesAdmin};
