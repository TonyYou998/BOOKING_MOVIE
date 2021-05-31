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
import CountUp from "./Components/CountUp";
import CountUpCompo from "./Components/CountUp";
import Calendar from "./Components/Calendar";
import AnimatedText from "./Components/Animated__Text";





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

    
    
    return <Carousel />;
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
  const renderCalendar=()=>{
    return <Calendar/>
  }
  const renderCountUp=()=>{
    return <CountUpCompo/>
  }
  
  

  return (
    <div className="homepage__wrapper">
     
      <div>{renderCarousel()}</div>
      {/* <div>{renderSearch()}</div> */}
      <div>{renderCountUp()}</div>  
     
      <div>{renderListMovieWrapper()}</div>
      <div className=" text-center animated__wrapper"><AnimatedText/></div>
      {/* <div>{renderNews()}</div> */}
        <div>{renderCalendar()}</div>
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
