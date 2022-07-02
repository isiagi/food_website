import HomePage from "./pages";
import "./App.css";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Nav />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
