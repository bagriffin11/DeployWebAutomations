import {React, useState, useEffect, useContext } from "react";
import axios from "axios";
import {UserId} from "Global/Variables.js";
import {useHistory} from "react-router-dom";
import 'assets/styles/hover.css'

// components

import CardStats from "components/Cards/CardStats.js";

export default function HeaderStats() {
//import user's info
let history = useHistory();

const [businesses, setBusinesses] = useState([]);
const id = useContext(UserId);

useEffect(() =>{
  axios.get(`http://localhost:3001/business/getUserId/${id}`).then((response) => {
    setBusinesses(response.data);
 })
});


//import user's accounts


  return (
    <>
    
      {/* Header */}
      <div className="relative bg-lightBlue-600 md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            {/* Card stats */}
            
            <div className="flex flex-wrap">
            {businesses.map((value, key) => {
                  return(
              <div  className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle={value.business}
                  statTitle="357 tasks"
                  statArrow="up"
                  statPercent="3.48"
                  statPercentColor="text-emerald-500"
                  statDescripiron="Since last month"
                  statIconName="far fa-chart-bar"
                  statIconColor="bg-red-500"
                />
                </div>
           );
          })}
            
             
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
