import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer__container">
      <div className="footer__wrapper">
        <div className="footer__content">
          <div className="footer__one">
            <h2>SmartFit</h2>
            <p style={{ color: "#005B99" }}>We are leading outfit website.</p>
            <p style={{ color: "#FFE4E1" }}>All Rights Reserved @ 2022</p>
          </div>
          <div>
            <h3>Quick Links</h3>
            <Link to="/">
              <p style={{ color: "#A13E42" }}>Home</p>
            </Link>
            <p>Cart</p>
          </div>
          <div>
            <h3>Catergories</h3>
            <Link to="/info/sneakers">
              <p style={{ color: "#A13E42" }}>Sneakers</p>
            </Link>
            <Link to="/info/shoes">
              <p style={{ color: "#A13E42" }}>Shoes</p>
            </Link>
            <Link to="/info/dresses">
              <p style={{ color: "#A13E42" }}>Dresses</p>
            </Link>
          </div>
          <div>
            <h3>Contact</h3>
            <p style={{ color: "#A13E42" }}>+256</p>
            <p style={{ color: "#A13E42" }}>smartfit@gmail.com</p>
          </div>
        </div>
        <div>
          <p style={{ color: "#FFE4E1" }}>Designed with &#128147; by Isiagi </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
