import { useState, useEffect } from "react";
import { BsTrash3 } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";

export function StoreApp() {

    const [id, setId] = useState("");
    const [category, setCategory] = useState("");
    const [brand, setBrand] = useState("");
    const [price, setPrice] = useState("");

    const [products, setProducts] = useState([]);

    const [editId, setEditId] = useState(null);


    useEffect(() => {

        let data = localStorage.getItem("products");

        if (data) {
            setProducts(JSON.parse(data));
        }

    }, []);


    const handleAdd = (e) => {

        e.preventDefault();

        const newProduct = {
            id: id,
            category: category.trim(),
            brand: brand.trim(),
            price: price
        };

     const updateProducts = [...products, newProduct];

updateProducts.sort((a, b) => a.id - b.id);

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


    const handleEdit = (product) => {

        setEditId(product.id);

        setId(product.id);
        setCategory(product.category);
        setBrand(product.brand);
        setPrice(product.price);
    };


    const handleUpdate = (e) => {

        e.preventDefault();

        const updateProducts = products.map(
            (product) => {

                if (product.id == editId) {

                    return {
                        id: id,
                        category: category.trim(),
                        brand: brand.trim(),
                        price: price
                    };

                }

                return product;
            }
        );

        setProducts(updateProducts);

        localStorage.setItem(
            "products",
            JSON.stringify(updateProducts)
        );

        setId("");
        setCategory("");
        setBrand("");
        setPrice("");
        setEditId(null);
    };


    return (

        <section
            className="hf bg20 p3"
            style={{
                display: "flex",
                gap: "20px",
                alignItems: "flex-start"
            }}
        >

            {/* ADD PRODUCT */}

            <section
                className="b1 p1"
                style={{
                    width: "30%"
                }}
            >

                <h3>
                    {editId === null
                        ? "Add Product"
                        : "Edit Product"}
                </h3>


                <form
                    onSubmit={
                        editId === null
                            ? handleAdd
                            : handleUpdate
                    }
                    className="fy"
                >

                    <input
                        type="text"
                        placeholder="ID"
                        value={id}
                        onChange={(e) =>
                            setId(e.target.value)
                        }
                        required
                    />


                    <input
                        type="text"
                        placeholder="Category"
                        value={category}
                        onChange={(e) =>
                            setCategory(e.target.value)
                        }
                        required
                    />


                    <input
                        type="text"
                        placeholder="Brand"
                        value={brand}
                        onChange={(e) =>
                            setBrand(e.target.value)
                        }
                        required
                    />


                    <input
                        type="text"
                        placeholder="Price"
                        value={price}
                        onChange={(e) =>
                            setPrice(e.target.value)
                        }
                        required
                    />


                    <button
                        type="submit"
                        className="btn2 bg40 mt1"
                    >

                        {editId === null
                            ? "Add"
                            : "Update"}

                    </button>

                </form>

            </section>


            {/* LIST OF PRODUCTS */}

            <section
                className="b1 p1"
                style={{
                    width: "60%"
                }}
            >

                <h3>
                    List of Products ({products.length})
                </h3>


                <br />


                {/* HEADER */}

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns:
                            "50px 120px 130px 120px 50px 50px",
                        gap: "10px",
                        alignItems: "center",
                        marginBottom: "10px"
                    }}
                >

                    <b>Id</b>
                    <b>Category</b>
                    <b>Brand</b>
                    <b>Price/-</b>
                    <b></b>
                    <b></b>

                </div>
                <hr style={{ marginBottom: "15px"}} />


                {/* PRODUCTS */}

                {products.map((p) => (

                    <div
                        key={p.id}
                        style={{
                            display: "grid",
                            gridTemplateColumns:
                                "30px 120px 130px 130px 20px 20px",
                            gap: "10px",
                            alignItems: "center",
                            marginBottom: "8px"
                        }}
                    >

                        <span>{p.id}</span>

                        <span>{p.category}</span>

                        <span>{p.brand}</span>

                        <span>
                            Rs. {p.price}/-
                        </span>


                        <button
                            onClick={() =>
                                handleEdit(p)
                            }
                            className="btn1 bg50"
                        >
                            <FiEdit />
                        </button>


                        <button
                            onClick={() =>
                                handleDelete(p.id)
                            }
                            className="btn1 bg30"
                        >
                            <BsTrash3 />
                        </button>

                    </div>

                ))}

            </section>

        </section>
    );
}