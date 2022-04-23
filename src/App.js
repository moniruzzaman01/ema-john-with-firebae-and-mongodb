import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Shop from "./components/shop/Shop";
import SignIn from "./components/signin/SignIn";
import Orders from "./orders/Orders";
import ProductDetails from "./product details/ProductDetails";
import RequireAuth from "./require-auth/RequireAuth";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/shop/:id" element={<ProductDetails />}></Route>
        <Route
          path="/orders"
          element={
            <RequireAuth>
              <Orders />
            </RequireAuth>
          }
        ></Route>
        <Route path="/signup" element={<SignIn />}></Route>
      </Routes>
    </div>
  );
}

export default App;
