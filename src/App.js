import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home/Home';
import { Route, Routes } from 'react-router-dom';
import ProductDetails from './Components/Home/ProductDetails';
import Footer from './Components/Footer';
import AllProductsDetails from './Components/Home/AllProductsDetails';
import Aboutus from './Components/Pages/Aboutus';
import Investors from './Components/Pages/Investors';
import OurProducts from './Components/Pages/OurProducts';
import Health from './Components/Pages/Health';


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/aboutus' element={<Aboutus />}></Route>
        <Route path='/investor' element={<Investors />}></Route>
        <Route path='/ourproductsdesc' element={<OurProducts />}></Route>
        <Route path='/health' element={<Health />}></Route>
        <Route path='/specialproduct/:id' element={<ProductDetails></ProductDetails>}></Route>
        <Route path='/allproduct/:id' element={<AllProductsDetails />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
