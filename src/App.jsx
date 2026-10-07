import React, { useState } from "react";
// rfce - Short cut for the simple react code format .

//useState - hooks
// p - props (properties / parameters)
// ps - previous state
//Props are used to pass data from one component to another, usually from a parent component to a child component.
function App(p) {
    const [count, setcount] = useState(0);
    function handleClick1() {
        setcount((ps) => ps + 1);
    }
    function handleClick2() {
        setcount((ps) => ps - 1);
    }
    return (
        <section className="fyc bg1">
            <div className="fxc b2">
                <button className="btn3 fxc" onClick={handleClick1}>
                    +
                    {/* can write + with the help of Props too - {p.x} */}
                    </button>
                <span style={{ width: "3rem", textAlign: "center" }}>
                    {count}
                </span>
                <button className="btn3 fyc" onClick={handleClick2}>
                    -
                    {/* can write - with the help of Props too - {p.y} */}
                    </button>
            </div>
        </section>
    );
}
export default App;
