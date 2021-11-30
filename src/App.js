import Button from 'react-bootstrap/Button'
import {useState, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import CardsContainer from './Components/CardsContainer';
import Footer from './Components/Footer';
import Header from './Components/Header';



function App() {
    // set language
    const [appLang,setLang] = useState('en-US');
    // load lang
    useEffect(() => {
        const getLang = () => {
            try {
                const navLang = window.navigator.language? window.navigator.language:'en-US';
                setLang(navLang);
            } catch (err) {
                console.error(err.error);
            }
        }
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
