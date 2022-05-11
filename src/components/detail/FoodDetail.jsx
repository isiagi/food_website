import "./foodDetail.css";
import food1 from "../assets/images/c.jpg";

const FoodDetail = () => {
  return (
    <div className="foodDetail__container">
      <div className="foodDetail__wrapper">
        <div className="foodDetail__col__grid">
          <div className="foodDetail__img">
            <img src={food1} alt="" />
          </div>
          <div className="foodDetail__data">
            <h1>Fried Rice</h1>
            <p>Rice / meat / sugar / protein</p>
            <p>shs 15,000</p>
            <div className="foodDetail__button">
              <button>Add to Tray</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetail;
