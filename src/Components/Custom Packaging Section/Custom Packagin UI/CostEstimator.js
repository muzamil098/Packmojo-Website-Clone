import React, { Fragment, useReducer } from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./costestimator.css";
import classes from "./costestimator.module.css";
import { NavLink } from "react-router-dom";

const chooseBox = [
  "Mailer Box",
  "Folding Cartoon",
  "Rigid Box",
  "Magnetic Rigid Box",
  "Display Box",
  "Tray and Sleeve box",
  "Foldable Lid and Base",
  "Stickers",
  "Paper Bags",
];

const progress = [
  {
    size: "Approximate Size",
    info: "Choose a size that is similar to what you need. Learn how to measure your box here.",
    roughSize: `5" x 3" x 2"`,
    roughSizeInfo: "Roughly the size of a mouse",
    progressbar: (
      <input
        type="range"
        className="slider w-100"
        min="0"
        max="2"
        id="customRange2"
      />
    ),
  },
  {
    size: "Print options",
    info: "All artwork is printed on a base material that’s white or brown kraft. See what’s considered single or double sided printing here.",
    roughSize: `Printed on one side`,
    roughSizeInfo: "Outside or inside",
    progressbar: (
      <input
        type="range"
        className="slider w-100"
        min="0"
        max="2"
        id="customRange2"
      />
    ),
  },
  {
    size: "Number of units",
    info: "Select a quantity that you need for this box type, size, and design.",
    roughSize: `500 units`,
    roughSizeInfo: "",
    progressbar: (
      <input
        type="range"
        className="slider w-100"
        min="0"
        max="4"
        id="customRange2"
      />
    ),
  },
];

const packagingCostEstimamate = [
  { name: "Rigid Box", totalUnits: 500, estimatedUP: `US$ ${1.59 - 2.23}` },
  { name: "Mailer Box", totalUnits: 500, estimatedUP: `US$ ${0.72 - 0.8}` },
];
let totalUnits = 0;
let estimatedUnitPrice = 0;
const initalArg = "";
const reducer =  (state, action) => {
  if(action.type === "Mailer Box"){
    totalUnits = 500;
    estimatedUnitPrice = `US$ ${0.72 + "-" + 0.8}`;
  }
  else if ("Folding Cartoon"){
    totalUnits = 500;
    estimatedUnitPrice = `US$ ${0.67+ "-" + 0.83}`;
  }
}

const CostEstimator = () => {
  const [initialColor, setColor] = useState(-1);
  const onClickHandler = () => {
    // alert(" i am clicked")

  };

  const [state, dispatch] = useReducer(reducer, initalArg)

  const c_Box = chooseBox.map((boxes, index) => (
    <div className="col-lg-3 col-md-4 px-1 p-0 col-12 mt-3" key={Math.random()}>
      <button
        className={"btn w-100 py-4 text-start"}
        style={{
          border: "1.5px solid gray",
          fontSize: "0.8rem",
          borderColor: initialColor !== index ? boxes : "green",
          borderWidth: "2px",
        }}
        // eslint-disable-next-line no-sequences
        onClick={() => {
          setColor(index);
          onClickHandler();
          dispatch({type: boxes})
        }}
      >
        {boxes}
      </button>
      {/* <NavLink onClick={onClickHandler} className={"btn btn-primary " + classes.navlink } to="/" role="button">{boxes}</NavLink> */}
    </div>
  ));

  const progressBars = progress.map((bars) => (
    <Fragment>
      {" "}
      <div className="col-lg-8 col-12 mt-5">
        <h6>{bars.size}</h6> <p>{bars.info}</p>
      </div>{" "}
      <div className="col-lg-4 text-end">
        {" "}
        <div
          className="px-2 py-1 ms-auto "
          style={{
            border: "1px solid gray",
            backgroundColor: "#F8F9FA",
            borderRadius: "5px",
            width: "fit-content",
          }}
        >
          {" "}
          {bars.roughSize}{" "}
        </div>{" "}
        <p>{bars.roughSizeInfo}</p>{" "}
      </div>{" "}
      <div className="col-12">{bars.progressbar}</div>
    </Fragment>
  ));

  return (
    <section className="py-5 costestimator">
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center py-5" style={{ color: "white" }}>
              <h1>Packaging Cost Estimator</h1>
              <p className="mt-3">
                <b>
                  Compare price estimates across different packaging styles and
                  choose one that is within your packaging budget.
                </b>
              </p>
            </div>
            <div
              className="col-lg-8 py-3 px-3"
              style={{ backgroundColor: "white" }}
            >
              <h6>Chose a box type</h6>
              <p>
                Don't know what these box types are?{" "}
                <Link>View different Packaging types here</Link>
              </p>
              <div className="row justify-content-between">{c_Box}</div>
              <div className="row align-items-center">{progressBars}</div>
            </div>
            <div
              className="col-lg-4 py-3 px-3"
              style={{ color: "gray", backgroundColor: "white" }}
            >
              <h3>Packaging Cost Estimate</h3>
              <p>
                Actual price may vary. Price estimate excludes shipping and any
                extras.
              </p>
              <div
      className="w-100 text center py-4 text-center"
      style={{ border: "2px solid gray", borderRadius: "10px" }}
    >
      <p>Total Units</p>
      <h6>{totalUnits}</h6>
    </div>
    <div
      className="w-100 text center py-4 text-center mt-2"
      style={{ border: "2px solid gray", borderRadius: "10px" }}
    >
      <p>Estimated Unit Price</p>
      <h6>{estimatedUnitPrice}</h6>
    </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CostEstimator;
