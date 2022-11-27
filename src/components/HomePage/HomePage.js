import React from "react";
import data from "../../Data/Login.json";
import Card from "../Card/Card";
import Modal from "../Modal/Modal";
import { Link } from "react-router-dom";
function Welcome() {
  var userData = JSON.parse(localStorage.getItem("userdata"));
  const content = (localStorage.getItem("data"));



  if (!userData) {
    userData = data.data;
  }
  return (
    <>
      <div>
        Hello,{userData.username}   
       
        {userData.role === "adm" ? (
          <>
          <Link to="/viewcart" className="text text-links">
          ViewCart
         </Link>
            <Modal />
            <h1>heelo admin</h1>
            <Card/>
          </>
        ) : (
          " "
        )}
        {userData.role === "usr" ? (
          <> 
          <Link to="/viewcart" className="text text-links">
          ViewCart
         </Link>
        
            <h1>heelo user</h1>
            <Card />
          </>
        ) : (
          " "
        )}
      </div>
    </>
  );
}

export default Welcome;
