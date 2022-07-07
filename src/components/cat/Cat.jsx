import { useParams } from "react-router-dom";
import Card from "../card/Card";

import { dresses } from "../../util/data/sneaker";
import { sneaker } from "../../util/data/sneaker";

import "./cat.css";

const Cat = () => {
  const { info } = useParams();

  console.log(info);
  return (
    <div
      style={{ display: "flex", justifyContent: "center", minHeight: "100vh" }}
    >
      <div style={{ width: "100%", maxWidth: "1024px" }}>
        <div style={{ marginTop: "12vh" }}>
          <p style={{ padding: "15px 0", color: "green", fontSize: "17px" }}>Category/{info}</p>
          <h1 style={{ marginBottom: "20px",color: "rgb(220, 114, 114)" }}>{info}</h1>

          <div className="card">
            {info === "dresses"
              ? dresses.map(({ id, head, para, img, qty }) => (
                  <Card id={id} price={para} name={head} img={img} qty={qty} />
                ))
              : info === "shoes"
              ? sneaker.map(({ id, head, para, img, qty }) => (
                  <Card id={id} price={para} name={head} img={img} qty={qty} />
                ))
              : info === "sneakers"
              ? sneaker.map(({ id, head, para, img, qty }) => (
                  <Card id={id} price={para} name={head} img={img} qty={qty} />
                ))
              : sneaker.map(({ id, head, para, img, qty }) => (
                  <Card id={id} price={para} name={head} img={img} qty={qty} />
                ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cat;
