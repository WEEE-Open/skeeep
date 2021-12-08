import { Card, Button } from "react-bootstrap";
import "./SingleCard.css";
import translations from "./Translations";


function SingleCard(props) {

	const imageSrc = `/icons/${props.name}.svg`;
	console.log(props.lang,props.name)
  
	return (
		<>
		<a href={props.url} target="_blank">
			<Card className="card">
				<Card.Body>
					<Card.Title className="title">{props.title}</Card.Title>
					<div className="icon">
						<img src={imageSrc} alt={props.name}/>
					</div>
					<Card.Title className="subtitle">
						{translations[props.lang][props.name].subtitle}
					</Card.Title>
					<Card.Text className="text">
						{translations[props.lang][props.name].description}
					</Card.Text>
				</Card.Body>
			</Card>
			</a>
		</>
	);
}

export default SingleCard;
