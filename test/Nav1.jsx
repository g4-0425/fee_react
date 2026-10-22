import { IoMdLogOut } from "react-icons/io";
import { useAuthStore } from "./useAuthStore";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export function Nav1() {
  const user = useAuthStore((state) => state.userName);
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();

  function handleClick() {
    logout();
    toast.success("Logged Out Successfully");

    setTimeout(() => {
      navigate("/");
    }, 1000);
  }

  return (
    <nav
      style={{
        height: "5rem",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "1fr 2fr 1fr",
        alignItems: "center",
        padding: "0 2rem",
        backgroundColor: "#151b24",
        color: "white",
      }}
    >
      <div className="fs1">&#9812;</div>

      <div className="nav-links">
        <NavLink to="/about">About</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/about">Contact Us</NavLink>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          gap: "1rem",
          whiteSpace: "nowrap",
        }}
      >
        <span>{user}</span>

        <button
          onClick={handleClick}
          className="btn4 bg70"
          title="Logout"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexShrink: 0,
          }}
        >
          <IoMdLogOut size={20} />
        </button>
      </div>
    </nav>
  );
}