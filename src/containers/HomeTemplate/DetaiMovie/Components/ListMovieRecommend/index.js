import Slider from "react-slick";
import ListMovie from "../../../../../components/ListMovie";
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
     
    if (data && data.length > 0) {
      return data.map((movie, index) => {
        return <ListMovie movie={movie} />;
      });
    }
    }
    return (
        <div className="container pt-4 text-white"  >
            
             <div className="my-3 py-2 recommend__wrapper">
                   <h2>Phim Hiện Chiếu</h2>
             </div>
              <Slider {...settings}>
               {renderListMovie()}
              </Slider>
        </div>
    )
}
