import { useState, useEffect } from "react";
import { BsTrash3 } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";

export function StoreApp() {

    const [id, setId] = useState("");
    const [category, setCategory] = useState("");
    const [brand, setBrand] = useState("");
    const [price, setPrice] = useState("");
    const [products, setProducts] = useState([]);

    useEffect(() => {
        let data = localStorage.getItem("products");

        if (data) {
            setProducts(JSON.parse(data));
        }
    }, []);

    const plist = products.map((p) => (
        <li key={p.id} className="fx mb1">

            <button
                onClick={() => handleDelete(p.id)}
                className="btn1 fyc bg30"
            >
                <BsTrash3 />
            </button>

            {p.id} {p.category} {p.brand} {p.price}/-

        </li>
    ));

    const handleAdd = (e) => {

        e.preventDefault();

        const newProduct = {
            id: id,
            category: category.trim(),
            brand: brand.trim(),
            price: price
        };

        const updateProducts = [...products, newProduct];

        setProducts(updateProducts);

        localStorage.setItem(
            "products",
            JSON.stringify(updateProducts)
        );

        setId("");
        setCategory("");
        setBrand("");
        setPrice("");
    };

    const handleDelete = (del_id) => {

        const updateProducts = products.filter(
            (product) => product.id != del_id
        );

        setProducts(updateProducts);

        localStorage.setItem(
            "products",
            JSON.stringify(updateProducts)
        );
    };

    return (
        <section className="hf bg20 p3">

            <section className="w25 b1 p1">

                <h3>Add Product</h3>

                <form onSubmit={handleAdd} className="fy w15">

                    <input
                        type="text"
                        placeholder="ID"
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                        required
                    />

                    <input
                        type="text"
                        placeholder="Category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        required
                    />

                    <input
                        type="text"
                        placeholder="Brand"
                        value={brand}
                        onChange={(e) => setBrand(e.target.value)}
                        required
                    />

                    <input
                        type="text"
                        placeholder="Price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required
                    />

                    <button
                        type="submit"
                        className="btn2 bg40 mt1"
                    >
                        Add
                    </button>

                </form>

            </section>

            <br />

            <section className="w25 b1 p1">

                <h3>List of Products ({products.length})</h3>

                <br />

                <ul
                    style={{
                        padding: "0",
                        listStyleType: "none"
                    }}
                >
                    {plist}
                </ul>

            </section>

        </section>
    );
}