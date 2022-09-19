import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = (props) => {
  const [username, setUsername] = useState("");
  const [userid, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, cPassword] = useState("");

  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/login");
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
                    New User Registration
                  </h2>
                  <form>
                    <label for="username">Username:</label>
                    <br></br>
                    <input
                      type="text"
                      id="username"
                      name="username"
                      class="form-control"
                      placeholder="Username"
                      required
                      autofocus
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    ></input>
                    <br></br>
                    <label for="email">Email-Id:</label>
                    <input
                      type="text"
                      id="email"
                      name="email"
                      class="form-control"
                      placeholder="Email"
                      required
                      autofocus
                      value={userid}
                      onChange={(e) => setUserId(e.target.value)}
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
                    <label for="username">Confirm:</label>
                    <br></br>
                    <input
                      type="text"
                      id="cpassword"
                      name="cpassword"
                      class="form-control"
                      placeholder="Confirm Password"
                      required
                      autofocus
                      value={cpassword}
                      onChange={(e) => cPassword(e.target.value)}
                    ></input>
                    <br></br>
                    <button
                      type="submit"
                      class="btn btn-primary"
                      onClick={handleSubmit}
                    >
                      Submit
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

export default SignUp;
