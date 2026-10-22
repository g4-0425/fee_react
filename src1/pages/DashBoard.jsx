import { useAuthStore } from "../stores/useAuthStore";
import { IoMdLogOut } from "react-icons/io"; 
import { Link } from "react-router-dom"; 

export function DashBoard(){
    const logout = useAuthStore(state =>state.logout);

    return(
        <div className="hf bgr">
            <div className="bh5 fxc jsb p2">
                <h2> </h2>
                <div className="fxc">
                    <Link to="#">Home</Link> 
                    <Link to="#">About</Link> 
                    <Link to="#">Products</Link> 
                    <Link to="#">Admin</Link> 
                </div>
                <button className="btn4 fsm fyc bg70" onClick={logout}> <IoMdLogOut/></button>
            </div>
            <br/>
        </div>
    );
}