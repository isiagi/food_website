import "./card.css";
import img1 from "../assets/images/img-8.jpg";

const Card = () => {
  return (
    <div className="card">
      <div className="card__Container">
        <div className="card__image">
          <img src={img1} alt="hey" width="100%"  />
        </div>
        <div className="card__detail">
          <p>Chicken Wings</p>
          <p>3000</p>
        </div>
      </div>
      <div className="card__Container">
        <div className="card__image">
          <img src={img1} alt="hey" width="100%" Maxheight="300" />
        </div>
        <div className="card__detail">
          <p>Chicken Wings</p>
          <p>3000</p>
        </div>
      </div>
      <div className="card__Container">
        <div className="card__image">
          <img src={img1} alt="hey" width="100%" Maxheight="300" />
        </div>
        <div className="card__detail">
          <p>Chicken Wings</p>
          <p>3000</p>
        </div>
      </div>
      <div className="card__Container">
        <div className="card__image">
          <img src={img1} alt="hey" width="100%" Maxheight="300" />
        </div>
        <div className="card__detail">
          <p>Chicken Wings</p>
          <p>3000</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
