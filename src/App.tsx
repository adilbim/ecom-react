import AppLayout from "./features/layout/AppLayout";
import { Navigate, Route, Routes } from "react-router-dom";
import ProductList from "./features/products/ProductsList";
import Cart  from "./pages/Cart";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Navigate to="/products" />} />
          <Route path="products" element={<ProductList />} />
          <Route path="cart" element={<Cart />} />
          <Route path="*" element={<p>no match!</p>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
