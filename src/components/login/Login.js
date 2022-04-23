import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(email, password);
  };
  if (user) {
    navigate(from, { replace: true });
  }
  return (
    <div className="login">
      <div>
        <h2>Login</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              onBlur={handleEmailBlur}
              type="email"
              name=""
              id=""
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              onBlur={handlePasswordBlur}
              type="password"
              name=""
              id=""
              required
            />
          </div>
          <input
            onBlur={handleFormSubmit}
            className="form-submit"
            type="submit"
            value="Login"
          />
        </form>
        {loading ? (
          <p style={{ textAlign: "center", color: "salmon" }}></p>
        ) : (
          ""
        )}
        <p style={{ textAlign: "center" }}>
          New to Ema-John?{" "}
          <Link className="form-link" to="/signup">
            Create an account
          </Link>
        </p>
        {error?.message ? (
          <p style={{ textAlign: "center", color: "salmon" }}>
            {error.message}
          </p>
        ) : (
          ""
        )}
        <div className="separator">
          <div></div>
          <span>or</span>
          <div></div>
        </div>
        <button className="google-signin">
          <FontAwesomeIcon icon={faCoffee} />
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
