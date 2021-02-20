import { yellow } from "@material-ui/core/colors";
import React from "react";

export default function Quancuoc(props) {
  const { qc } = props;
  console.log(qc);
  return (
    <div className="mt-3 ">
      <img src={qc.hinhAnh} style={{ width: 150 }} />
      <div className="bg-success " style={{ borderRadius: "10px", width: 150 }}>
        <button className="btn btn-danger mr-2">
          <i className="fa fa-plus"></i>
        </button>
        <span style={{ color: "yellow", fontSize: "24px" }}>{qc.diemCuoc}</span>
        <button className="btn btn-danger ml-2">-</button>
      </div>
    </div>
  );
}
