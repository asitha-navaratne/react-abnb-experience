import star from "../images/Star 1.png";

function Card(props) {
  let badgeText;
  if (props.item.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.item.location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img
        src={require(`../images/${props.item.coverImg}`)}
        alt="card"
        className="card--image"
      />
      <div className="stats">
        <img src={star} alt="star" className="card--star" />
        <span>{props.item.rating}</span>
        <span className="grey">({props.item.reviewCount}) &#x2022; </span>
        <span className="grey">{props.item.location}</span>
      </div>
      <p>{props.item.title}</p>
      <p>
        <span className="bold">From ${props.item.price}</span> / person
      </p>
    </div>
  );
}

export default Card;
