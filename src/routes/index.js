import HomePage from "../containers/HomeTemplate/HomePage";
import DetailMoviePage from "../containers/HomeTemplate/DetaiMovie";
import CheckOutPage from "../containers/CheckOutTemplate/CheckOutPage";

const routesHome = [
  {
    exact: true,
    path: "/",
    Component: HomePage,
  },

  {
    exact: false,
    path: "/detail/:id",

    Component: DetailMoviePage,
  },
 
];
const routesCheckout=[
  {
    exact:false,
    path:"/checkout",
    Component:CheckOutPage,
  }
]
export { routesHome,routesCheckout };