import React, { useState, useEffect } from "react";
import { BiSun } from "react-icons/bi";
export function Header() {
    const [dark, setDark] = useState(false);

    useEffect(() => {
        if(dark) {
            document.body.style.backgroundColor = "hsl(215,100%,50%)";
            document.body.style.color = "#f1f1f1";
        }
        else{
            document.body.style.backgroundColor = "black";
            document.body.style.color = "skyblue";
        }
    }, [dark]);
    function handleClick(){
        setDark(!dark);
    }
    return (
        <div 
        className ="fx"
        style={{
            height: "4rem",
            justifyContent: "space-between",
            alignItems: "center",
            position : "sticky",
            top: "0px",
            backdropFilter: "blur(10px)",
            borderBottom: "1px solid silver",
        }}
        >
            <div className ="fx" style={{fontSize:"2rem", color:"gold"}}>
                &#9812;
            </div>
            <div className="fx">
                <input
                className="fs1"
                style={{borderRadius: "15px"}}
                type="text"
                placeholder="search"
                />
            </div>
            <div className="fx">
                <a href="#">Link1</a>
                <a href="#">Link2</a>
                <a href="#">Link3</a>
            </div>
            <div className="fx">
                <button
                       className="theme-btn "
                    onClick={handleClick}
                   style={{
        background: "transparent",
        color: "gold",
        border: "none",
        outline: "none",
        boxShadow: "none",
        padding: "0",
        margin: "0",
        borderRadius: "0",
    }}
                    >
                        <BiSun/>
                    </button>
            </div>
        </div>
    );
}