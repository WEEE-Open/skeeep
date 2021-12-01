import { Card, Button } from "react-bootstrap";
import "./SingleCard.css";
import translations from "./Translations";


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
          <Card.Title className="subtitle">
            {props.subTitle}  // TODO: translate subtitles
          </Card.Title>
          <Card.Text className="text">
            {translations[props.cardLang].text}
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default SingleCard;
