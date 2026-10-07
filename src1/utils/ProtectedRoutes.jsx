import {Navigate,Outlet} from "react-router-dom";
export function ProtectedRoutes(){
    const login = false ;
    return login ? <Outlet/> : <Navigate to="/login"/>;
}