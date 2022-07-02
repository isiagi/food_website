import "./card.css";
import img1 from "../assets/images/shoe.jpeg";
import img2 from "../assets/images/shoe1.jpeg";
import img3 from "../assets/images/shoe5.jpeg";
import img4 from "../assets/images/shoes3.jpeg";

import { FaCartArrowDown } from "react-icons/fa";

const Card = ({id, price, img, name}) => {
  return (
    <>
      <div className="card__Container" key={id}>
        <div className="card__image">
          <img src={img} alt="hey" width="100%" />
        </div>
        <div className="card__detail">
          <div className="card__detail1">
            <p>{name}</p>
            <p>Ugx {price}</p>
          </div>
          <div className="card__detail2">
            <FaCartArrowDown className="card__icon" />
          </div>
        </div>
      </div>

      {/* <div className="card__Container">
        <div className="card__image">
          <img src={img4} alt="hey" width="100%" Maxheight="300" />
        </div>
        <div className="card__detail">
          <p>Mocassin</p>
          <p>3000</p>
        </div>
      </div> */}
    </>
  );
};

export default Card;
