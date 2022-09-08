import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Route } from "react-router-dom"; // Browser router implementation that uses the HTML5 history API
import Home from "./components/Home";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";   //Route provides UI when its path matches the current URL.
function App() {
  return (
    <BrowserRouter> 
      <Header />
      <div className="App">
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/checkout">
          <Checkout />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
