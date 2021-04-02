import React, { useEffect } from "react";
import Carousel from "../HomePage/Components/Carousel";
import { actNewApi, actListMovieApi } from "../HomePage/modules/action";
import { connect } from "react-redux";
import NewsWrapper from "./Components/NewsWrapper";
import ListMovieWrapper from "./Components/ListMovieWrapper";
import App from "./Components/app";
import Footer from "./Components/footer";
import TimeTable from "../../../components/TimeTable";
import Search from "../HomePage/Components/search";


function HomePage(props) {
  useEffect(() => {
    props.fetchListMovie();
    props.fetchNew();
  }, []);
      const { data } = props;
    const renderSearch=()=>{
        return <Search/>
    }
  const renderCarousel = () => {

    
    let arrHinhAnh = [];
    let arrMaPhim=[];
    if (data && data.length > 0) {
      
      data.forEach((item, index) => {
      
        if (index === 18 || index === 19 || index === 20){
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
      <div>{renderSearch()}</div>
      
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
