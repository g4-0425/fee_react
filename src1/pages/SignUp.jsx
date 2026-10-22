
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export function SignUp() {
    const usernameRef = useRef(null);
    const mobileRef = useRef(null);
    const passwordRef1 = useRef(null);
    const passwordRef2 = useRef(null);

    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const username = usernameRef.current.value.trim();
        const mobile = mobileRef.current.value.trim();
        const password1 = passwordRef1.current.value;
        const password2 = passwordRef2.current.value;

        if (!username || !mobile || !password1 || !password2) {
            setMessage("All fields are required.");
            return;
        }

        if (password1 !== password2) {
            setMessage("Password mismatch");
            passwordRef2.current.focus();
            return;
        }

        if (password1.length < 4) {
            setMessage("Password too short");
            passwordRef1.current.focus();
            return;
        }

        localStorage.setItem("username", username);
        localStorage.setItem("mobile", mobile);
        localStorage.setItem("password", password1);

        console.log("Submitted Data:", { username, mobile });

        e.target.reset();
        setMessage("");
        navigate("/signin");
    };

    return (
        <div className="hf bgr fyc">
            <form
                onSubmit={handleSubmit}
                className="w15 b1 p3 fy sh1"
                style={{ borderRadius: "5px" }}
                noValidate
            >
                <h2 style={{ textAlign: "center" }}>SignUp</h2>

                <div className="mt1">
                    <input
                        id="username"
                        type="text"
                        ref={usernameRef}
                        placeholder="Enter Username"
                        required
                    />
                </div>

                <div>
                    <input
                        id="mobile"
                        type="tel"
                        ref={mobileRef}
                        placeholder="Enter Mobile Number"
                        required
                    />
                </div>

                <div >
                    <input
                        id="password"
                        type="password"
                        ref={passwordRef1}
                        placeholder="Enter Password"
                        maxLength={8}
                        required
                    />
                </div>

                <div >
                    <input
                        id="confirmPassword"
                        type="password"
                        ref={passwordRef2}
                        placeholder="Confirm Password"
                        maxLength={8}
                        required
                    />
                </div>
                <div className="btn1" style={{color:"orange"}}> {message}</div>

                <button type="submit" className="btn2 bg50 fss">Register</button>
            </form>
        </div>
    );
}
