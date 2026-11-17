
import imgUrl from "./images/student.png";
import { useNavigate } from "react-router-dom";

export function Home() {
    const navigate = useNavigate();

    return (
        <div className="home">
            <h1>Welcome to Student Management App</h1>

            <img
                src={imgUrl}
                alt="Student Management App"
                style={{
                    width: "100%",
                    maxWidth: "600px",
                    height: "auto",
                    borderRadius: "12px"
                }}
            />

            <p>Manage your student records easily.</p>

            <button onClick={() => navigate("/login")}>
                Login
            </button>
        </div>
    );
}

