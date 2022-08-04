import { Link } from "react-router-dom";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";

import "./footer.css";

const Footer = () => {
  return (
    <div className="footer__container">
      <div className="footer__wrapper">
        <div className="footer__content">
          <div className="footer__one">
            <h2>SmartFit</h2>
            <p style={{ color: "#005B99" }}>We are leading outfit website.</p>
          </div>
          <div>
            <h3>Quick Links</h3>
            <Link to="/">
              <p style={{ color: "#FFE4E1" }}>
                <AiFillHome className="footer__icon" /> Home
              </p>
            </Link>
            {/* <p>Cart</p> */}
          </div>
          <div>
            <h3>Catergories</h3>
            <Link to="/info/sneakers">
              <p style={{ color: "#FFE4E1" }}>Sneakers</p>
            </Link>
            <Link to="/info/shoes">
              <p style={{ color: "#FFE4E1" }}>Shoes</p>
            </Link>
            <Link to="/info/dresses">
              <p style={{ color: "#FFE4E1" }}>Dresses</p>
            </Link>
          </div>
          <div>
            <h3>Contact</h3>
            <p style={{ color: "#FFE4E1" }}>
              <BsFillTelephoneOutboundFill className="footer__icon" /> +256
            </p>
            <p style={{ color: "#FFE4E1" }}>
              <MdOutlineMarkEmailRead className="footer__icon" />{" "}
              smartfit@gmail.com
            </p>
          </div>
        </div>
        <div style={{ textAlign: "center", marginTop: "50px", color: "#fff" }}>
          <p>All Rights Reserved @ 2022</p>
          <p>Designed with &#128147; by Isiagi </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
