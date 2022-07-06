import { useParams } from "react-router-dom";
import "./foodDetail.css";
import { useContext } from "react";
import { AppContext } from "../context/Context";

import { FaCartArrowDown } from "react-icons/fa";
import DetailSlider from "./DetailSlider";

import { sneaker } from "../../util/data/sneaker";
import { useEffect } from "react";
import { useState } from "react";

const FoodDetail = () => {
  const [item, setItem] = useState({});

  const { addCart } = useContext(AppContext);

  const { id } = useParams();

  useEffect(() => {
    const ite = sneaker.filter((item) => {
      return item.id === parseInt(id);
    });
    console.log(ite[0]);
    setItem(ite[0]);
  }, [id]);

  return (
    <div className="foodDetail__container">
      <div className="foodDetail__wrapper">
        <div className="foodDetail__col__grid">
          <div className="foodDetail__img">
            <img src={item.img} alt="" />
          </div>
          <div className="foodDetail__data">
            <h1>{item.head}</h1>
            <p>Ugx {item.para}</p>
            <div className="foodDetail__summary">
              <h3>Summary Details</h3>
              <ul>
                <li>Original Outfit</li>
                <li>Nike</li>
                <li>Fit for outdoor</li>
              </ul>
            </div>
            <div className="detail__wrapper">
              <div>
                <h3>Size</h3>
                <div>
                  <select>
                    <option value="">1</option>
                    <option value="">2</option>
                    <option value="">3</option>
                  </select>
                </div>
              </div>
              <div className="foodDetail__colorz">
                <p>Color</p>
                <div className="foodDetail__color__container">
                  <div className="foodDetail__color"></div>
                  <div className="foodDetail__color1"></div>
                  <div className="foodDetail__color2"></div>
                </div>
              </div>
            </div>
            <div className="foodDetail__button">
              <button onClick={() => addCart(item)}>
                Add to <FaCartArrowDown />
              </button>
            </div>
          </div>
        </div>
        <DetailSlider />
      </div>
    </div>
  );
};

export default FoodDetail;
