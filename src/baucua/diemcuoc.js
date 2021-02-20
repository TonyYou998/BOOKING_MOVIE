import React from "react";
import { useSelector } from "react-redux";

export default function Diemcuoc(props) {
  const diemCuoc = useSelector((state) => state.btgamebaucuareducer.tongDiem);
  // console.log(diemCuoc);
  return (
    <div className="text-center text-danger display-4" style={{ marginTop: 0 }}>
      <h1>bầu cua UIT</h1>
      <div className="text-center">
        <span style={{ fontSize: "20px" }} className="p-3 text-white bg-dark">
          tiền thưởng{" "}
          <span className="text-warning">{diemCuoc.toLocaleString()}</span>
        </span>
      </div>

      <div className="text-center">
        <button
          style={{ fontSize: "15px" }}
          className="p-3 text-white bg-success"
        >
          chơi lại
        </button>
      </div>
    </div>
  );
}
