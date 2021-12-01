import translations from "./Translations";

function Footer(props) {
	return ( 
		<>
			<h3>{translations[props.lang].footer}</h3>
		</>
	);
}

export default Footer;