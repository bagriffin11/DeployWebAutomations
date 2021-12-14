import {React, useState, useEffect } from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
// components

import CardStats from "components/Cards/CardStats.js";

export default function HeaderStats() {
//import user's info
let {id} = useParams();
const [userObject, setUserObject] = useState({});

useEffect(() =>{
  axios.get(`http://localhost:3001/user/byId/${id}`).then((response) => {
    setUserObject(response);
  });
});


//import user's accounts


  return (
    <>
    
      {/* Header */}
      <div className="relative bg-lightBlue-600 md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            {/* Card stats */}
            <div> {userObject.fullname}</div>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="TRAFFIC"
                  statTitle="350,897"
                  statArrow="up"
                  statPercent="3.48"
                  statPercentColor="text-emerald-500"
                  statDescripiron="Since last month"
                  statIconName="far fa-chart-bar"
                  statIconColor="bg-red-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="NEW USERS"
                  statTitle="2,356"
                  statArrow="down"
                  statPercent="3.48"
                  statPercentColor="text-red-500"
                  statDescripiron="Since last week"
                  statIconName="fas fa-chart-pie"
                  statIconColor="bg-orange-500"
                />
              </div>
            
             
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
