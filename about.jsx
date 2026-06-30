import "./About.css";

function About() {
  return (
    <div className="page">
      <h1>About TravelOne</h1>

      <p>
        TravelOne helps travelers discover amazing destinations, affordable
        packages, and memorable experiences around the world.
      </p>

      <div className="card-container">
        <div className="card">
          <h3>Our Mission</h3>
          <p>Making travel easy and affordable for everyone.</p>
        </div>

        <div className="card">
          <h3>Our Vision</h3>
          <p>Become India's most trusted travel booking platform.</p>
        </div>

        <div className="card">
          <h3>Support</h3>
          <p>24/7 customer support for every traveler.</p>
        </div>
      </div>
    </div>
  );
}

export default About;
