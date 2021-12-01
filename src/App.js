import Button from "react-bootstrap/Button";
import {useState, useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import CardsContainer from "./Components/CardsContainer";
import Footer from "./Components/Footer";
import Header from "./Components/Header";


function App() {
  
	// set language
	const [appLang,setLang] = useState("en-US");
  
	const setDarkMode = enabled => {
		const body = document.getElementById("body");
		body.className = enabled ? "bootstrap-dark" : "bootstrap";
	};

	// detect dark mode and change theme accordingly
	const darkModeEnabled = window.matchMedia("(prefers-color-scheme: dark)").matches;
	setDarkMode(darkModeEnabled);

	const getLang = () => {
		try {
			const navLang = window.navigator.language? window.navigator.language:"en-US";
			setLang(navLang);
			console.info(`Set language to ${navLang}`);
		} catch (err) {
			console.error(err.error);
		}
	};
  
	// detect changes after the website has loaded
	window.matchMedia("(prefers-color-scheme: dark)")
		.addEventListener("change", event => {
			if (event.matches) {
				setDarkMode(true);
			} else {
				setDarkMode(false);
			}
		});
  
	// load lang
	useEffect(() => {
		getLang();
	}, []);
	// appLang <-

	return (
		<div className="App">
			<Header lang = { appLang }/>
			<CardsContainer lang = { appLang }/>
			<Footer lang = { appLang }/>
		</div>
	);
}

export default App;
