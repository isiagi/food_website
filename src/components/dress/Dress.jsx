import React from 'react'
import Card from "../card/Card";

import { dresses } from "../../util/data/sneaker";

const Dress = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ width: "100%", maxWidth: "1024px" }}>
        <h2 style={{ margin: "1rem 0" }}>Dresses</h2>
        <div className="card">
          {dresses.map(({ id, head, para, img, qty }) => (
            <Card id={id} price={para} name={head} img={img} qty={qty} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Dress