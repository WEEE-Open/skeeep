import React, { useEffect, useState } from "react";
import SingleCard from "./SingleCard";
import { Container, Row, Col } from "react-bootstrap";
import "./CardsContainer.css";

function CardsContainer(props) {
  const [cards, setCards] = useState([]);
  const _cards = [
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
    {
      name: "poliaerospace",
      title: "PoliAerospace",
      url: "https://www.poliaerospace.org",
      addedDate: new Date("2022-09-02"),
      isMadeByWEEEOpen: false,
    },
  ];

  const gracePeriod = 30; // days that newly added cards will be on top

  useEffect(() => {
    let newCards = [];
    let oldCards = [];
    _cards.forEach((card) => {
      if (new Date() - card.addedDate < gracePeriod * 24 * 60 * 60 * 1000) {
        card.isNew = true;
        newCards.push(card);
      } else {
        card.isNew = false;
        oldCards.push(card);
      }
    });
    // sort new cards by most recent date
    newCards.sort((c1, c2) => c2.addedDate - c1.addedDate);
    // sort old cards by random order
    for (let i = oldCards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [oldCards[i], oldCards[j]] = [oldCards[j], oldCards[i]];
    }
    // set the cards state as the concatenation of new cards with old cards
    setCards(newCards.concat(oldCards));
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
