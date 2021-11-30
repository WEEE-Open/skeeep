import { useState } from "react";
import SingleCard from "./SingleCard";
import { CardGroup, Container, Row, Col } from "react-bootstrap";
import "./CardsContainer.css";


function CardsContainer() {
  const [cards, setCards] = useState([
    {
      name: "inginfbot",
      title: "inginf_bot",
      subTitle: "Frase riassuntiva d’effeto",
      content: `Lorem ipsum dolor sit amet,
      consectetuer adipiscing elit, sed
      diam nonummy nibh euismod
      tincidunt ut laoreet dolore`,
    },
    {
      name: "politools",
      title: "PoliTools",
      subTitle: "Frase riassuntiva d’effeto",
      content: `Lorem ipsum dolor sit amet,
      consectetuer adipiscing elit, sed
      diam nonummy nibh euismod
      tincidunt ut laoreet dolore`,
    },
    {
      name: "politogruppibot",
      title: "PoliToGruppiBot",
      subTitle: "Frase riassuntiva d’effeto",
      content: `Lorem ipsum dolor sit amet,
      consectetuer adipiscing elit, sed
      diam nonummy nibh euismod
      tincidunt ut laoreet dolore`,
    },
    {
      name: "sonousciteledate",
      title: "sonousciteledate.it",
      subTitle: "Frase riassuntiva d’effeto",
      content: `Lorem ipsum dolor sit amet,
      consectetuer adipiscing elit, sed
      diam nonummy nibh euismod
      tincidunt ut laoreet dolore`,
    },
    {
      name: "study_planner",
      title: "Study Planner",
      subTitle: "Frase riassuntiva d’effeto",
      content: `Lorem ipsum dolor sit amet,
      consectetuer adipiscing elit, sed
      diam nonummy nibh euismod
      tincidunt ut laoreet dolore`,
    },
  ]);

  return (
    <Container className="cardsContainer">
      <Row>
        {cards.map((c) => {
          return (
            <>
              <Col lg={3} md={6} sm={6} xs={12}>
                <SingleCard name={c.name} title={c.title} subTitle={c.subTitle} content={c.content} />
              </Col>
            </>
          );
        })}
      </Row>
    </Container>
  );
}

export default CardsContainer;
