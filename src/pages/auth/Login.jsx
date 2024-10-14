import React from "react";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import { Link } from "react-router-dom";
import "./auth.css";

function Login() {
  return (
    <div className="auth-parent">
      <div className="container">
        <div className="auth-form">
          <div>
            <input type="email" className="input-field" placeholder="Email" />
            <input
              type="password"
              className="input-field"
              placeholder="Password"
            />
            <PrimaryButton text="Login" />
          </div>
          <Link style={{ width: "100%", textAlign: "end" }}>
            Forgot password?
          </Link>
          <p
            style={{
              width: "100%",
              textAlign: "center",
              color: "white",
              paddingTop: "2rem",
            }}
          >
            New user ?{" "}
            <Link to="/register" style={{ color: "var(--primary-color)" }}>
              Register-here
            </Link>
          </p>
        </div>
        <div className="image">
          <img
            src="https://preview.colorlib.com/theme/oakberry/images/bg_4.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
