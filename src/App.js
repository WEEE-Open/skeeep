import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import CardsContainer from "./Components/CardsContainer";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import translations from "./Components/Translations";

function App() {
  // set language
  const [appLang, setLang] = useState("en");
  const [dark, setDark] = useState(false);

  const setDarkMode = (enabled) => {
    const body = document.getElementById("body");
    body.className = enabled ? "bootstrap-dark" : "bootstrap";
    if (dark !== enabled) {
      setDark(enabled);
    }
  };

  // detect dark mode and change theme accordingly
  const darkModeEnabled = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  setDarkMode(darkModeEnabled);

  // detect changes after the website has loaded
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (event) => {
      setDarkMode(event.matches);
    });

  const getLang = () => {
    try {
      const lang = window.navigator.language.includes("-")
        ? window.navigator.language.split("-")[0].toLowerCase()
        : window.navigator.language.toLowerCase();
      const navLang = translations.availableLanguages.includes(lang)
        ? lang
        : "en";
      setLang(navLang);
      console.info(`Set language to ${navLang}`);
    } catch (err) {
      console.error(err.error);
    }
  };

  // load lang
  useEffect(() => {
    getLang();
  }, []);
  // appLang <-

  return (
    <div className="App">
      <Header lang={appLang} />
      <CardsContainer dark={dark} lang={appLang} />
      <Footer lang={appLang} />
    </div>
  );
}

export default App;
