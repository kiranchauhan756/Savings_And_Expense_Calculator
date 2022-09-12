import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/dashBoard");
  };
  const handleSignUp = () => {
    navigate("/signUp");
  };
  return (
    <section class="vh-50 bg-image">
      <div class="mask d-flex align-items-center h-100 gradient-custom-3">
        <div class="container h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-12 col-md-9 col-lg-7 col-xl-6">
              <div class="card">
                <div class="card-body p-5">
                  <h2 class="text-uppercase text-center mb-5">
                    Login to Application
                  </h2>
                  <form>
                    <label for="username">Username:</label>
                    <br></br>
                    <input
                      type="text"
                      id="username"
                      name="username"
                      class="form-control"
                      placeholder="E-mail/Username"
                      required
                      autofocus
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    ></input>
                    <br></br>
                    <label for="password">Password:</label>
                    <br></br>
                    <input
                      type="text"
                      id="password"
                      name="password"
                      class="form-control"
                      placeholder="Password"
                      required
                      autofocus
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    ></input>
                    <br></br>
                    <br></br>
                    <button
                      type="submit"
                      class="btn btn-primary"
                      onClick={handleLogin}
                    >
                      Login
                    </button>
                    &nbsp;&nbsp;
                    <button
                      type="submit"
                      class="btn btn-primary"
                      onClick={handleSignUp}
                    >
                      SignUp
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
