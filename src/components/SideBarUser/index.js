import { useDispatch } from "react-redux"
import { useHistory } from "react-router";
import { actLogout } from "../../containers/AdminTemplate/DashBoardPage/modules/action";



export default function SideBarUser(props) {
      let history=useHistory();
    let dispatch=useDispatch();
    return (
        <div className="sidebar__wrapper">
            <div className="company__name">
                Company name
            </div>
            <ul className="sidebar__nav">
                <li><span><i class="mr-2 fa fa-home"></i></span>Info</li>
                <li><span><i class="mr-2 fa fa-calculator"></i></span>Vé đã đặt</li>
              
            </ul>
        </div>
    )
}
