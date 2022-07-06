import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Detail from "../components/detail/FoodDetail";
import Nav from "../components/nav/Nav";
import Footer from "../components/footer/Footer";
import { Context } from "../components/context/Context";
import Cat from "../components/cat/Cat";

function Index() {
  return (
    <div>
      <Router>
        <Context>
          <Nav />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/:id" element={<Detail />} />
            <Route path="/info/:info" element={<Cat />} />
          </Routes>
          <Footer />
        </Context>
      </Router>
    </div>
  );
}

export default Index;
