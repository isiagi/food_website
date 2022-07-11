import { useState } from "react";

import { FaCartArrowDown } from "react-icons/fa";

import { useContext } from "react";
import { AppContext } from "../context/Context";
import { MdTableRows } from "react-icons/md";
import { GiCancel } from "react-icons/gi";

import "./nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  const [open, setOpen] = useState(false);
  const [side, setSide] = useState(false);

  const { cart, onIncrease, onDecrease, onRemove } = useContext(AppContext);

  const totalPrice = cart.reduce((a, b) => a + b.qty * b.para, 0);

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
            </div>
            {open && (
              <div className="nav__modal">
                <div style={{ position: "relative" }}>
                  <h1
                    style={{
                      textAlign: "center",
                      color: "white",
                      marginTop: "20px",
                    }}
                  >
                    Your Cart
                  </h1>
                  <h1
                    style={{
                      position: "absolute",
                      top: "0",
                      right: "0",
                      color: "red",
                      fontSize: "20px",
                      fontWeight: "bold",
                      cursor: "pointer",
                    }}
                    onClick={() => setOpen(false)}
                  >
                    X
                  </h1>
                </div>
                {cart.map((item) => (
                  <div className="nav__modal__div">
                    <div>
                      <img src={item.img} alt="" />
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flex: 1,
                        gap: "5px",
                        alignItems: "center",
                      }}
                    >
                      <p style={{ width: "60px" }}>{item.head}</p>
                      <div style={{ width: "80px" }}>
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
                      <p style={{ width: "50px", marginLeft: "10px" }}>
                        {item.para && item.para * item.qty}
                      </p>
                      <p
                        onClick={() => onRemove(item)}
                        style={{
                          background: "green",
                          padding: "5px",
                          borderRadius: "5px",
                          marginLeft: "10px",
                          cursor: "pointer",
                        }}
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
  );
};

export default Nav;
