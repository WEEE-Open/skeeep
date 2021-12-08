import { useState } from "react";
import SingleCard from "./SingleCard";
import { CardGroup, Container, Row, Col } from "react-bootstrap";
import "./CardsContainer.css";

function CardsContainer(props) {
	const [cards, setCards] = useState([
		{
			name: "politools",
			title: "PoliTools",
			url: "https://chrome.google.com/webstore/detail/politools/fbbjhoaakfhbggkegckmjafkffaofnkd?hl=it",
		},
		{
			name: "inginfbot",
			title: "inginf_bot",
			url: "https://t.me/inginf_bot",
		},
		{
			name: "studyplanner",
			title: "Study Planner",
			url: "https://github.com/e-caste/study-planner",
		},
		{
			name: "politogruppibot",
			title: "PoliToGruppiBot",
			url: "https://t.me/politogruppibot",
		},
		{
			name: "sonousciteledate",
			title: "sonousciteledate.it",
			url: "https://sonousciteledate.it",
		},
		{
			name: "skeeelled",
			title: "skeeelled",
			url: "#",
		},
	]);

	return (
		<Container className="cardsContainer">
			<Row>
				{cards.map((c, index) => {
					return (
						<Col  lg={4} md={6} sm={6} xs={12} key={index}>
							<SingleCard 
								name={c.name} 
								title={c.title} 
								url={c.url}
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
