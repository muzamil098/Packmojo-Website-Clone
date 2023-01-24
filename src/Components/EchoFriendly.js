import React from "react";
import classes from "./Styles.module.css"
import { Link } from "react-router-dom";
const EchoFriendly = () => {
  return (
    <div className={"container-fluid " + classes.echo}>
      <div className="container">
        <div className="row text-center">
          <div className="col-12">
            <h1> Eco-friendly Packaging Solutions </h1>
            <p>
              We're committed to offsetting our world's carbon footprint,
              contributing to reforestation, and sustainability. From tree
              planting to eco-friendly ink and materials, learn more about our
               sustainable packaging practices here . 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EchoFriendly;
