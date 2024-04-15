import logo from "./logo.svg";
import "./App.css";
import Form from "./Component/Form";
import { useContext } from "react";
import ProductContext from "./Component/store/productContext";
import ProductList from "./Component/ProductList/ProductList";
import TotalNetWorth from "./Component/ProductList/TotalNetWorth";

function App() {
  return (
    <div className="App">
      <Form />
      <ProductList />
      <TotalNetWorth />
    </div>
  );
}

export default App;
