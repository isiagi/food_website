import { useContext } from "react";
import { AppContext } from "../context/Context";
import "./card.css";

import { FaCartArrowDown } from "react-icons/fa";
import { Link } from "react-router-dom";

const Card = ({ id, price, img, name }) => {
  const { addCart } = useContext(AppContext);

  return (
    <>
      <div className="card__Container" key={id}>
        <Link to={`/${id}`}>
          <div className="card__image">
            <img src={img} alt="hey" width="100%" />
          </div>
        </Link>
        <div className="card__detail">
          <div className="card__detail1">
            <p>{name}</p>
            <p>Ugx {price}</p>
          </div>
          <div className="card__detail2">
            <FaCartArrowDown className="card__icon" onClick={() => addCart({id, para:price, img, head:name})} />
          </div>
        </div>
      </div>

      {/* id: 1, img: "/static/media/shoe.9484e62d3cda2b2a0e01.jpeg", head: "Nike Air", para: "70000" */}
    </>
  );
};

export default Card;
