import React, { useState } from "react";

const Login = (props) => {
  const handleLogin = () => {
    props.history.push("/contactUs");
  };
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div class="h-100 d-flex align-items-center justify-content-center">
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
        <button type="submit" class="btn btn-primary" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
