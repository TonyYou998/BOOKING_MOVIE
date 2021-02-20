import React from "react";
import { Fragment } from "react";

export default function xucxac(props) {
  const { XucXacItem } = props;
  return (
    <Fragment>
      <div className="scene">
        <div className="cube">
          <img
            className="ml-3 cube__face front"
            style={{ width: 50 }}
            src={XucXacItem.hinhAnh}
          />
          <img
            className="ml-3 cube__face back"
            style={{ width: 50 }}
            src="./img/baucua/bau.png"
          />
          <img
            className="ml-3 cube__face left "
            style={{ width: 50 }}
            src="./img/baucua/cua.png"
          />
          <img
            className="ml-3 cube__face right "
            style={{ width: 50 }}
            src="./img/baucua/ca.png"
          />
          <img
            className="ml-3 cube__face top"
            style={{ width: 50 }}
            src="./img/baucua/nai.png"
          />
          <img
            className="ml-3 cube__face bottom"
            style={{ width: 50 }}
            src={XucXacItem.hinhAnh}
          />
        </div>
      </div>
    </Fragment>
  );
}
