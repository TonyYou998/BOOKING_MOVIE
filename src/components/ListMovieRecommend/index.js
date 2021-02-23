import Slider from "react-slick";
import ListMovie from "../ListMovie"
export function ListMovieRecommend(props) {
    
   const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4
    };
    const renderListMovie=()=>{
      const { data } = props;
      console.log(data);
    if (data && data.length > 0) {
      return data.map((movie, index) => {
        return <ListMovie movie={movie} />;
      });
    }
    }
    return (
        <div className="container pt-4"  >
             <h2 style={{color:"#fa5238"}}>Phim Hiện Chiếu</h2>
              <Slider {...settings}>
               {renderListMovie()}
              </Slider>
        </div>
    )
}
