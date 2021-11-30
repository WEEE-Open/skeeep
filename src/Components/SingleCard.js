import { Card, Button } from "react-bootstrap";
import "./SingleCard.css";
import politogruppiicon from '../assets/politogruppi.svg'
import translations from "./Translations";

function SingleCard(props) {
  return (
    <>
      <Card style={{ width: "18rem" }} className="singleCard">
        <Card.Body>
          <Card.Title className="title">POLITOOLS</Card.Title>
          <img src={politogruppiicon} alt="icon"/>
          <Card.Title className="subtitle">sub heading title</Card.Title>
          <Card.Text className="text">
            {translations[props.cardLang].text}
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default SingleCard;
