import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Carousel from './Components/Carousel';
import OurOrigin from './Components/Home/OurOrigin';
import Research from './Components/Home/Research';
import Event from './Components/Home/Event';
import Global from './Components/Home/Global';
import SpecialProducts from './Components/Home/SpecialProducts';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Carousel></Carousel>
      <OurOrigin></OurOrigin>
      <SpecialProducts></SpecialProducts>
      <Research></Research>
      <Event></Event>
      <Global></Global>
      
    </div>
  );
}

export default App;
