import { useRef } from "react";
import { useAuthStore } from "./useAuthStore";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export function SignIn() {
  const login = useAuthStore((state) => state.login);
  const mobileRef = useRef(null);
  const passwordRef = useRef(null);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    const mobile = mobileRef.current.value.trim();
    const password = passwordRef.current.value;

    if (!mobile || !password) {
      toast.error("Please enter both mobile number and password");
      return;
    }

    const storedMobile = localStorage.getItem("mobile");
    const storedPassword = localStorage.getItem("password");
    const username = localStorage.getItem("username");

    if (
      mobile === storedMobile &&
      password === storedPassword &&
      username
    ) {
      login(username);
      toast.success("Login Successful");

      setTimeout(() => {
        navigate("/");
      }, 1000);
    } else {
      toast.error("Invalid Credentials");
    }
  }

  return (
    <div className="h95 bgr fxc">
      <div className="w15 b1 bg0 p3 sh1" style={{ color: "white" }}>
        <h2 className="mb2">Login</h2>

        <form onSubmit={handleSubmit} noValidate>
          <div className="mb2">
            <input
              type="tel"
              ref={mobileRef}
              placeholder="Mobile Number"
            />
          </div>

          <div className="mb1">
            <input
              type="password"
              ref={passwordRef}
              placeholder="Password"
            />
          </div>

          <button className="btn2 fss bg50 mt1" type="submit">
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