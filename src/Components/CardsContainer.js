import SingleCard from "./SingleCard";
import {CardGroup, Container, Row, Col} from "react-bootstrap";
import "./CardsContainer.css";

function CardsContainer(props) {
  return (
    <Container className="cardsContainer">
      <Row>
        <Col>
          <SingleCard cardLang = {props.lang}/>
        </Col>
        <Col>
          <SingleCard cardLang = {props.lang}/>
        </Col>
        <Col>
          <SingleCard cardLang = {props.lang}/>
        </Col>
        <Col>
          <SingleCard cardLang = {props.lang}/>
        </Col>
      </Row>
    </Container>
  );
}

export default CardsContainer;
