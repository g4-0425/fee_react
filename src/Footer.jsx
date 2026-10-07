import React, { useState } from "react";
import { BiMenu } from "react-icons/bi";

export function Footer() {
  const [stamp] = useState(() => {
    const savedStamp = localStorage.getItem("stamp");
    return savedStamp ? JSON.parse(savedStamp) : {};
  });

  return (
    <div
      className="fx fs2 p2"
      style={{
        height: "4rem",
        justifyContent: "space-between",
        alignItems: "center",
        position: "fixed",
        width: "100%",
        bottom: "0",
        left: "0",
        backdropFilter: "blur(10px)",
        borderTop: "1px solid silver",
        boxSizing: "border-box",
        zIndex: "1000",
      }}
    >
      <button className="btn1 fs3 fyc">
        <BiMenu />
      </button>

      <div>
        {stamp.section || "G4"}_
        {stamp.roll_number || "2510990425"}_
        {stamp.name || "Sumedha Sharma"}
      </div>

      <button className="btn1 fs3 fyc">
        <BiMenu />
      </button>
    </div>
  );
}