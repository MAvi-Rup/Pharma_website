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
import Newsroom from './Components/Pages/Newsroom';
import Mission from './Components/Pages/About/Mission';
import OurPeople from './Components/Pages/About/OurPeople';
import OurProductRange from './Components/Pages/Products/OurProductRange';
import CompanyInfo from './Components/Pages/Investor/CompanyInfo';
import HealthCOncern from './Components/Pages/Health/HealthCOncern';
import ContactUs from './Components/Pages/ContactUs';

import Signup from './Components/Pages/Login/Signup';
import Signin from './Components/Pages/Login/Signin';
import AdminDashboard from './Components/Pages/Dashboard/AdminDashboard';
import SalesGraph from './Components/Pages/Dashboard/SalesGraph';
import RequireAuth from './Components/RequireAuth';
import SalesBarChart from './Components/Pages/Dashboard/SalesBarChart';
import GrossRevenue from './Components/Pages/Dashboard/GrossRevenue';
import AllEmployee from './Components/Pages/Dashboard/AllEmployee';
import PrintQRCode from './Components/Pages/Dashboard/PrintQRCode';
import EmployeeDetails from './Components/Pages/Dashboard/EmployeeDetails';


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/aboutus' element={<Aboutus />}></Route>
        <Route path='/login' element={<Signin />}></Route>
        <Route path='/register' element={<Signup />}></Route>
        <Route path='/investor' element={<Investors />}></Route>
        <Route path='/newsroom' element={<Newsroom />}></Route>
        <Route path='/mission' element={<Mission />}></Route>
        {/* <Route path='/sales' element={<SalesGraph />}></Route> */}

        <Route path='/ourpeople' element={<OurPeople />}></Route>
        <Route path="/admin" element={<RequireAuth><AdminDashboard /></RequireAuth>} >
          <Route path='sales' element={<SalesGraph />}></Route>
          <Route path='yearly-sales' element={<SalesBarChart />}></Route>
          <Route path='gross-revenue' element={<GrossRevenue />}></Route>
          <Route path='all-employee' element={<AllEmployee />}></Route>
          <Route path='all-employee/:id' element={<RequireAuth><EmployeeDetails /></RequireAuth>}></Route>
          <Route path='add-employee' element={<PrintQRCode />}></Route>
          {/* <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path="users" element={<RequireAdmin><Users></Users></RequireAdmin>}></Route>
          <Route path="addproduct" element={<RequireAdmin><AddProduct></AddProduct></RequireAdmin>}></Route>
          <Route path="manageproduct" element={<RequireAdmin><ManageProducts></ManageProducts></RequireAdmin>}></Route>
          <Route path="confirmorder" element={<RequireAdmin><AllOrders></AllOrders></RequireAdmin>}></Route>
          <Route path="addreview" element={<AddReview></AddReview>}></Route> */}
          {/* <Route path="myorder" element={<MyHistory></MyHistory>}></Route>
          <Route path="users" element={<RequireAdmin><Users></Users></RequireAdmin>}></Route>
          <Route path="addproduct" element={<RequireAdmin><AddDoctor></AddDoctor></RequireAdmin>}></Route> */}
        </Route>
        <Route path='/company-info' element={<CompanyInfo />}></Route>
        <Route path='/contact-us' element={<ContactUs />}></Route>
        <Route path='/product-range' element={<OurProductRange />}></Route>
        <Route path='/ourproductsdesc' element={<OurProducts />}></Route>
        <Route path='/health' element={<Health />}></Route>
        <Route path='/health-concern' element={<HealthCOncern />}></Route>
        <Route path='/specialproduct/:id' element={<ProductDetails></ProductDetails>}></Route>
        <Route path='/allproduct/:id' element={<AllProductsDetails />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
