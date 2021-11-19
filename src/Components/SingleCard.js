import { Card, Button } from "react-bootstrap";
import "./SingleCard.css";

function SingleCard() {
  return (
    <>
      <Card style={{ width: "18rem" }} className="singleCard">
        <Card.Body>
          <Card.Title className="title">POLITOOLS</Card.Title>
          <i class="fas fa-wrench icon"></i>
          <Card.Title className="subtitle">sub heading title</Card.Title>
          <Card.Text className="text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default SingleCard;
