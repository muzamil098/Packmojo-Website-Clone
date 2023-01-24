import React from "react";
import Button from "./UI/Button";
const CustomBoxes = () => {
  return (
    <section>
      <div className="container py-5">
        <div className="row  py-lg-5 py-3">
          <div className="col-lg-6 col-12">
            <div className="card border-0 p-3">
            <img src={require("../Dataset/CusromBoxes.jpg")} alt="" />
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div>
              <h1>Custom Boxes & Printed Packaging</h1>
              <h3>Personalized Mailer Boxes</h3>
              <p>
                Explore PackMojo's incredible range of custom mailer boxes - the
                ideal shipping solution for e-commerce & businesses of any size.
                Build your own today.
              </p>
              <div>
                <h3>Lucky Packaging</h3>
                <p>
                  Browse our selection of luxury packaging: from rigid boxes to
                  a variety of customizable options, add a touch of opulence to
                  your premium boxes.
                </p>
              </div>
              <div>
                <h3>Custom Box Inserts</h3>
                <p>
                  Custom moulded, high-quality box inserts tailored to your
                  products. Perfect for your keeping products securely place
                  while displaying them in a presentable way.
                </p>
              </div>
              <div>
                <h3>Printed Boxes & Packaging Enhancements</h3>
                <p>
                  Explore our full range of printed boxes that are stylish &
                  durable: the perfect solution for subscription boxes,
                  eCommerce packaging, or retail display. Upgrade the unboxing
                  experience with packaging enhancements: from custom printed
                  stickers and labels to thank you cards and brochures, we've
                  got you covered!
                </p>
              </div>
            </div>
            <Button>View Products</Button>
            {/* <button className={"btn btn-success " + classes.button}>view Products</button> */}
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default CustomBoxes;
