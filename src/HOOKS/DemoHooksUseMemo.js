import React, { useState, useMemo } from "react";
import ChildUseMemo from "./ChildUseMemo";

export default function DemoHooksUseMemo(props) {
  let [like, setLike] = useState(1);
  let cart = [
    { id: 1, name: "iporn", price: 1000 },
    { id: 2, name: "ipornx", price: 1200 },
    { id: 3, name: "ipornxx", price: 1500 },
  ];
  const renderCart = () => {
    let cart = [
      { id: 1, name: "iporn", price: 1000 },
      { id: 2, name: "ipornx", price: 1200 },
      { id: 3, name: "ipornxx", price: 1500 },
    ];
    return cart;
  };
  const cartMemo = useMemo(renderCart, []);
  // useMemo giống useCallBack nhưng return về 1 giá trị
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
      <ChildUseMemo cart={cartMemo} />
    </div>
  );
}
