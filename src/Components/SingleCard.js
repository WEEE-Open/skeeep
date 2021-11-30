import { Card, Button } from "react-bootstrap";
import "./SingleCard.css";

function SingleCard(props) {
  const imageSrc = `/icons/${props.name}.svg`;
  return (
    <>
      <Card className="card">
        <Card.Body>
          <Card.Title className="title">{props.title}</Card.Title>
          <div className="icon">
            <img src={imageSrc} alt={props.name}></img>
          </div>

          <Card.Title className="subtitle">{props.subTitle}</Card.Title>
          <Card.Text className="text">{props.content}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default SingleCard;
