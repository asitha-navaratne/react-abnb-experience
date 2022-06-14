import image from "../images/katie-zaferes.png";
import star from "../images/Star 1.png";

function Card() {
  return (
    <div className="card">
      <img src={image} alt="card" className="card--image" />
      <div className="stats">
        <img src={star} alt="star" className="card--star" />
        <span>5.0</span>
        <span className="grey">(6) &#x2022; </span>
        <span className="grey">USA</span>
      </div>
      <p>Life lessons with Katie Zaferes</p>
      <p>
        <span className="bold">From $136</span> / person
      </p>
    </div>
  );
}

export default Card;
