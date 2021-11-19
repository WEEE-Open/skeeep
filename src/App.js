import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import CardsContainer from './Components/CardsContainer';
import Footer from './Components/Footer';
import Header from './Components/Header';

function App() {
  return (
    <div className="App">
  

      <Header></Header>
      <CardsContainer></CardsContainer>
      <Footer></Footer>
    </div>
  );
}

export default App;
