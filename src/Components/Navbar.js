import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from './../firebase.init';

const Navbar = () => {
  const [user] = useAuthState(auth);

  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        {
          !user ? 
          <div class="container-fluid">
          <Link class="navbar-brand" to="/">
            <img src="./favicon.png" alt="Home" width="30" height="24" />
          </Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav m-auto mb-5 mb-lg-0">
              {/* <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Product</a>
              </li> */}
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle me-5" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  About
                </a>
                <ul class="dropdown-menu">
                  <li><Link class="dropdown-item" to="/aboutus">About Us</Link></li>
                  <li><Link class="dropdown-item" to="/mission">Mission & Vision</Link></li>
                  <li><Link class="dropdown-item" to="/ourpeople">Our People</Link></li>

                </ul>
              </li>
              
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle me-5" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Product Menu
                </a>
                <ul class="dropdown-menu">
                  <li><Link class="dropdown-item" to="/ourproductsdesc">Our Products</Link></li>
                  <li><Link class="dropdown-item" to="/product-range">Product Range</Link></li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle me-5" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Investor Menu
                </a>
                <ul class="dropdown-menu">
                  <li><Link class="dropdown-item" to="/investor">Investors</Link></li>
                  <li><Link class="dropdown-item" to="/company-info">Company Info</Link></li>

                </ul>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle me-5" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Health Menu
                </a>
                <ul class="dropdown-menu">
                  <li><Link class="dropdown-item" to="/health">Health</Link></li>
                  <li><Link class="dropdown-item" to="/health-concern">Health Concern</Link></li>

                </ul>
              </li>
              <li class="nav-item">
                <Link className='nav-link me-5' to="/newsroom">Newsroom</Link>
              </li>
              <li class="nav-item">
                <Link className='nav-link me-5' to="/contact-us">Contact Us</Link>
              </li>
              
              {/* <li class="nav-item">
                <a class="nav-link disabled">Disabled</a>
              </li> */}
            </ul>
            <ul className='navbar-nav ms-auto mb-5 mb-lg-0'>
              <li className='nav-item me-4'>
              <Link className='nav-link' to='/login'>Login</Link>

              </li>

            </ul>
            {/* <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form> */}
          </div>
        </div>:
        <div>
        </div>

        }
      </nav>
    </div>
  );
};

export default Navbar;