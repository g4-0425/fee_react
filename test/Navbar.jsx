import { useAuthStore } from "./useAuthStore";
import { Nav1 } from "./Nav1";
import { Nav2 } from "./Nav2";

export function NavBar() {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

  return (
    <div
      style={{
        backgroundColor: "#151b24",
        color: "white",
        borderBottom: "1px solid silver",
      }}
    >
      {isLoggedIn ? <Nav1 /> : <Nav2 />}
    </div>
  );
}