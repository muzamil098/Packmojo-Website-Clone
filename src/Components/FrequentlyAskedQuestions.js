import React from "react";

const FrequentlyAskedQuestions = () => {
  return (
    <section className="py-5">
      <div className="container-fluid">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 text-center">
              <h1>Frequently Asked Questions</h1>
            </div>
            <div className="col-lg-6 col-12 mt-2">
              <h5>
                {" "}
                <i
                  className="fa-solid fa-lightbulb"
                  style={{ color: "#FAB005" }}
                ></i>{" "}
                Where is Your Packaging Produced?{" "}
              </h5>
              <p className="ms-4">
                Our packaging is produced with our vetted network of suppliers
                in China.
              </p>
              <h5>
                {" "}
                <i
                  className="fa-solid fa-lightbulb"
                  style={{ color: "#FAB005" }}
                ></i>{" "}
                How long does production take?{" "}
              </h5>
              <p className="ms-4">
                Production typically takes 12-16 days, and 16-21 days for larger
                volume orders.
              </p>
              <h5>
                {" "}
                <i
                  className="fa-solid fa-lightbulb"
                  style={{ color: "#FAB005" }}
                ></i>{" "}
                How long does Shipping take?{" "}
              </h5>
              <p className="ms-4">
                Air freight options range from 7-21 days, while ocean freight
                options range from 26-71 days. If you need some packaging
                expedited earlier, consider splitting your shipment between air
                and ocean!
              </p>
            </div>

            <div className="col-lg-6 col-12 mt-2">
              <h5>
                {" "}
                <i
                  className="fa-solid fa-lightbulb"
                  style={{ color: "#FAB005" }}
                ></i>{" "}
                What is your minimum order quantity (MOQ)?{" "}
              </h5>
              <p className="ms-4">
                It depends! Mailer boxes and folding carton boxes start with an
                MOQ of 30 units for standard sizes and 100 units for custom
                sizes, while other packaging types start with an MOQ of 300+
                units.
              </p>
              <h5>
                {" "}
                <i
                  className="fa-solid fa-lightbulb"
                  style={{ color: "#FAB005" }}
                ></i>{" "}
                Do you provide samples?{" "}
              </h5>
              <p className="ms-4">
                Yes! We have sample types that serve different purposes. Whether
                you're looking to test the size of your packaging or want to
                check your artwork to be printed, we've got you covered. Explore
                all sample options here.
              </p>
              <h5>
                {" "}
                <i
                  className="fa-solid fa-lightbulb"
                  style={{ color: "#FAB005" }}
                ></i>{" "}
                Can you help design custom inserts for my products?{" "}
              </h5>
              <p className="ms-4">
                Yes we can! Start a structural design project with us to get the
                perfect insert design for your products. Learn more here.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrequentlyAskedQuestions;
