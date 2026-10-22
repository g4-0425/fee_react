
import { Link, Outlet } from "react-router-dom";

// export function Products() {
//   return (
//     <div
//       className="fx"
//       style={{
//         minHeight: "calc(100vh - 5rem)",
//         color: "white",
//       }}
//     >
//       <aside
//         className="p2 fy"
//         style={{
//           width: "10rem",
//           flexShrink: 0,
//           backgroundColor: "rgba(10, 15, 22, 0.8)",
//         }}
//       >
//         <Link to="/products">Product 1</Link>
//         <Link to="/products/product2">Product 2</Link>
//         <Link to="/products/product3">Product 3</Link>
//       </aside>

//       <main
//         className="p2"
//         style={{
//           flex: 1,
//           backgroundColor: "rgba(20, 27, 38, 0.65)",
//           color: "white",
//         }}
//       >
//         <Outlet />
//       </main>
//     </div>
//   );
// }


export function Products(){
    return(
        <div className="h95 fx">
            <aside className="w10 p2 fy">
                <Link to=".">Product-1</Link>
<Link to="product2">Product-2</Link>
<Link to="product3">Product-3</Link>
            </aside>
            <main className="w100 p2 bg10" style={{opacity:"0.8"}}>
<Outlet/>
            </main>
        </div>
    );
}