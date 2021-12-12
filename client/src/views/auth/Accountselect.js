import {React, button} from 'react'
import Iglogin from "views/auth/Iglogin.js"



function Accountselect() {
    return (
  
        <div className="text-center mt-6">
            <li>
        <button className="bg-white text-blueGray-700 active:bg-blueGray-50 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                  type="button"
                  onClick = {() => Iglogin()}>
      <i className="lg:text-blue-200 text-blueGray-400 fab fa-facebook text-lg leading-lg "></i> Facebook
    </button>
    </li>
         <li>
        <button className="bg-white text-blueGray-700 active:bg-blueGray-50 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                  type="button">
      <i className="lg:text-blue-200 text-blueGray-400 fab fa-instagram text-lg leading-lg "></i> Facebook
    </button>
    </li>
    <li>
        <button className="bg-blue text-blueGray-700 active:bg-blueGray-50 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                  type="button">
      <i className="lg:text-blue-200 text-blueGray-400 fab fa-google text-lg leading-lg "></i> Gmail
    </button>
    </li>
        </div>
     
    )
}

export default Accountselect
