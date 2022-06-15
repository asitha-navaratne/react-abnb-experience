import star from "../images/Star 1.png";

function Card(props) {
  return (
    <div className="card">
      <img
        src={require(`../images/${props.img}`)}
        alt="card"
        className="card--image"
      />
      <div className="stats">
        <img src={star} alt="star" className="card--star" />
        <span>{props.rating}</span>
        <span className="grey">({props.reviewCount}) &#x2022; </span>
        <span className="grey">{props.location}</span>
      </div>
      <p>{props.title}</p>
      <p>
        <span className="bold">From ${props.price}</span> / person
      </p>
    </div>
  );
}

export default Card;
