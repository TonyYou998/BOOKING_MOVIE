import { useDispatch } from "react-redux"
import { useHistory } from "react-router";
import { actLogout } from "../../containers/AdminTemplate/DashBoardPage/modules/action";
import {Link} from "react-router-dom";


export default function SideBarUser(props) {
      let history=useHistory();
    let dispatch=useDispatch();
    let info=JSON.parse(localStorage.getItem("user"));
    return (
        <div className="sidebar__wrapper">
            <div className="company__name">
                Hi {info && info.taiKhoan}!
            </div>
            <ul className="sidebar__nav">
                <Link  to={"/dashboard"}><span><i  class="mr-2 fa fa-user-secret"></i></span>Info</Link>
                <Link  to={"/history"} ><span><i class="mr-2 fa fa-calculator"></i></span>Vé đã đặt</Link>
                <Link to={"/"}><span><i class="mr-2 fa fa-home"></i></span>Home</Link>
            </ul>
        </div>
    )
}
