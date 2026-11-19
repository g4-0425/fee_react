import { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "./index.css";
import "react-toastify/dist/ReactToastify.css";

const Home = lazy(() => import("./Home"));
const StudentsApp = lazy(() => import("./studentsApp"));

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Router>
            <ToastContainer position="top-right" autoClose={2000} />

            <Suspense fallback={<p>Loading...</p>}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<StudentsApp />} />
                    <Route path="/logout" element={<Home />} />
                </Routes>
            </Suspense>
        </Router>
    </StrictMode>
);
