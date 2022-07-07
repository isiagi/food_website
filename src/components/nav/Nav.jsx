import { useState } from "react";

import { FaCartArrowDown } from "react-icons/fa";

import { useContext } from "react";
import { AppContext } from "../context/Context";

import "./nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  const [open, setOpen] = useState(false);

  const { cart, onIncrease, onDecrease, onRemove } = useContext(AppContext);

  const totalPrice = cart.reduce((a, b) => a + b.qty * b.para, 0);

  return (
    <div className="nav__container">
      <div className="nav__wrapper">
        <div className="nav__content">
          <div>
            <h1>
              <Link to="/">SmartFit</Link>
            </h1>
          </div>
          <div className="nav__ul">
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
            </ul>
          </div>
          <div>
            <div className="nav__abs">
              <p>
                <FaCartArrowDown
                  style={{
                    fontSize: "1.5rem",
                    color: "white",
                    cursor: "pointer",
                  }}
                  onClick={() => setOpen(!open)}
                />
                <span className="len">{cart.length}</span>
              </p>
              {open && (
                <div className="nav__modal">
                  <h1 style={{ textAlign: "center", color: "white" }}>
                    Your Cart
                  </h1>
                  {cart.map((item) => (
                    <div className="nav__modal__div">
                      <div>
                        <img src={item.img} alt="" />
                      </div>
                      <div
                        style={{
                          display: "flex",
                          flex: 1,
                          gap: "10px",
                          alignItems: "center",
                        }}
                      >
                        <p>{item.head}</p>
                        <div>
                          <span
                            style={{
                              background: "red",
                              padding: ".2rem .5rem",
                              margin: "0 10px",
                              cursor: "pointer",
                            }}
                            onClick={() => onIncrease(item)}
                          >
                            +
                          </span>
                          {item.qty}
                          <span
                            style={{
                              background: "red",
                              padding: ".2rem .5rem",
                              margin: "0 10px",
                              cursor: "pointer",
                            }}
                            onClick={() => onDecrease(item)}
                          >
                            -
                          </span>
                        </div>
                        <p>{item.para && item.para * item.qty}</p>
                        <p
                          onClick={() => onRemove(item)}
                          style={{ background: "red" }}
                        >
                          X
                        </p>
                      </div>
                    </div>
                  ))}
                  <div style={{ display: "flex", gap: "10px" }}>
                    <h2 style={{ color: "#fff" }}>Total Price: {totalPrice}</h2>
                    <button
                      style={{
                        padding: "15px 20px",
                        outline: "none",
                        fontSize: "1em",
                        border: "none",
                        background: "green",
                        color: "#fff",
                        letterSpacing: "1px",
                        borderRadius: "10px",
                      }}
                      onClick={() => setOpen(false)}
                    >
                      CheckOut
                    </button>
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
