
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { NavBar } from "./Navbar";
import { SignIn } from "./SignIn";
import { SignUp } from "./SignUp";
import { Products } from "./Products";

export  function App() {
  return (
    <BrowserRouter>
      <div
        style={{
          minHeight: "100vh",
          backgroundColor: "#151b24",
          color: "#fff",
        }}
      >
        <NavBar />

        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <div
                style={{
                  width: "100%",
                  height: "calc(100vh - 5rem)",
                  position: "relative",
                  backgroundImage:
                    "url('/3d-car-h706rbre4lzn83ot.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  color: "white",
                }}
              >
                {/* Welcome section */}
                <div
                  style={{
                    position: "absolute",
                    top: "8%",
                    right: "5%",
                    width: "min(430px, 45%)",
                    textAlign: "right",
                    textShadow: "0 2px 10px rgba(0,0,0,0.8)",
                  }}
                >
                  <p
                    style={{
                      color: "#ff3333",
                      letterSpacing: "3px",
                      fontSize: "13px",
                      fontWeight: "bold",
                    }}
                  >
                    WELCOME TO THE WORLD OF PERFORMANCE
                  </p>

                  <h1
                    style={{
                      fontSize: "clamp(2rem, 4vw, 4rem)",
                      lineHeight: "1.1",
                      margin: "20px 0",
                      fontWeight: "800",
                    }}
                  >
                    DRIVE YOUR DREAM.
                  </h1>

                  <p
                    style={{
                      color: "#eeeeee",
                      fontSize: "16px",
                      lineHeight: "1.7",
                      marginBottom: "25px",
                    }}
                  >
                    Discover power, precision, and the thrill
                    of every journey. Find the car that matches
                    your style.
                  </p>

                  <Link
                    to="/products"
                    style={{
                      display: "inline-block",
                      backgroundColor: "#e51d2a",
                      color: "white",
                      padding: "14px 25px",
                      textDecoration: "none",
                      fontWeight: "bold",
                      letterSpacing: "1px",
                      border: "1px solid #e51d2a",
                      textShadow: "none",
                    }}
                  >
                    EXPLORE CARS ↗
                  </Link>
                </div>

                {/* Bottom text */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "25px",
                    left: "30px",
                    fontSize: "12px",
                    letterSpacing: "3px",
                    color: "white",
                    textShadow: "0 2px 8px black",
                  }}
                >
                  PERFORMANCE. PRECISION. PASSION.
                </div>
              </div>
            }
          />

          {/* About Page */}
          <Route
            path="/about"
            element={
              <div style={{ padding: "2rem" }}>
                <h2>About Us</h2>
                <p>Discover our passion for exceptional cars.</p>
              </div>
            }
          />

          {/* Authentication Pages */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />

          {/* Products Page */}
          <Route path="/products" element={<Products />}>
            <Route
              index
              element={<h3 style={{ padding: "2rem" }}>Product 1</h3>}
            />
            <Route
              path="product2"
              element={<h3 style={{ padding: "2rem" }}>Product 2</h3>}
            />
            <Route
              path="product3"
              element={<h3 style={{ padding: "2rem" }}>Product 3</h3>}
            />
          </Route>

          {/* Page Not Found */}
          <Route
            path="*"
            element={
              <div style={{ padding: "2rem" }}>
                <h2>404 - Page Not Found</h2>
                <Link to="/">Return Home</Link>
              </div>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
