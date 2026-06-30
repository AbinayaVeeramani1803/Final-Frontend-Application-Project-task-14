import "./Packages.css";

function Packages(){

const packages=[

{title:"Silver",price:"₹15,000"},

{title:"Gold",price:"₹35,000"},

{title:"Premium",price:"₹60,000"}

];

return(

<div className="page">

<h1>Travel Packages</h1>

<div className="cards">

{packages.map((item,index)=>(

<div className="package" key={index}>

<h2>{item.title}</h2>

<h3>{item.price}</h3>

<button>Book Now</button>

</div>

))}

</div>

</div>

)

}

export default Packages;
