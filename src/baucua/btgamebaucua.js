import React from "react";
import Danhsachcuoc from "./danhsachcuoc";
import Danhsachxucxac from "./danhsachxucxac";

import "./baitapgamebaucua.css";
import Diemcuoc from "./diemcuoc";
export default function BTGameBauCua(props) {
  return (
    <div
      id="baitapgamebaucua"
      className="container-fluid "
      style={{ marginTop: 0 }}
    >
      <Diemcuoc />
      <div className="row">
        <div className="col-8">
          <Danhsachcuoc />
        </div>
        <div className="col-4">
          <Danhsachxucxac />
        </div>
      </div>
    </div>
  );
}
