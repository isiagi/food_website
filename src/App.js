import HomePage from "./pages";
import "./App.css";
import Break from "./pages/break/Break";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Nav />
      <HomePage />
      <Break />
      <Footer />
    </div>
  );
}

export default App;
