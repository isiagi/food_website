import Card from "../card/Card";
import "./popular.css";

import { sneaker } from "../../util/data/sneaker";

const Popular = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ width: "100%", maxWidth: "1024px" }}>
        <h2 style={{ margin: "1rem 0" }}>Sneakers</h2>
        <div className="card">
          {sneaker.map(({ id, head, para, img, qty }) => (
            <Card id={id} price={para} name={head} img={img} qty={qty} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Popular;
