
export function Child1({count,setcount}){
function handleClick(){
    setcount((p)=>p+1);
}
return (
    <div className="bg40 p2 mt2 box1 fy jsb">
<p> Child Component 1</p>
<div>
    <button className="btn2" onClick={handleClick}>
        Counter
    </button>
    <span className="sp2"> {count} </span>
</div>
    </div>
);
}