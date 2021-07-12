import './App.css';
import Nav from './components/Nav'
import Swiper from './components/Swiper'

function App() {
  return (
    <div className="App">
      <div className="nav-container">
        <Nav />
      </div>
      <div className="slider-container">
        <Swiper />
      </div>
      <div className="footer-container">
        <ul>4308 Fairway Drive North</ul>
        <ul>Jupiter, FL 33477</ul>
        <ul>3 Bed | 2 Bath</ul>
      </div>
    </div>
  );
}

export default App;
