import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home/Home';
import { Route, Routes } from 'react-router-dom';
import ProductDetails from './Components/Home/ProductDetails';
import Footer from './Components/Footer';


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/specialproduct/:id' element={<ProductDetails></ProductDetails>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
