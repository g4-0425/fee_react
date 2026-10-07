import React, { useState} from "react";

export function Stamp() {
    const [msg,setMsg] = useState("");

    const stamp = {section:"G4",roll_number:"2510990425",name:"Sumedha Sharma"};
    
    function handleClick() {
        localStorage.setItem(
            "stamp",
            JSON.stringify(stamp)
        );
        setMsg("Updated");
    }

    return (
        <div className="box2 mt2">
            <h3>We have got data of stamp</h3>
            <br />
            {msg === "" && <button onClick={handleClick}>Click here</button>}
            {msg === "Updated" && <p className="bg1 p1">Stamp updated successfully!</p>}
        </div>
    );
}

export default Stamp;