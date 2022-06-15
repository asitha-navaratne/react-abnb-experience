import star from "../images/Star 1.png";

function Card(props) {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img
        src={require(`../images/${props.coverImg}`)}
        alt="card"
        className="card--image"
      />
      <div className="stats">
        <img src={star} alt="star" className="card--star" />
        <span>{props.stats.rating}</span>
        <span className="grey">({props.stats.reviewCount}) &#x2022; </span>
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
