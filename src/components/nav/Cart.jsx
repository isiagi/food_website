import { useContext } from "react";
import { AppContext } from "../context/Context";
import "./nav.css";

const Cart = ({ setOpen }) => {
  const { cart, onIncrease, onDecrease, onRemove, onClear } =
    useContext(AppContext);

  const totalPrice = cart.reduce((a, b) => a + b.qty * b.para, 0);

  return (
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
            color: "#fff",
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
          <div style={{ width: "100%" }}>
            <p
              style={{
                marginLeft: "10px",
                marginTop: "-5px",
                marginBottom: "3px",
              }}
            >
              {item.head}
            </p>

            <div
              style={{
                display: "flex",
                flex: 1,
                gap: "5px",
                justifyContent: "space-between"
              }}
            >
              <div style={{ width: "80px" }}>
                <span
                  style={{
                    background: "#FFE4E1",
                    padding: ".2rem .5rem",
                    margin: "0 10px",
                    cursor: "pointer",
                    color: "#005B99",
                  }}
                  onClick={() => onIncrease(item)}
                >
                  +
                </span>
                {item.qty}
                <span
                  style={{
                    background: "#FFE4E1",
                    padding: ".2rem .5rem",
                    // margin: "0 10px",
                    marginLeft: "10px",
                    cursor: "pointer",
                    color: "#005B99",
                  }}
                  onClick={() => onDecrease(item)}
                >
                  -
                </span>
              </div>
              <p style={{}}>
                {item.para && item.para * item.qty}
              </p>
              <p
                onClick={() => onRemove(item)}
                style={{
                  background: "#005B99",
                  padding: "2px 10px",
                  borderRadius: "5px",
                  // marginLeft: "10px",
                  cursor: "pointer",
                }}
              >
                X
              </p>
            </div>
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
      <div>
        <p style={{ cursor: "pointer" }} onClick={() => onClear()}>
          Clear Cart
        </p>
      </div>
    </div>
  );
};

export default Cart;
