import { useNavigate } from "react-router-dom";

export function Nav2() {
  const navigate = useNavigate();

  return (
    <nav
      className="bh5 fxc jsb p2"
      style={{ backgroundColor: "#151b24", color: "white" }}
    >
      <div className="fsl">&#9812;</div>

      <div className="fxc">
        <button
          onClick={() => navigate("/signin")}
          className="bg51"
        >
          Sign In
        </button>

        <button
          onClick={() => navigate("/signup")}
          className="bg41"
        >
          Sign Up
        </button>
      </div>
    </nav>
  );
}