import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Carousel from './Components/Carousel';
import OurOrigin from './Components/Home/OurOrigin';

function App() {
  return (
    <div className="container">
      <Navbar></Navbar>
      <Carousel></Carousel>
      <OurOrigin></OurOrigin>
    </div>
  );
}

export default App;
