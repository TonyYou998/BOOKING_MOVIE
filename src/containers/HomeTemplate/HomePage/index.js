import React, { useEffect } from "react";
import Carousel from "../../../components/Carousel";
import { actNewApi, actListMovieApi } from "../HomePage/modules/action";
import { connect } from "react-redux";
import NewsWrapper from "../../../components/NewsWrapper";
import ListMovieWrapper from "../../../components/ListMovieWrapper";
import App from "../../../components/app";
import Footer from "../../../components/footer";

function HomePage(props) {
  useEffect(() => {
    props.fetchListMovie();
    props.fetchNew();
  }, []);

  const renderCarousel = () => {
    const { data } = props;
    let arr = [];
    // console.log(data);
    if (data && data.length > 0) {
      data.forEach((item, index) => {
        if (index === 3 || index === 5 || index === 7) arr.push(item.hinhAnh);
      });
    }
    return <Carousel arrMovie={arr} />;
  };

  const renderListMovieWrapper = () => {
    const { data } = props;
    // console.log(data);
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

  return (
    <div>
      <div>{renderCarousel()}</div>
      <div>{renderListMovieWrapper()}</div>
      <div>{renderNews()}</div>
      <div>{renderApp()}</div>
      <div>{renderFooter()}</div>
    </div>
  );
}
const mapStateToProps = (state) => {
  // console.log(state);
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
