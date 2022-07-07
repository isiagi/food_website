import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./slider.css";

import { shows } from "../../util/data/sneaker";

const Slide = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ width: "1024px", maxWidth: "100%" }}>
        <Slider {...settings} className="slider" autoplay={true} arrows={false}>
          {shows.map(({ id, head, para, img }) => (
            <div>
              <div
                className="slider__div"
                style={{
                  height: "80vh",
                  background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${img})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "3rem",
                  color: "#fff",
                }}
                key={id}
              >
                <h3>{head}</h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Slide;
