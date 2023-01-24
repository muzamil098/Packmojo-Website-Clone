const PackingSolutions = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="row align-items-center">
            {/*   ---------------------------   */}
            <div className="col-12 text-center py-lg-5 py-3">
              <h2>One Stop Packaging</h2>
            </div>
            {/* --------------------------------- */}
            <div className="col-lg-6 col-12">
              <div>
                <h1>For small business</h1>
                <p>
                  If you're just launching your brand and are uncertain about
                  how many products you'll sell, we get it. That's why we offer
                  packaging solutions at low minimums of 100 units so that you
                  can still get branded packaging affordably.
                </p>
              </div>
              <div>
                <h1>For growing businesses</h1>
                <p>
                  If you're just launching your brand and are uncertain about
                  how many products you'll sell, we get it. That's why we offer
                  packaging solutions at low minimums of 100 units so that you
                  can still get branded packaging affordably.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-12">
                <div className="card border-0 p-3">
                        <img src={require("../Dataset/growingBussiness.jpg")} alt="" />
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PackingSolutions;
