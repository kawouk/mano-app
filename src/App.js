import React from "react";

//react-router-dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//protected routes
import ProtectedRoutes from "./ProtectedRoutes";

//import HOCs
import Layout from "./HOC/Layout";

//comps
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";

//bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// //import styles
import "./assets/css/styles.css";

function App() {
  const HomeComponent = Layout(HomePage);
  const ProductComponent = Layout(ProductsPage);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/home" element={<HomeComponent />} />
          <Route path="/product" element={<ProductComponent />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
