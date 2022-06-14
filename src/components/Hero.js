import image from "../images/photo-grid.png";

function Hero() {
  return (
    <section className="hero">
      <img src={image} alt="hero background" className="hero--photo" />
      <div>
        <h1 className="hero--header">Online Experiences</h1>
        <p className="hero--text">
          Join unique interactive activities led by one-of-a-kind hosts - all
          without leaving home
        </p>
      </div>
    </section>
  );
}

export default Hero;
