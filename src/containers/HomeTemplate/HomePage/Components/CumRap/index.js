import React, { useState } from 'react'
import LichChieuRap from "../LichChieuRap";
function CumRap(props) {
    const [state,setState]=useState({
      indexCinema:null,
      maCumRap:"",

});

 const customText = (text, index = 21) => {
      if (text.length < index) return text;
      else return text.slice(0, index) + " ...";
    };
    const {listRap}=props;
    // console.log(listRap);
     const renderLogo = () => {
      const {  data } = props;

      
      return (
        listRap &&
        listRap.map((item, i) => {
            // console.log(item);
          return (
            <a
              className="list-group-item list-group-item-action"
              id={"cinema" + listRap.maCumRap}
              data-toggle="list"
              href={"#Cinema" + item.maCumRap}
              role="tab"
              aria-controls="home"
              onClick={() => {
                  setState({
                      indexCinema:i,
                      maCumRap:item.maCumRap,
                  })
                // this.setState({
                //   indexCinema: i,
                // });
              }}
            >
              <div className="row">
                <div className="col-3">
                  <div
                    style={{
                      height: "52.6px",
                      width: "100%",
                      backgroundColor: "#555",
                    }}
                  ></div>
                </div>
                <div className="col-9">
                  <p style={{ margin: "0" }}>
                    <b>{customText(item.tenCumRap, 21)}</b>
                  </p>
                  <p style={{ margin: "0", lineHeight: "6px" }}>
                    <i style={{ fontSize: "12px" }}>
                      {customText(item.diaChi, 32)}
                    </i>
                  </p>
                  <p style={{ margin: "0", fontSize: "12px" }}>[Chi tiết]</p>
                </div>
              </div>
            </a>
          );
        })
      );
    };
      const renderItem = () => {
   
     
    
    //   if (loading) return <Loader />;
      return (
        listRap && (
          <div
            className="tab-pane fade show active LichChieuRap"
            id={"Cinema" + state.maCumRap}
            role="tabpanel"
            aria-labelledby={"cinema" + state.maCumRap}
          >
            <LichChieuRap
              key={state.biDanh}
              maCumRap={state.maCumRap}
              danhSachRap={listRap}
            //   nameCinema={this.props.nameCinema}
            />
          </div>
        )
      );
    };
    return (
        <div className="container-fluid">
        <div className="row">
          <div className="col-4 px-0">
            <div
              className="list-group rounded-0 CumRap "
              id="list-tab"
              role="tablist"
            >
              {renderLogo()}
            </div>
          </div>
          <div className="col-8 p-0">
            <div className="tab-content" id="nav-tabContent">
              {renderItem()}
            </div>
          </div>
        </div>
      </div>
    )
}

export default CumRap
