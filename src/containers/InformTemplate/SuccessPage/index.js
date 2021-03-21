import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {Link} from "react-router-dom";
import {actClearReducerDispatch} from "../../CheckOutTemplate/CheckOutPage/Modules/action";
export default function SuccessPage(props) {
        let dispatch=useDispatch();
        useEffect(()=>{
            dispatch(actClearReducerDispatch());
        },[]);

    return (
        <div>
            <div className="jumbotron text-center">
            <h1 className="display-3">Thank You!</h1>
            <h4 className="display-4">Bạn đã  thực hiện thành công</h4>
            <p className="lead"><strong>Vui lòng kiểm tra email</strong> để nhận được thông tin chi tiết.</p>
            <hr />
           
            <p className="lead">
                <Link to={"/"} className="btn btn-primary btn-sm">Trang chủ</Link>
            </p>
            </div>

        </div>
    )
}
