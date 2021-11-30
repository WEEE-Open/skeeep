import Button from "react-bootstrap/Button";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import CardsContainer from "./Components/CardsContainer";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { useEffect, useState } from "react";

function App() {
  // const [dark, setDark] = useState(false);

  // useEffect(() => {
  //   let current = new Date();

  //   let cTime = current.getHours();
  //   if(cTime < 6 || cTime>20){
  //     setDark(true)
  //   }else{
  //     setDark(false)
  //   }
  // }, []);

  // useEffect(()=>{
  //   if(dark){
  //     document.body.classList.add("dark");
  //   }else{
  //     document.body.classList.remove("dark");
  //   }
    
  // },[dark])
  const setDarkMode = enabled => {
    const body = document.getElementById("body");
    body.className = enabled ? "bootstrap-dark" : "bootstrap";
  }

  // detect dark mode and change theme accordingly
  const darkModeEnabled = window.matchMedia('(prefers-color-scheme: dark)').matches;
  setDarkMode(darkModeEnabled);

  // detect changes after the website has loaded
  window.matchMedia('(prefers-color-scheme: dark)')
          .addEventListener('change', event => {
            if (event.matches) {
              setDarkMode(true);
            } else {
              setDarkMode(false);
            }
          });
  return (
    <div className="App">
      <Header></Header>
      <CardsContainer></CardsContainer>
      <Footer></Footer>
    </div>
  );
}

export default App;
