import React from "react";
import "./LoginPage.css";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import data from "../../Data/Login.json";

// const token = data.data;
function LoginPage() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    const pass = event.target[1].value;
    const username = event.target[0].value;
    var token = JSON.parse(localStorage.getItem("userdata"));
 
    if (!token) {
      token = data.data;
   
    }
    if (token.password === pass && username === token.username) {
      navigate("/home");
    } else {
      navigate("/");
    }
  };
  return (
    <>
      <div>
        <main className="main">
          <div className="container">
            <section className="wrapper">
              <div className="heading">
                <h1 className="text text-large">Sign In</h1>
                <p className="text text-normal">
                  New user?{" "}
                  <span>
                    <Link to="/signup" className="text text-links">
                      Create an account
                    </Link>
                  </span>
                </p>
              </div>
              <form name="signin" onSubmit={handleSubmit} className="form">
                <div className="input-control">
                  <label htmlFor="email" className="input-label" hidden>
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="input-field"
                    placeholder="Email Address"
                  />
                </div>
                <div className="input-control">
                  <label htmlFor="password" className="input-label" hidden>
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="input-field"
                    placeholder="Password"
                  />
                </div>
                <div className="input-control">
                  <a href="#" className="text text-links">
                    Forgot Password
                  </a>
                  <input
                    type="submit"
                    name="submit"
                    className="input-submit"
                    value="Sign In"
                  />
                </div>
              </form>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}
export default LoginPage;
