import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
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
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><hr class="dropdown-divider"></hr></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle me-5" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Product Menu
                </a>
                <ul class="dropdown-menu">
                  <li><Link class="dropdown-item" to="/ourproductsdesc">Our Products</Link></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><hr class="dropdown-divider"></hr></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle me-5" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Investor Menu
                </a>
                <ul class="dropdown-menu">
                  <li><Link class="dropdown-item" to="/investor">Investors</Link></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><hr class="dropdown-divider"></hr></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle me-5" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Health Menu
                </a>
                <ul class="dropdown-menu">
                  <li><Link class="dropdown-item" to="/health">Health</Link></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><hr class="dropdown-divider"></hr></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle me-5" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Newsroom Menu
                </a>
                <ul class="dropdown-menu">
                  <li><Link class="dropdown-item" to="/newsroom">Newsroom</Link></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><hr class="dropdown-divider"></hr></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle me-5" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Career
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><hr class="dropdown-divider"></hr></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle me-5" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Contact
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><hr class="dropdown-divider"></hr></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              {/* <li class="nav-item">
                <a class="nav-link disabled">Disabled</a>
              </li> */}
            </ul>
            {/* <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form> */}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;