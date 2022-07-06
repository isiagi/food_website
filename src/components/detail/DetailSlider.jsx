import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from "../../components/assets/images/shoe.jpeg";

import "./foodDetail.css";

const DetailSlider = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  return (
    <div className="detail-slider-header">
      <p>Scroll left or right to show</p>
      <Slider
        {...settings}
        className="slider"
        autoplay={true}
        focusOnSelect={true}
      >
        <div>
          <div className="slide__img">
            <img src={img1} alt="" />
          </div>
        </div>
        <div>
          <div className="slide__img">
            <img src={img1} alt="" />
          </div>
        </div>
        <div>
          <div className="slide__img">
            <img src={img1} alt="" />
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default DetailSlider;
