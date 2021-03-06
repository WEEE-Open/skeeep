import React, { useEffect, useState } from "react";
import SingleCard from "./SingleCard";
import { Container, Row, Col } from "react-bootstrap";
import "./CardsContainer.css";

function CardsContainer(props) {
  const [cards, setCards] = useState([
    {
      name: "politools",
      title: "PoliTools",
      url: "https://linktr.ee/politools",
      addedDate: new Date("2022-05-26"),
      isMadeByWEEEOpen: false,
    },
    {
      name: "inginfbot",
      title: "inginf_bot",
      url: "https://t.me/inginf_bot",
      addedDate: new Date("2022-03-11"),
      isMadeByWEEEOpen: false,
    },
    {
      name: "studyplanner",
      title: "Study Planner",
      url: "https://github.com/e-caste/study-planner",
      addedDate: new Date("2022-03-11"),
      isMadeByWEEEOpen: false,
    },
    {
      name: "politogruppibot",
      title: "PoliToGruppiBot",
      url: "https://t.me/politogruppibot",
      addedDate: new Date("2022-03-11"),
      isMadeByWEEEOpen: false,
    },
    {
      name: "sonousciteledate",
      title: "sonousciteledate.it",
      url: "https://sonousciteledate.it",
      addedDate: new Date("2022-03-11"),
      isMadeByWEEEOpen: false,
    },
    {
      name: "politomateriale",
      title: "polito-materiale",
      url: "https://github.com/lucaceriani/polito-materiale",
      addedDate: new Date("2022-03-11"),
      isMadeByWEEEOpen: false,
    },
    {
      name: "skeeelled",
      title: "skeeelled",
      url: "https://github.com/weee-open/skeeelled",
      addedDate: new Date("2022-03-11"),
      isMadeByWEEEOpen: true,
    },
    {
      name: "appuntipolito",
      title: "Regalo/Cerco Appunti PoliTo",
      url: "https://studyroompoli.altervista.org/notes",
      addedDate: new Date("2022-05-13"),
      isMadeByWEEEOpen: false,
    },
  ]);

  const gracePeriod = 30; // days that newly added cards will be on top

  useEffect(() => {
    let sortedCards = [];
    cards.forEach((card) => {
      if (new Date() - card.addedDate < gracePeriod * 24 * 60 * 60 * 1000) {
        card.isNew = true;
        sortedCards.unshift(card); // add at the beginning
      } else {
        card.isNew = false;
        sortedCards.push(card); // add at the end
      }
    });
    // sort by most recent date and set state
    setCards(sortedCards.sort((c1, c2) => c2.addedDate - c1.addedDate));
  }, []);

  return (
    <Container className="cardsContainer">
      <Row>
        {cards.map((c, index) => {
          return (
            <Col lg={4} md={6} sm={6} xs={12} key={index}>
              <SingleCard
                name={c.name}
                title={c.title}
                url={c.url}
                isNew={c.isNew}
                isMadeByWEEEOpen={c.isMadeByWEEEOpen}
                lang={props.lang}
                dark={props.dark}
              />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default CardsContainer;
