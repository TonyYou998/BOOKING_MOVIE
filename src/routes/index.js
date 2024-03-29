import HomePage from "../containers/HomeTemplate/HomePage";
import DetailMoviePage from "../containers/HomeTemplate/DetaiMovie";
import CheckOutPage from "../containers/CheckOutTemplate/CheckOutPage";
import DashBoardPage from "../containers/AdminTemplate/DashBoardPage";
import LoginPage from "../containers/HomeTemplate/LoginPage";
import SuccessPage from "../containers/InformTemplate/SuccessPage";
import HistoryPage from "../containers/AdminTemplate/HistoryPage";
import RegPage from "../containers/HomeTemplate/RegPage";
import AddMemPage from "../containers/AdminTemplate/AddMemPage";
import RemovePage from "../containers/AdminTemplate/RemovePage";
import AddMoviePage from "../containers/AdminTemplate/AddMoviePage";
import RegShowTime from "../containers/AdminTemplate/regshowtime";
import CheckOutMobile from "../containers/CheckOutTemplate/CheckOutPage/Components/checkoutmobile";
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
  },
  {
    exact:false,
    path:"/register",
    Component:RegPage,
  }
 
];
const routesCheckout=[
  {
    exact:false,
    path:"/checkout/:id",
    Component:CheckOutPage,
  },
    {
    exact:false,
    path:"/checkoutmobile/:id",
    Component:CheckOutMobile,
  },
];
const routesAdmin=[
  {
    exact:false,
    path:"/dashboard",
    Component:DashBoardPage,
  },
  {
    exact:false,
    path:"/history",
    Component:HistoryPage,
  },
   {
    exact:false,
    path:"/addmem",
    Component:AddMemPage,
  },
   {
    exact:false,
    path:"/remove",
    Component:RemovePage,
  },
   {
    exact:false,
    path:"/addmovie",
    Component:AddMoviePage,
  },
   {
    exact:false,
    path:"/showtime",
    Component:RegShowTime,
  }
  
];
const routesInform=[
  {
    exact:false,
    path:"/noti",
    Component:SuccessPage,
  }
  
]
export { routesHome,routesCheckout ,routesAdmin,routesInform};
