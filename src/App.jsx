import {Routes,Route} from "react-router-dom"

import Navbar from "./components/Navbar/Navbar"
import Product from "./pages/product/Product"
import Products from "./pages/products/Products"

function App() {
  return (
    <main className="App">
      <Navbar/>
      <Routes>
        <Route
          path = "/"
          element = {
            <Products/>
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
