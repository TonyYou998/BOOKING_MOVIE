import React, { useEffect } from "react";
import Carousel from "../../../components/Carousel";
import { actNewApi, actListMovieApi } from "../HomePage/modules/action";
import { connect } from "react-redux";
import NewsWrapper from "../../../components/NewsWrapper";
import ListMovieWrapper from "../../../components/ListMovieWrapper";
import App from "../../../components/app";
import Footer from "../../../components/footer";
import TimeTable from "../../../components/TimeTable";

function HomePage(props) {
  useEffect(() => {
    props.fetchListMovie();
    props.fetchNew();
  }, []);

  const renderCarousel = () => {
    const { data } = props;
    // console.log(data);
    let arrHinhAnh = [];
    let arrMaPhim=[];
    if (data && data.length > 0) {
      console.log(data);
      data.forEach((item, index) => {
      
        if (index === 0 || index === 1 || index === 2){
          arrHinhAnh.push(item.hinhAnh);
          arrMaPhim.push(item.maPhim);
        } 
      });
    }
    return <Carousel arrMovie={arrHinhAnh} arrCode={arrMaPhim} />;
  };

  const renderListMovieWrapper = () => {
    const { data } = props;
    
    return <ListMovieWrapper data={data} />;
  };
  const renderNews = () => {
    const { NewData } = props;
  
    return <NewsWrapper data={NewData} />;
  };
  const renderApp = () => {
    return <App />;
  };
  const renderFooter = () => {
    return <Footer />;
  };
  const renderTimeTable=()=>{
    return <TimeTable/>
  }

  return (
    <div>
      <div>{renderCarousel()}</div>
      <div>{renderListMovieWrapper()}</div>
      {/* <div>{renderTimeTable()}</div> */}
      <div>{renderNews()}</div>
      <div>{renderApp()}</div>
      <div>{renderFooter()}</div>
    </div>
  );
}
const mapStateToProps = (state) => {

  return {
    data: state.listMovieReducer.data,
    NewData: state.NewReducers.NewData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchListMovie: () => {
      dispatch(actListMovieApi());
    },
    fetchNew: () => {
      dispatch(actNewApi());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
