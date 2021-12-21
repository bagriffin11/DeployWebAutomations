import React from "react";
import {Redirect} from "react-router-dom";
import AccountStats from "components/Headers/AccountStats.js";
import {useParams} from "react-router-dom";

export default function Accounts({authorized}) {

  
  if (!authorized){
    return <Redirect to="/" />
  }
  return (
    <>
    
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <AccountStats />
        
        </div>
      </div>
    </>
  );
}