import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const userNameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const confirmPasswordRef = useRef("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  async function submitSignUp(event) {
    event.preventDefault();
    const user = {
      username: userNameRef.current.value,
      emailId: emailRef.current.value,
      password: passwordRef.current.value,
      confirmPassword: confirmPasswordRef.current.value,
    };

    const response = await fetch("http://localhost:8080/user/signup", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (user.password !== user.confirmPassword) {
      setError(true);
    }
    if (response.ok) {
      navigate("/login");
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
                    New User Registration
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
                      Password is not matching...<br></br>
                    </p>
                  </div>
                  <form onSubmit={submitSignUp}>
                    <label htmlFor="username">Username:</label>
                    <br></br>
                    <input
                      type="text"
                      id="username"
                      className="form-control"
                      placeholder="Username"
                      required={true}
                      ref={userNameRef}
                    />
                    <br></br>
                    <label htmlFor="email">Email-Id:</label>
                    <input
                      type="text"
                      id="email"
                      className="form-control"
                      placeholder="Email"
                      required={true}
                      ref={emailRef}
                    />
                    <br></br>
                    <label htmlFor="password">Password:</label>
                    <br></br>
                    <input
                      type="text"
                      id="password"
                      placeholder="Password"
                      className="form-control"
                      required={true}
                      ref={passwordRef}
                    />
                    <br></br>
                    <label htmlFor="cpassword">Confirm:</label>
                    <br></br>
                    <input
                      type="text"
                      id="cpassword"
                      className="form-control"
                      placeholder="Confirm Password"
                      required={true}
                      ref={confirmPasswordRef}
                    />
                    <br></br>
                    <button type="submit" className="btn btn-primary">
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
