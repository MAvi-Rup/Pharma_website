import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Carousel from './Components/Carousel';
import OurOrigin from './Components/Home/OurOrigin';
import Research from './Components/Home/Research';

function App() {
  return (
    <div className="container">
      <Navbar></Navbar>
      <Carousel></Carousel>
      <OurOrigin></OurOrigin>
      <Research></Research>
    </div>
  );
}

export default App;
