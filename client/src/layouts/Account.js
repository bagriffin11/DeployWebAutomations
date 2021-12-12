import React from "react";
import { Switch, Route, Link, Redirect, BrowserRouter as Router } from "react-router-dom";

// views


import Emaillogin from "views/auth/Emaillogin.js"
import Fblogin from "views/auth/Fblogin.js"
import Iglogin from "views/auth/Iglogin.js"

export default function Account() {
  return (
    <>
      
      <div >
        
      
          <Router>
        
        <Link to="/choose/Iglogin" >
          <i className="lg:text-blue-200 text-blueGray-400 fab fa-facebook text-lg leading-lg "></i> Facebook
</Link>
        
        <br>
        </br>
      
        <Link to="/choose/Fblogin" >
          <i className="lg:text-blue-200 text-blueGray-400 fab fa-instagram text-lg leading-lg "></i>
Instagram</Link>
      <br>
      </br>
      <Link to="/choose/Emaillogin"> 
      <i className="lg:text-blue-200 text-blueGray-400 fab fa-google text-lg leading-lg "></i>
Gmail</Link>
  
          
          <Switch>
            <Route path="/choose/Emaillogin" exact component = {Emaillogin} />
            <Route path="/choose/Iglogin" exact component = {Iglogin} />
            <Route path="/choose/Fblogin" exact component = {Fblogin} />
          </Switch>
          
          </Router>
        </div>
    </>
  );
}