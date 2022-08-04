import { useState, useContext } from "react";
import { AppContext } from "../context/Context";
import { Link } from "react-router-dom";
import Cart from "./Cart";

import { FaCartArrowDown } from "react-icons/fa";
import { MdTableRows } from "react-icons/md";
import { GiCancel } from "react-icons/gi";

import "./nav.css";

const Nav = () => {
  const [open, setOpen] = useState(false);
  const [side, setSide] = useState(false);

  const { cart } = useContext(AppContext);

  return (
    <div className="nav__container">
      <div className="nav__wrapper">
        <div className="nav__content">
          {side ? (
            <div className="iconContainer" onClick={() => setSide(false)}>
              <GiCancel className="toggleIcon" />
            </div>
          ) : (
            <div className="iconContainer" onClick={() => setSide(true)}>
              <MdTableRows className="toggleIcon" />
            </div>
          )}
          <div>
            <h1>
              <Link to="/">SmartFit</Link>
            </h1>
          </div>
          <div className={`${"nav__ul"} ${side ? "active" : ""}`}>
            <ul>
              <li>
                <Link to="/info/sneakers">Sneakers</Link>
              </li>
              <li>
                <Link to="/info/shoes">Shoes</Link>
              </li>
              <li>
                <Link to="/info/dresses">Dresses</Link>
              </li>
              <li>
                <Link to="/info/dresses">Bags</Link>
              </li>
              <li>
                <Link to="/info/dresses">Accessories</Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="nav__abs" onClick={() => setOpen(!open)}>
              <p>
                <FaCartArrowDown
                  style={{
                    fontSize: "1.5rem",
                    // color: "white",
                    cursor: "pointer",
                    color: "#fff"
                  }}
                  onClick={() => setOpen(!open)}
                />
                <span className="len">{cart.length}</span>
              </p>
            </div>
            {open && <Cart setOpen={setOpen} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
