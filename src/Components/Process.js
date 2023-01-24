import React from "react";
const process = [
  {
    logo: <i className="fas fa-magic    "></i>,
    id: "1",
    h1: "Get Packing Quotes",
    p: "Choose from 40+ types of packaging and customize your specs to get a quote.",
  },
  {
    logo: <i className="fas fa-box    "></i>,
    id: "2",
    h1: "Purchase a sample (optional)",
    p: "Get a sample of your packaging to test size and quality before starting a bulk order.",
  },
  {
    logo: <i className="fa fa-dollar" aria-hidden="true"></i>,
    id: "3",
    h1: "Place your order",
    p: "Choose your preferred shipping method and place your order on our platform.",
  },
  {
    logo: <i className="fa fa-mars-stroke-h" aria-hidden="true"></i>,
    id: "4",
    h1: "Upload artwork",
    p: "Add your artwork to the dieline template we'll create for you upon placing your order.",
  },
  {
    logo: <i className="fas fa-business-time    "></i>,
    id: "5",
    h1: "Start production",
    p: "Once your artwork is approved, we'll start production, which typically takes 12-16 days.",
  },
  {
    logo: <i className="fa fa-plane" aria-hidden="true"></i>,
    id: "6",
    h1: "Ship packaging",
    p: "After passing quality assurance, we'll ship your packaging to your specified location(s).",
  },
];

// eslint-disable-next-line array-callback-return
const Process = () => {
  const processDisplay = process.map((display) => (
    <div className="col-lg-4" key={Math.random()*100}>
        <h1>
            {display.logo}
        </h1>
      <h3>
        {display.id} {display.h1}
      </h3>
      <p>{display.p}</p>
    </div>
  ));

  return (
    <section>
        <div className="container-fluid py-5" style={{backgroundColor: "#F5F9FC"}}>
      <div className="container ">
        <div className="row text-center">
          <div className="col-12">
            <h1>Our Process</h1>
            <p>
              We've broken down the packaging order process so you know exactly
              what to expect.
            </p>
          </div>
          {processDisplay}
        </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
