import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate("/signUp");
  };
  async function submitHandler(event) {
    event.preventDefault();
    const user = {
      emailId: emailRef.current.value,
      password: passwordRef.current.value,
    };

    const response = await fetch("http://localhost:8080/user/login", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      navigate("/dashboard");
    } else {
      {
        setError(true);
      }
    }
  }

  return (
    <section className="vh-50 bg-image">
      <div className="mask d-flex align-items-center h-100 gradient-custom-3">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
              <div className="card">
                <div className="card-body p-5">
                  <h2 className="text-uppercase text-center mb-5">
                    Login to Application
                  </h2>

                  <div
                    className="error"
                    style={{
                      display: error ? "" : "none",
                      textAlign: "center",
                      color: "red",
                      fontSize: "18px",
                      fontStyle: "italic",
                      fontWeight: "bold",
                    }}
                  >
                    <p>
                      Invalid Email Or Password...<br></br>
                    </p>
                  </div>
                  <form onSubmit={submitHandler}>
                    <label htmlFor="email">
                      <h6>E-Mail / UserName</h6>
                    </label>
                    <br></br>
                    <input
                      type="text"
                      id="email"
                      className="form-control"
                      placeholder="E-mail"
                      required={true}
                      ref={emailRef}
                    />
                    <br></br>
                    <label htmlFor="password">
                      <h6>Password:</h6>
                    </label>
                    <br></br>
                    <input
                      type="text"
                      id="password"
                      className="form-control"
                      placeholder="Password"
                      required={true}
                      ref={passwordRef}
                    />
                    <br></br>
                    <br></br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
                    <button type="submit" className="btn btn-primary">
                      Login
                    </button>
                    &nbsp;&nbsp;
                    <button
                      type="button"
                      className="btn btn-primary"
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
