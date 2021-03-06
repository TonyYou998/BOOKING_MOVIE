import { actLogout } from "../../containers/AdminTemplate/DashBoardPage/modules/action";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
export default function SideBarAdmin(props) {
     let history=useHistory();
    let dispatch=useDispatch();

    return (
        <div className="sidebar__wrapper">
            <div className="company__name">
                Company name
            </div>
            <ul className="sidebar__nav">
                <li><span><i class="mr-2 fa fa-home"></i></span>Info</li>
                <li><span><i class="mr-2 fa fa-calculator"></i></span>Quản Lý Vé</li>
                <li><span><i class="mr-2 fa fa-plus"></i></span>Thêm Người Dùng</li>
                <li><span><i class="mr-2 fa fa-calendar"></i></span>Quản lý Lịch Chiếu</li>
               
            </ul>
        </div>
    )
}
