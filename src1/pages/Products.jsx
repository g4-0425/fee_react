import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

export function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getData = localStorage.getItem("products");
        const arrayObject = getData ? JSON.parse(getData) : [];
        setProducts(arrayObject);
    }, []);

    const categories = products.map((p) => p.category);
    const uniqueCategories = [...new Set(categories)];

    const cLinks = uniqueCategories.map((c) => {
        return (
            <div key={c} className="mb1">
                <Link to={c}>{c}</Link>
            </div>
        );
    });

    return (
        <div className="h95 fx">

            <aside className="bg52 w10 p3">
                <h3 className="mb3">Categories</h3>
                {cLinks}
            </aside>

            <main className="p2" style={{flex:"1"}}>
                <Outlet />
            </main>
        </div>
    );
}