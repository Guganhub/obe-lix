import React from "react";
import data from "../../Data/Login.json";
import Card from "../Card/Card";
import Modal from "../Modal/Modal";
import { Link } from "react-router-dom";
import img from "../../images/biriyani.jpeg";
import img2 from "../../images/idly.jpeg";
import "./HomePage.css";
function Welcome() {
  var userData = JSON.parse(localStorage.getItem("userdata"));
  const content = (localStorage.getItem("data"));

    

  if (!userData) {
    userData = data.data;
  }
    return (
        <>
        <div className="container-fluid">
    <div className="con">
    <nav className="navbar navbar-expand-lg navbar-light bg-light" id="nav">
      <div className="d-flex">
        <a className="navbar-brand" href="javascript(void)"><b>Obelilx</b>
        </a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item" id="home">
                {/* <a className="nav-link active" aria-current="page" href="javascript(void)"> */}
                <div className="bar" id="bar2">

                  <Dropdown />
                </div>
                {/* </a> */}
              </li>
              <form className="d-flex" id="form">
                <input className="form-control me-2" type="search" placeholder="Search for a Dish" aria-label="Search" />


                <button className="btn btn-outline-success" type="submit">Search</button>

              </form>



            </ul>
            <div className="d-flex">
              <div className="nav-item" id="login">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="javascript(void)"><i class="fa-solid fa-right-to-bracket"></i>&nbsp;Login</a>
                  </li>
                </ul>
              </div>

              <div className="nav-item" id="signup">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="javascript(void)"><i class="fa-solid fa-user-plus"></i>&nbsp;SignUp</a>
                  </li>
                </ul>
              </div>
            </div>


          </div>
        </div>
     
</div>
    </nav>
    <div className="flex-start" id="second">
  <p>Home&nbsp;/&nbsp;India&nbsp;/&nbsp;Chennai&nbsp;/&nbsp;Anna Nagar&nbsp;/&nbsp;Anjappar Restaurant</p>
    </div>
    <div className="third">
      <button className="filter"><i class="fa-solid fa-filter"></i>filter</button>
      &nbsp;&nbsp;
      <button className="filter"><i class="fa-solid fa-truck"></i>&nbsp;Delivery options</button>
      &nbsp;&nbsp;
      <button className="filter"><i class="fa-solid fa-smile"></i>&nbsp;Pure Veg</button>
      &nbsp;&nbsp;

      <button className="filter"><i class="fa-solid fa-smile"></i>&nbsp;Cusines</button>

    </div>
    
    </div>
    





    <div className="image">

      <h2> Inspiration for your first order   </h2>
      <div className="d-flex">
        <div className="d-block">
          <img src={img} class="d-block w-20" alt="..." />
          <br /><br />

          <span><h3>Biriyani</h3></span>
        </div>
        <div className="d-block">
          <img src={img2} class="d-block w-20" alt="..." />
          <br /><br />

          <span><h3>Idly</h3></span>       </div>
        <div className="d-block">
          <img src={img} class="d-block w-20" alt="..." />
          <br /><br />

          <span><h3>Biriyani</h3></span>       </div>
        <div className="d-block">
          <img src={img} class="d-block w-20" alt="..." />
          <br /><br />

          <span><h3>Biriyani</h3></span>       </div>
        <div className="d-block">
          <img src={img} class="d-block w-20" alt="..." />
          <br /><br />

          <span><h3>Biriyani</h3></span>       </div>


  
      </div>



    </div>



  </div>
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
