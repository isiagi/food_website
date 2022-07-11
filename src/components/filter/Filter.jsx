import Card from "../card/Card";

import "./filter.css";

import { dresses, boots } from "../../util/data/sneaker";
import { useLocation } from "react-router-dom";

const Filter = () => {
  const location = useLocation();
  let path = location.pathname.split("/");
  let sele = path[path.length - 1];
  return (
    <div className="card">
      {sele === "men" &&
        boots.map(({ id, head, para, img, qty }) => (
          <Card id={id} price={para} name={head} img={img} qty={qty} />
        ))}
      {sele === "ladies" &&
        dresses.map(({ id, head, para, img, qty }) => (
          <Card id={id} price={para} name={head} img={img} qty={qty} />
        ))}
    </div>
  );
};

export default Filter;
