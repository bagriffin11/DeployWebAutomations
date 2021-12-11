import React from "react";

// components
import AccountStats from "components/Headers/AccountStats.js";
import CardTable from "components/Cards/CardTable.js";

export default function Accounts() {
  return (
    <>
     <AccountStats />
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
         
        
        </div>
        <div className="w-full mb-12 px-4">
          <CardTable color="dark" />
        </div>
      </div>
    </>
  );
}