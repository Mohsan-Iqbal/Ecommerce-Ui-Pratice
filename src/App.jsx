import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { ProtectedRoute } from "./components/Routes";
import Products from "./components/Products";
import Product from "./components/Product";
import ProductDetail from "./pages/Product";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/products"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="/product-cart" element={<Cart />} />
        <Route path="/product-cart" element={<Cart />} />
        <Route path="/product-detail/:id" element={<ProductDetail />} />
        <Route path="/product/:categoryId" element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
