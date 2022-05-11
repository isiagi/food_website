import Card from "../card/Card";
import "./popular.css";

const Popular = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ width: "100%", maxWidth: "1024px" }}>
        <h2 style={{ margin: "1rem 0" }}>Popular</h2>
        <Card />
      </div>
    </div>
  );
};

export default Popular;
