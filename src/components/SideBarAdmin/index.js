import { actLogout } from "../../containers/AdminTemplate/DashBoardPage/modules/action";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import {Link} from "react-router-dom";
export default function SideBarAdmin(props) {
     let history=useHistory();
    let dispatch=useDispatch();
    let info=JSON.parse(localStorage.getItem("user"));
    return (
        <div className="sidebar__wrapper">
            <div className="company__name">
               Hi {info && info.taiKhoan}!
            </div>
            <ul className="sidebar__nav">
                <Link to={"/dashboard"}><span><i class=" mr-2 fa fa-user-secret"></i></span>Info</Link>
                <Link to={"/addmovie"} ><span><i class="mr-2 fa fa-calculator"></i></span>Quản Lý Phim</Link>
                <Link to={"/addmem"}><span><i class="mr-2 fa fa-plus"></i></span>Thêm Người Dùng</Link>
                <Link to={"/remove"}><i class="mr-2 fa fa-minus-circle"></i>Xóa acc</Link>
                <Link to={"showtime"}><span><i class="mr-2 fa fa-calendar"></i></span>Quản lý Lịch Chiếu</Link>
                 <Link to={"/"}><span><i class="mr-2 fa fa-home"></i></span>Home</Link>
            </ul>
        </div>
    )
}
