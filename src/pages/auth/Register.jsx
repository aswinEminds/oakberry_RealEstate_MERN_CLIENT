import React from "react";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import { Link } from "react-router-dom";
import "./auth.css";

function Register() {
  return (
    <div className="auth-parent">
      <div className="container">
        <div className="auth-form">
          <div>
            <input type="text" className="input-field" placeholder="Name" />
            <input type="email" className="input-field" placeholder="Email" />
            <input type="text" className="input-field" placeholder="Password" />
            <input
              type="password"
              className="input-field"
              placeholder="Confirm-Password"
            />
            <label htmlFor="profile" className="profile-button">
              Upload Image
            </label>
            <input type="file" className="profile" id="profile" />
            <PrimaryButton text="Register" />
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
            Excisting user ?
            <Link to="/login" style={{ color: "var(--primary-color)" }}>
              {"  Login-here"}
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

export default Register;
