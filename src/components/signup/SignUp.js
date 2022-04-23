import "./SignUp.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="sign-up">
      <div>
        <h2>Sign Up</h2>
        <form>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="" id="" required />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="" id="" required />
          </div>
          <div className="input-group">
            <label htmlFor="password">Confirm Password</label>
            <input type="password" name="" id="" required />
          </div>
          <input className="form-submit" type="submit" value="SignUp" />
        </form>
        <p style={{ textAlign: "center" }}>
          Already have account?{" "}
          <Link className="form-link" to="/login">
            Login
          </Link>
        </p>
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

export default SignUp;
