import React from "react";
import classes from "./Styles.module.css";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <footer>
      <div className="container-fluid">
        <div className={"container " + classes.footer}>
          <div className="row ">
            <div className="col-lg-3 col-md-3 col-12">
              <ul>
                <h5>Company</h5>
                <li>
                  <NavLink to="/">about us</NavLink>
                </li>
                <li>
                  <NavLink to="/">Sustainability</NavLink>
                </li>
                <li>
                  <NavLink to="/">Showcase</NavLink>
                </li>
                <li>
                  <NavLink to="/">Partners</NavLink>
                </li>
                <li>
                  <NavLink to="/">Blog</NavLink>
                </li>
                <li>
                  <NavLink to="/">Contact us</NavLink>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-3 col-12">
              <ul>
                <h5>Discover Packaging</h5>
                <li>
                  <NavLink to="/">Custom Printed Boxes</NavLink>
                </li>
                <li>
                  <NavLink to="/">Luxury Packaging</NavLink>
                </li>
                <li>
                  <NavLink to="/">Gift Box Packaging</NavLink>
                </li>
                <li>
                  <NavLink to="/">Eco-Friendly Packaging</NavLink>
                </li>
                <li>
                  <NavLink to="/">Kraft Packaging</NavLink>
                </li>
                <li>
                  <NavLink to="/">Custom Packaging Australia</NavLink>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-3 col-12">
              <ul>
                <h5>Packaging Products</h5>
                <li>
                  <NavLink to="/">All Products</NavLink>
                </li>
                <li>
                  <NavLink to="/">Mailer Boxes</NavLink>
                </li>
                <li>
                  <NavLink to="/">Folding Carton Boxes</NavLink>
                </li>
                <li>
                  <NavLink to="/">Custom Box Inserts</NavLink>
                </li>
                <li>
                  <NavLink to="/">Custom Box Dividers</NavLink>
                </li>
                <li>
                  <NavLink to="/">Display Boxes</NavLink>
                </li>
                <li>
                  <NavLink to="/">Tray and Sleeve Boxes</NavLink>
                </li>
                <li>
                  <NavLink to="/">Packaging Sleeves</NavLink>
                </li>
                <li>
                  <NavLink to="/">Packaging Stickers</NavLink>
                </li>
                <li>
                  <NavLink to="/">Foldable Lid and Base Boxes</NavLink>
                </li>
                <li>
                  <NavLink to="/">Paper Bags</NavLink>
                </li>
                <li>
                  <NavLink to="/">Cardboard Tubes</NavLink>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-3 col-12">
              <ul>
                <h5>Resources</h5>
                <li>
                  <NavLink to="/">Get Samples</NavLink>
                </li>
                <li>
                  <NavLink to="/">Design Services</NavLink>
                </li>
                <li>
                  <NavLink to="/">Packaging Cost Estimator</NavLink>
                </li>
                <li>
                  <NavLink to="/">Dieline Design Tips</NavLink>
                </li>
                <li>
                  <NavLink to="/">Download Packaging Dielines</NavLink>
                </li>
                <li>
                  <NavLink to="/">PackMojo Platform</NavLink>
                </li>
                <li>
                  <NavLink to="/">Help Center</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid" style={{color: "white"}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12">
              <p>
                &copy; 2022 PackMojo Limited, All Rights Reserved. | Privacy
                Policy | Terms
              </p>
            </div>

            <div className="col-lg-6 col-12 text-center text-lg-end text-md-end text-sm-center ">
              <h4>
                 <i className="fab fa-facebook-f ms-3   "></i>
                <i className="fab fa-instagram   ms-3 "></i>
                <i className="fab fa-linkedin   ms-3 "></i>
                <i className="fab fa-twitter-square  ms-3  "></i>
                <i className="fab fa-youtube   ms-3 "></i>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
