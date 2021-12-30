
import {React, useState} from 'react';
import {useHistory} from "react-router-dom";
import CardBusinessTable from "components/Cards/CardBusinessTable.js";


export default function Accounts() {

let history = useHistory();


const onSubmit = () => {
        history.push("/user/accountinfo")
};
    return (
      <>
<div>         
          <CardBusinessTable />
           
               
          <button                  
         className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
          onClick = {onSubmit} >
              Add Business
          </button>
                 </div>
              <div>
   
        </div>   
        </>
    );
}