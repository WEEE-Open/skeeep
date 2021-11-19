import SingleCard from "./SingleCard";
import CardGroup from "react-bootstrap/CardGroup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
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
