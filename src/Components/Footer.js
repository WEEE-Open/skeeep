import React from "react";
import {Image} from "react-bootstrap";
import translations from "./Translations";
import "./Footer.css";

function Footer(props) {
	return ( 
		<>
			<h5>
				<a href={"https://github.com/weee-open/skeeep"}>
					<Image id={"footer-skeeep-logo"} src={"skeeep.svg"} alt={"skeeep"} />
				</a>
				{translations[props.lang].footer}
				<a href={"https://weeeopen.polito.it"}>
					<Image id={"footer-weee-open-logo"} src={"weee-open.svg"} alt={"WEEE Open"} />
				</a>
			</h5>
		</>
	);
}

export default Footer;