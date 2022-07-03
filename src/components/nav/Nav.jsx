import { useState } from "react";
import { FaCartArrowDown } from "react-icons/fa";
import img1 from "../../components/assets/images/shoe.jpeg";

import { useContext } from "react";
import { AppContext } from "../context/Context";

import "./nav.css";

const Nav = () => {
  const [open, setOpen] = useState(false);

  const { cart } = useContext(AppContext);

  return (
    <div className="nav__container">
      <div className="nav__wrapper">
        <div className="nav__content">
          <div>
            <h1>SmartShoes</h1>
          </div>
          <div>
            <div className="nav__abs">
              <p>
                <FaCartArrowDown
                  style={{ fontSize: "1.5rem", color: "white" }}
                  onClick={() => setOpen(!open)}
                />
                {cart.length}
              </p>
              {open && (
                <div className="nav__modal">
                  <div>
                    <img src={img1} alt="" />
                  </div>
                  <div style={{ display: "flex" }}>
                    <p>Air Force</p>
                    <p>50000</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
