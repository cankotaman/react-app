import { useState } from "react";
import "./App.css";
import Products from "./components/Products/products";
import Counter from "./components/Counter";

const App = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div className="App">
      <Products />
      <Counter counter={counter} setCounter={setCounter} productPrice={counter}>
        [counter]
      </Counter>
    </div>
  );
};

export default App;
