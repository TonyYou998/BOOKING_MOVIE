import React, { useState, useCallback } from "react";
import ChildUserCallBack from "./ChildUserCallBack";

export default function DemoHooksUserCallBack(props) {
  let [like, setLike] = useState(0);
  const renderNotify = () => {
    return `bạn đã thả like ${like} ♥ `;
  };
  //dùng useCallBack sẽ quan sát sự thay đổi của đối tượng quan sát=> khi đối tượng quan sát thay đổi hàm callback sẽ thay đổi
  let renderCallBack = useCallback(renderNotify, [like]);
  return (
    <div className="m-5">
      like:{like} ♥
      <br />
      <span
        style={{ cursor: "pointer", color: "red", fontSize: 35 }}
        onClick={() => {
          setLike(like + 1);
        }}
      >
        ♥
      </span>
      <br />
      <br />
      <ChildUserCallBack renderNotify={renderCallBack} />
    </div>
  );
}
