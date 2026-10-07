import { useNavigate } from "react-router-dom";

export function PageNotFound(){
    const navigate = useNavigate();
    function handleClick(){
        navigate("/");
    }
    return (
        <div className="fyc">
            <div className="card2 bg3 fyc">
                <h2>404 : Page Not Found</h2>
                <button className="btn2" onClick={handleClick}>
                    Home
                </button>
            </div>
        </div>
    )
}