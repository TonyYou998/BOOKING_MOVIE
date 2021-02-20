import React, { memo } from "react";

function ChildUserCallBack(props) {
  let title = "cyberlear";
  let obj = "tấn";
  console.log("title:", title);
  console.log("obj:", obj);
  console.log("re-render");
  return (
    <div>
      <small>{props.renderNotify}</small>
      <textarea></textarea>
      <br />
      <br />
      <button className="btn btn-success">gui</button>
    </div>
  );
}
export default memo(ChildUserCallBack);
// khi parent render lại memo ko render lại
//khi props truyền vào memo thay đổi thì child render lại
