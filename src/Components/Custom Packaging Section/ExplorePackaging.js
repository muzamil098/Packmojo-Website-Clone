import React from "react";
import ExplorePackagingIntroduction from "./ExplorePackagingIntroduction";
import "./Custompackaging.module.css"
import ChooosePackagingStyle from "./ChooosePackagingStyle";
import CostEstimator from "./Custom Packagin UI/CostEstimator";
const ExplorePackaging = () => {
  return (
   <>
   <ExplorePackagingIntroduction />
   <ChooosePackagingStyle />
   <CostEstimator />
   </>
  );
};

export default ExplorePackaging;
