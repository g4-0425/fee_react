import React, { useState } from "react";

function Store() {
  const [msg, setMsg] = useState("");

  const products = [
    { id: 1, category: "Jeans", brand: "Levis", price: 2000 },
    { id: 2, category: "Jeans", brand: "Levis", price: 2500 },
    { id: 3, category: "Jeans", brand: "Pepe", price: 5000 },
    { id: 4, category: "Jeans", brand: "Zara", price: 6500 },
    { id: 5, category: "Jeans", brand: "Tommy Hilfiger", price: 10000 },
  ];

  function handleClick() {
    localStorage.setItem("products", JSON.stringify(products));
    setMsg("updated");
  }

  return (
    <div className="box1">
      <h3>We have got data of products</h3>

      <br />

      {msg === "" && (
        <button onClick={handleClick}>
          Update Inventory
        </button>
      )}

      {msg === "updated" && (
        <p className="bg1 p1">
          Inventory updated successfully!
        </p>
      )}
    </div>
  );
}

export default Store;