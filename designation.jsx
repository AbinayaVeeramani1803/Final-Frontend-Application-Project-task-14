import "./Destinations.css";

function Destinations() {

const places=[
"Paris",
"Dubai",
"Maldives",
"Singapore",
"London",
"Goa"
];

return(

<div className="page">

<h1>Popular Destinations</h1>

<div className="grid">

{places.map((place,index)=>(

<div className="box" key={index}>

<h3>{place}</h3>

<p>Best Tourist Destination</p>

</div>

))}

</div>

</div>

)

}

export default Destinations;
