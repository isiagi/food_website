import { useEffect } from "react";
import HomePage from "./pages";
import "./App.css";

const loader = document.querySelector(".preloader");

const showLoader = () => loader.classList.remove("preloader");
const addClass = () => loader.classList.add("loader-hide");

function App() {
  useEffect(() => {
    showLoader();
    addClass();
  }, []);

  return (
    <div className="App">
      <HomePage />
    </div>
  );
}

export default App;
