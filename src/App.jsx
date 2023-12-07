import {Routes,Route} from "react-router-dom"

import Navbar from "./components/Navbar/Navbar"
import ProductList from "./components/ProductList/ProductList"
import Product from "./components/Product/Product"

function App() {
  return (
    <main className="App">
      <Navbar/>
      <Routes>
        <Route
          path = "/"
          element = {
            <ProductList/>
          }
        />
        <Route
          path = "/product/:pid"
          element = {
            <Product/>
          }
        />
      </Routes>
    </main>
  );
}

export default App;
