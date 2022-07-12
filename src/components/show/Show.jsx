import { Link } from "react-router-dom";
import "./show.css";

const Show = () => {
  return (
    <div className="show__container">
      <div className="show__wrapper">
        <div className="show__grid">
          <Link to="/info/sneakers">
            <div className="show__grid__col_1">
              <h1>Sneakers</h1>
            </div>
          </Link>
          <Link to="/info/shoes">
            <div className="show__grid__col_2">
              <h1>Shoes</h1>
            </div>
          </Link>
          <Link to="/info/dresses">
            <div className="show__grid__col_3">
              <h1>Dresses</h1>
            </div>
          </Link>
          <div className="show__grid__col_4">
            <h1>Bags</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Show;
