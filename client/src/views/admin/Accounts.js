
import {React, useState, useEffect, useContext} from 'react';
import axios from "axios";
import {useHistory} from "react-router-dom";
import {useParams} from "react-router-dom";
import {UserId} from "Global/Variables.js";
import CardBusiness from "components/Cards/CardBusiness.js";

export default function Accounts() {

let history = useHistory();

const [business, setBusiness] = useState("");

const id = useContext(UserId);


const onSubmit = () => {
    axios.post("http://localhost:3001/business", {
        business: business, UserId: id
    }).then((response) => {
     history.push("/iglogin");
});
};

    return (
        <div>

         <form>
         <br>
          </br>
          <br>
          </br>
           <h1>Business</h1>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Add your business
                    </label>
                    <input
                      type="Name"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Name"
                      onChange = {(e)=>  {
                        setBusiness(e.target.value);
                      }}
                    />
                  </div>
                  <div>
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        id="customCheckLogin"
                        type="checkbox"
                        className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                      />
                      <span className="ml-2 text-sm font-semibold text-blueGray-600">
                        Remember me
                      </span>
                    </label>
                  </div>

                  <div className="text-center mt-6">
                    <button
                      className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="button"
                      onClick = {onSubmit}
                    >
                      Add Socials
                    </button>
                  </div>
                </form>

                <div>

                <CardBusiness />
                 
                </div>
        </div>
    )
}