import React, { useEffect, useState } from "react";

export function ShowList2() {
    const [num, setNum] = useState(0);
    const [str, setStr] = useState("");
    const [bool, setBool] = useState(false);
    const [arr, setArr] = useState([]);
    const [brand, setBrand] = useState("All");
    const [products, setProducts] = useState([]);

    useEffect(() => {}, []);

    useEffect(() => {
        const data = localStorage.getItem("products");

        if (data) {
            setProducts(JSON.parse(data));
        }
    }, []);

    const filterProducts =
        brand === "All"
            ? products
            : products.filter((product) => product.brand === brand);

    return (
        <section className="fyc">
            <div className="b1" style={{ padding: "1rem" }}>

                <h3>Product List</h3>

                <label>Select Brand: </label>

                <select
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                >
                    <option value="All">All</option>
                    <option value="Levis">Levis</option>
                    <option value="Wrangler">Wrangler</option>
                    <option value="Pepe">Pepe</option>
                    <option value="Zara">Zara</option>
                    <option value="Tommy Hilfiger">Tommy Hilfiger</option>
                </select>

                {/* Header */}
                <div
                    className="bg1"
                    style={{
                        marginTop: "0.5rem",
                        padding: "0.5rem",
                        display: "grid",
                        gridTemplateColumns:
                            brand === "All"
                                ? "1fr 1.5fr 1fr"
                                : "1fr 1fr",
                        gap: "1rem"
                    }}
                >
                    <span>Item Code</span>

                    {brand === "All" && <span>Brand</span>}

                    <span>Price</span>
                </div>

                {/* Products */}
                {filterProducts.map((product) => (
                    <div
                        key={product.id}
                        className="bg1"
                        style={{
                            padding: "0.5rem",
                            marginTop: "0.2rem",
                            display: "grid",
                            gridTemplateColumns:
                                brand === "All"
                                    ? "1fr 1.5fr 1fr"
                                    : "1fr 1fr",
                            gap: "1rem"
                        }}
                    >
                        <span>{product.id}</span>

                        {brand === "All" && (
                            <span>{product.brand}</span>
                        )}

                        <span>₹{product.price}</span>
                    </div>
                ))}

            </div>
        </section>
    );
}