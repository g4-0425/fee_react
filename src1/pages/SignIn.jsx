
import { useRef, useState } from "react";
import { useAuthStore } from "../stores/useAuthStore";
import { Link, useNavigate } from "react-router-dom";

export function SignIn() {
    const login = useAuthStore((state) => state.login);
    const [userName, setUserName] = useState("Guest");
    const navigate = useNavigate();

    const mobileRef = useRef(null);
    const passwordRef = useRef(null);

    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = (submit) => {
        submit.preventDefault();

        const mobile = mobileRef.current.value;
        const password = passwordRef.current.value;

        const storedMobile = localStorage.getItem("mobile");
        const storedPassword = localStorage.getItem("password");

        if (mobile === storedMobile && password === storedPassword) {
            setErrorMessage("");
            setUserName("Guest");
            login();
            navigate("/dashboard");
        } else {
            setErrorMessage("Invalid credentials");
        }
    };

    return (
        <div className="hf bgr fxc">
            <div className="w15 b1 bg0 p3 sh1">
                <h2 className="mb2">Login</h2>

                <form onSubmit={handleSubmit} noValidate>
                    <div className="mb2">
                        <input
                            type="tel"
                            ref={mobileRef}
                            placeholder="Mobile Number"
                            required
                        />
                    </div>

                    <div className="mb1">
                        <input
                            type="password"
                            ref={passwordRef}
                            placeholder="Password"
                            required
                        />
                    </div>

                    <p
                        className="bh1"
                        style={{ color: "orange", margin: "0 0 10px 0" }}
                    >
                        {errorMessage}
                    </p>

                    <button className="btn2 fss bg50" type="submit">
                        Sign In
                    </button>
                </form>

                <p style={{ fontSize: "10px" }}>
                    Don't have an account? <Link to="/signup">Sign Up</Link>
                </p>
            </div>
        </div>
    );
}
