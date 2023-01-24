import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light px-0">
      <div className="container-fluid ">
        <Link className="navbar-brand" to="/">
          {" "}
          <b> PackMojo </b>{" "}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav m-auto mb-2 mb-lg-0 ">
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Our Boxes
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="custom-packaging">
                    Custom Packaging
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Folding Cartoon Boxes
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Rigid Boxes
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Magnetic Rigid Boxes
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Custom Box Inserts
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Custom Box Dividers
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Display Boxes
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Tray and Sleeve Boxes
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Pakaging Sleeve
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Packaging Stickers
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />{" "}
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Explore All Products
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Design Services
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/">
                    Structural Design
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    DieLine Design
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Artwork Design
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Explore All Services
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />{" "}
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Something else here
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Samples
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/">
                    Structural Samples
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Simplified Samples
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Pre-Production Samples
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Sample kit
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />{" "}
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Explore All Samples
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Clients
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/">
                    Apparel
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Automotive
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Beauty
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Consumer Products
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Cosmetics
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Events
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Food & Beverage
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Fitness
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Jewelry
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />{" "}
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    View All Clients
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Our Products
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/">
                    International Packing Symbols
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Recycling Packaging Materials
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Box Design Inspiration
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Kraft Paper
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Canva Packaging Design
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    How to Choose Packaging
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Apple Like Packaging
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />{" "}
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    View All Clients
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              {" "}
              <button className="btn btn-success" type="submit">
                Browse Products
              </button>
            </li>
          </ul>
          <form className="d-flex" role="search">
            {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
            <Link className="dropdown-item" to="/">
              Login
            </Link>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
