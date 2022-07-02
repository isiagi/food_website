import Card from "../card/Card";

import { boots } from "../../util/data/sneaker";

const Popular = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ width: "100%", maxWidth: "1024px" }}>
        <h2 style={{ margin: "1rem 0" }}>Boots</h2>
        <div className="card">
          {boots.map(({ id, head, para, img }) => (
            <Card id={id} price={para} name={head} img={img} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Popular;
