import React from "react";
import "./SignupPage.css";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

export default function SignupPage() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    const pass = event.target[1].value;
    const username = event.target[0].value;
    const confirmPass = event.target[2].value;
    if (pass === confirmPass) {
      const data = { username: username, password: pass, role: "usr" };
      localStorage.setItem("userdata", JSON.stringify(data));
      navigate("/");
    } else {
      navigate("/signup");
    }
  };
  return (
    <>
      <div>
        <main className="main">
          <div className="container">
            <section className="wrapper">
              <div className="heading">
                <h1 className="text text-large">Sign Up</h1>
                <p className="text text-normal">
                  Already user?{" "}
                  <span>
                    <Link to="/" className="text text-links">
                      Login
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
                  <label htmlFor="password" className="input-label" hidden>
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    name="Confirm Password"
                    id="Confirm Password"
                    className="input-field"
                    placeholder="Confirm Password"
                  />
                </div>
                <div className="input-control">
                  <input
                    type="submit"
                    name="submit"
                    className="input-submit"
                    value="Sign Up"
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
