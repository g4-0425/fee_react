import React, { useEffect, useState } from "react";

function ShowList(props) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        let data = localStorage.getItem("products");

        if (data) {
            data = JSON.parse(data);

            if (props.brand) {
                setProducts(
                    data.filter((item) => item.brand === props.brand)
                );
            } else {
                setProducts(data);
            }
        }
    }, []);

    return (
        <section className="fyc">

            {/* Heading */}
            <div className="b1" style={{ padding: "1rem" }}>
                <span style={{ width: "3rem" }}>ID</span>
                <span style={{ width: "10rem" }}>Brand</span>
                <span style={{ width: "7rem" }}>Price(Rs.)</span>
            </div>

            {/* Products */}
            {products.map((item) => (
                <div className="b1" key={item.id}>
                    <span style={{ width: "3rem" }}>
                        {item.id}
                    </span>

                    <span style={{ width: "10rem" }}>
                        {item.brand}
                    </span>

                    <span style={{ width: "7rem" }}>
                        {item.price}
                    </span>
                </div>
            ))}

        </section>
    );
}

export default ShowList;