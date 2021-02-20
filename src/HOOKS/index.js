import React, { useState, useEffect } from "react";

export default function DemoHooks(props) {
  let [state, setState] = useState({ like: 0 });
  let [isAgree, setIsAgree] = useState(false);
  const handleLike = () => {
    // setState làm thay đổi state=> component dc render lại
    if (isAgree) setState({ like: state.like + 1 });
  };
  const handleAgree = () => {
    setIsAgree(true);
  };
  useEffect(() => {
    console.log("use effect just run  once time");
    // sau useeffect thêm 1 mảng rổng thì useeffect chỉ chạy 1 lần đầu tiên => các lần render lại ko chạy nữa
    //dùng khi cần fetch dữ liệu
  }, []);
  useEffect(() => {
    console.log("use effect just run when change");
    //chỉ chạy khi isAgree thay đổi
  }, [isAgree, state]);
  useEffect(() => {
    //state dc cập nhật => component render lại=>useEffect chạy lại
    console.log("useEffect run");
  });
  return (
    <div classname="container">
      <div className="card text-left">
        <img className="card-img-top" src="holder.js/100px180/" alt="" />
        <div className="card-body">
          <h4 className="card-title">Title</h4>
          <p
            className="card-text"
            style={{ color: "red", cursor: "pointer" }}
            onClick={handleLike}
          >
            {state.like} ♥
          </p>
          <button className="btn btn-danger" onClick={handleAgree}>
            agree
          </button>
        </div>
      </div>
    </div>
  );
}
