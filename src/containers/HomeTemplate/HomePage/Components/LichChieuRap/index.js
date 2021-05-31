import React from 'react'
import { useSelector } from 'react-redux';
import LichChieuItem from "../LichChieuItem";
function LichChieuRap(props) {

    const {maCumRap}=props;
    // console.log(props);
    const data=useSelector(state=>state.listCinemaShowtimeReducer.data);
     const customText = (text, index = 21) => {
      if (text.length < index) return text;
      else return text.slice(0, index) + " ...";
    };

    const renderItem = () => {
    //   const {  data } = this.props;
    //   if (loading) return <Loader />;
     
      if (data) {
           
        return (
          data &&
          data.map((item) => {
             
            return item.lstCumRap.map((itemCR) => {
            // console.log(itemCR.maCumRap);
            // console.log(maCumRap);
              if (itemCR.maCumRap === maCumRap){
              
                 return (
                
                  <LichChieuItem
                   key={itemCR.maCumRap}
                    danhSachPhim={itemCR.danhSachPhim}
                  />
                );
              }
               
            });
          })
        );
      }
    };



   return <ul className="list-unstyled">{renderItem()}</ul>;
}

export default LichChieuRap;
