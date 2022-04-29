import React from "react";
import { Card } from "react-bootstrap";
import "./SingleCard.css";
import translations from "./Translations";

function SingleCard(props) {
  const imageSrc = `icons/${props.name}${props.dark && "-dark"}.svg`;

  // adding language name to the className of the card to have customized style for each language
  const addClass = `card ${props.lang} ${props.isNew && "new"}`;

  return (
    <>
      <a href={props.url} target="blank">
        <Card className={addClass}>
          <Card.Body>
            <Card.Title className="title">{props.title}</Card.Title>
            <div className="icon">
              <img src={imageSrc} alt={props.name} />
            </div>
            <Card.Title className="subtitle">
              {props.name in translations[props.lang]
                ? translations[props.lang][props.name].subtitle
                : translations.en[props.name].subtitle}
            </Card.Title>
            <Card.Text className="text">
              {props.name in translations[props.lang]
                ? translations[props.lang][props.name].description
                : translations.en[props.name].description}
            </Card.Text>
          </Card.Body>
        </Card>
      </a>
    </>
  );
}

export default SingleCard;
