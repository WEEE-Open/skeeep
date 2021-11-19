import SingleCard from "./SingleCard";
import {CardGroup, Container, Row, Col} from "react-bootstrap";
import "./CardsContainer.css";

function CardsContainer() {
  return (
    <Container className="cardsContainer">
      <Row>
        <Col>
          <SingleCard />
        </Col>
        <Col>
          <SingleCard />
        </Col>
        <Col>
          <SingleCard />
        </Col>
        <Col>
          <SingleCard />
        </Col>
      </Row>
    </Container>
  );
}

export default CardsContainer;
