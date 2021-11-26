import { Card, Button } from "react-bootstrap";
import "./SingleCard.css";

function SingleCard(props) {
  const imageSrc = `/icons/${props.name}.svg`;
  return (
    <>
      <Card className="singleCard">
        <Card.Body>
          <Card.Title className="title">{props.title}</Card.Title>
          <img src={imageSrc} alt="icon" />
          <Card.Title className="subtitle">{props.subTitle}</Card.Title>
          <Card.Text className="text">
            {props.content}
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default SingleCard;
