import React from "react";
import Quancuoc from "./quancuoc";
import { useSelector } from "react-redux";
export default function Danhsachcuoc(props) {
  const danhSachCuoc = useSelector(
    (state) => state.btgamebaucuareducer.danhSachCuoc
  );
  // console.log(danhSachCuoc);

  const renderDanhSachCuoc = () => {
    return danhSachCuoc.map((item, index) => {
      console.log(item.hinhAnh);
      return (
        <div className="col-4" key={index}>
          <Quancuoc qc={item} />
        </div>
      );
    });
  };

  return (
    <div>
      <div className="row">{renderDanhSachCuoc()}</div>
    </div>
  );
}
