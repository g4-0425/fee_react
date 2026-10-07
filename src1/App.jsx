import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Product } from "./pages/Product";
import { Layout } from "./components/Layout";
import { Product1 } from "./pages/Product1";
import { Product2 } from "./pages/Product2";
import { Product3 } from "./pages/Product3";
import { P404 } from "./pages/P404";
import { ProtectedRoutes } from "./utils/ProtectedRoutes";
// import { Login } from "./pages/Login";

export function App(){
    return (
        <div>
            <BrowserRouter>
                <Layout />
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>

                  <Route element={<ProtectedRoutes/>}>
                  <Route path="/products" element={<Product/>}>  {/*nested route */}
                        <Route path="product1" element={<Product1/>}/>
                        <Route path="product2" element={<Product2/>}/>
                        <Route path="product3" element={<Product3/>}/>
                    </Route>
                    </Route>

                    <Route path="/login" element={<h2>Login</h2>}/>
                    <Route path="*" element={<P404/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}