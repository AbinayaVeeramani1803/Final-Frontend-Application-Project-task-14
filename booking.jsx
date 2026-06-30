import "./Booking.css";

function Booking(){

return(

<div className="booking">

<h1>Book Your Trip</h1>

<form>

<input type="text" placeholder="Full Name"/>

<input type="email" placeholder="Email"/>

<input type="text" placeholder="Destination"/>

<input type="date"/>

<button>Confirm Booking</button>

</form>

</div>

)

}

export default Booking;
