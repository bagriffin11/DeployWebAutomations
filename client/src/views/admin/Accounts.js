import React from "react";

// components
import AccountStats from "components/Headers/AccountStats.js";

export default function Accounts() {
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