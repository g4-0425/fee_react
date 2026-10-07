import { BrowserRouter,Route,Routes } from "react-router";
import Navbar from "./Navbar";
import Contact from "./Contact";
import Home from "./Home";
import About from "./About";
import Products from "./Products";
function RoutingApp(){
    return (
        <BrowserRouter>
        <Navbar/>
        <h1> App Component </h1>
        <Routes>
            <Route path="/" element={<Home />}/>
                <Route path="/about" element={<About />}/>
                    <Route path="/products" element={<Products />}/>
                        <Route path="/contact" element={<Contact />}/>
            </Routes>
        </BrowserRouter>
    )
}
export default RoutingApp ;