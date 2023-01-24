import React from "react";
import CustomPButton from "./CustomPButton";

const CustomPCard = (props) => {
  return (
    <>
      <div className="col-lg-4 col-12" >
        <div className="card px-3 mt-4 " >
          <div className="card-body text-center">
            <h1 className="text-center">{props.logo}</h1>
            <h5 className="card-title ">{props.title}</h5>
            {/* <h6 class="card-subtitle mb-2 text-muted">{props.description}</h6> */}
            <p className="card-text text-start">{props.description}</p>
            <CustomPButton>{props.button}</CustomPButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomPCard;
