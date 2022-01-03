import React from "react";
import {Redirect} from "react-router-dom";

// components

import CardTableTaskId from "components/Cards/CardTableTaskId.js";
import CardLineChart from "components/Cards/CardLineChart.js";

export default function Business({authorized}) {
 /* if (!authorized){
    return <Redirect to="/" />

  } */
  return (
    <>
        <div className="flex flex-wrap">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardLineChart />
        </div>
             <CardTableTaskId />
        </div>
    </>
  );
}
