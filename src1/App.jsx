import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Products } from "./pages/Products";
import { ProductList } from "./pages/ProductList";
import { StoreApp } from "./StoreApp";

export function App() {
    return (
        <div>
            <BrowserRouter>
                <Layout />

                <Routes>

                    <Route path="/" element={<Home />} />

                    <Route path="/about" element={<About />} />

                    <Route path="/products" element={<Products />}>
                        <Route index element={<p>Products</p>} />

                        <Route
                            path=":category"
                            element={<ProductList />}
                        />
                    </Route>

                    <Route path="/inventory" element={<StoreApp />} />

                    <Route path="/login" element={<h2>Login</h2>} />

                    <Route path="*" element={<StoreApp />} />

                </Routes>
            </BrowserRouter>
        </div>
    );
}