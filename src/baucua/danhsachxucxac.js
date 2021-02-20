import React from "react";
import Xucxac from "./xucxac";
import { useSelector } from "react-redux";
export default function Danhsachxucxac(props) {
  const danhSachXucXac = useSelector(
    (state) => state.btgamebaucuareducer.mangXucXac
  );

  return (
    <div className="mt-5 ml-5">
      <div
        className="bg-white mt-2"
        style={{ width: 300, height: 300, borderRadius: "50%" }}
      >
        <div className="row">
          <div className="col-12 text-center" style={{ marginTop: 75 }}>
            <Xucxac XucXacItem={danhSachXucXac[0]} />
          </div>
          <div className="col-6 text-right mt-5">
            <Xucxac XucXacItem={danhSachXucXac[1]} />
          </div>
          <div className="col-6 mt-5">
            <Xucxac XucXacItem={danhSachXucXac[2]} />
          </div>
        </div>
      </div>
      <div style={{ marginLeft: "25%", marginTop: "5%" }}>
        <button className="btn btn-success" style={{ fontSize: 25 }}>
          shock
        </button>
      </div>
    </div>
  );
}
