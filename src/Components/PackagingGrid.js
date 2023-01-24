import React from "react";
import "./gridStyles.css";
import "./Links.css"
import Button from "./UI/Button";
import { NavLink } from "react-router-dom";
const PackagingGrid = () => {
  return (
    <section className="py-5">
      <div className="container-fluid py-3">
        <div className="container">
          <div className="row text-center grid">
            <div className="col-12">
                <h1>
                    Packaging Design Inspiration
                </h1>
                <p>
                    <NavLink to="/"> All </NavLink> / 
                    <NavLink to="/"> Mailer Boxes </NavLink> /
                    <NavLink to="/"> Folding Cartoon </NavLink> /
                    <NavLink to="/"> Rigid Boxes </NavLink> /
                    <NavLink to="/"> Tray Sleeve </NavLink> /
                    <NavLink to="/"> Box Inserts </NavLink> /
                    <NavLink to="/"> Display Boxes </NavLink> /
                    <NavLink to="/"> Foldable and Lid based</NavLink> 
                </p>
            </div>
            <div className="col-lg-3 col-12">
              <div className="c1 c-box_1 box mt-2">
                <img
                  src={require("../Dataset/Grid Images/boxX.jpg")}
                  alt=""
                  height={"500px"}
                />
                <div className="p-3">
                  <h4>ankisia </h4>
                  <p>Mailer Boxes</p>
                </div>
              </div>

              <div className="c1 c-box_2 mt-2">
                <img
                  src={require("../Dataset/Grid Images/CB.jpg")}
                  alt=""
                  height={"500px"}
                />
                <div className="p-3">
                  <h4>ankisia </h4>
                  <p>Mailer Boxes</p>
                </div>
              </div>

              <div className="c1 c-box_3 mt-2">
                <img
                  src={require("../Dataset/Grid Images/cerial box.jpg")}
                  alt=""
                  height={"500px"}
                />
                <div className="p-3">
                  <h4>ankisia </h4>
                  <p>Mailer Boxes</p>
                </div>
              </div>
            </div>

            {/* --------------------------Col-2---------------------------- */}
            <div className="col-lg-3 col-12">
              <div className="c2 c-box_3 mt-2">
                <img
                  src={require("../Dataset/Grid Images/christmas.webp")}
                  alt=""
                  height={"500px"}
                />
                <div className="p-3">
                  <h4>ankisia </h4>
                  <p>Mailer Boxes</p>
                </div>
              </div>

              <div className="c2 c-box_2 mt-2">
                <img
                  src={require("../Dataset/Grid Images/cubiod.jpg")}
                  alt=""
                  height={"500px"}
                />
                <div className="p-3">
                  <h4>ankisia </h4>
                  <p>Mailer Boxes</p>
                </div>
              </div>

              <div className="c2 c-box_1 box mt-2">
                <img
                  src={require("../Dataset/Grid Images/echo brand.webp")}
                  alt=""
                  height={"500px"}
                />
                <div className="p-3">
                  <h4>ankisia </h4>
                  <p>Mailer Boxes</p>
                </div>
              </div>
            </div>

            {/* -------------------col-3-------------------- */}

            <div className="col-lg-3 col-12">
              <div className="c3 c-box_2 mt-2">
                <img
                  src={require("../Dataset/Grid Images/gift box.jpg")}
                  alt=""
                  height={"500px"}
                />
                <div className="p-3">
                  <h4>ankisia </h4>
                  <p>Mailer Boxes</p>
                </div>
              </div>

              <div className="c3 c-box_3 mt-2">
                <img
                  src={require("../Dataset/Grid Images/Nature and organic.webp")}
                  alt=""
                  height={"500px"}
                />
                <div className="p-3">
                  <h4>ankisia </h4>
                  <p>Mailer Boxes</p>
                </div>
              </div>

              <div className="c3 c-box_1 box mt-2">
                <img
                  src={require("../Dataset/Grid Images/shoe box.webp")}
                  alt=""
                  height={"500px"}
                />
                <div className="p-3">
                  <h4>ankisia </h4>
                  <p>Mailer Boxes</p>
                </div>
              </div>
            </div>

            {/* -------------------------------------------- */}

            {/* ---------------------col-4----------------------- */}

            <div className="col-lg-3 col-12">
              <div className="c4 c-box_3 mt-2">
                <img
                  src={require("../Dataset/Grid Images/christmas.webp")}
                  alt=""
                  height={"500px"}
                />
                <div className="p-3">
                  <h4>ankisia </h4>
                  <p>Mailer Boxes</p>
                </div>
              </div>

              <div className="c4 c-box_1 box mt-2">
                <img
                  src={require("../Dataset/CusromBoxes.jpg")}
                  alt=""
                  height={"500px"}
                />
                <div className="p-3">
                  <h4>ankisia </h4>
                  <p>Mailer Boxes</p>
                </div>
              </div>

              <div className="c4 c-box_2 mt-2">
                <img
                  src={require("../Dataset/Grid Images/boxX.jpg")}
                  alt=""
                  height={"500px"}
                />
                <div className="p-3">
                  <h4>ankisia </h4>
                  <p>Mailer Boxes</p>
                </div>
              </div>
            </div>

            {/* ------------------------------------------------- */}
            <div className="col-12 py-3">
            <Button>More Case Studies</Button>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  )
};

export default PackagingGrid;
