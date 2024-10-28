import React, { useState } from "react";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "./auth.css";
import { register } from "../../api/user_api";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);
  const [mobileNumber, setMobileNumber] = useState("");

  const navigate = useNavigate();

  const submitForm = async (e) => {
    e.preventDefault();
    const res = await register(
      name,
      email,
      mobileNumber,
      password,
      profilePicture
    );

    if (res === "Registed Successfully") {
      alert("Account Created Successfully!");
      navigate("/");
    } else {
      alert("Error Creating Account");
    }
  };
  return (
    <div className="auth-parent">
      <div className="container">
        <div className="auth-form">
          <form>
            <input
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              type="text"
              className="input-field"
              required
              placeholder="Name"
            />
            <input
              type="email"
              value={email}
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="input-field"
              placeholder="Email"
            />
            <input
              type="number"
              value={mobileNumber}
              required
              onChange={(e) => {
                setMobileNumber(e.target.value);
              }}
              className="input-field"
              placeholder="Mobile Number"
            />
            <input
              type="text"
              value={password}
              required
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className="input-field"
              placeholder="Password"
            />
            <input
              type="password"
              value={confirmPassword}
              required
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
              className="input-field"
              placeholder="Confirm-Password"
            />
            <label htmlFor="profile" className="profile-button">
              Upload Image
            </label>
            <input
              type="file"
              // value={profilePicture}
              required
              onChange={(e) => {
                setProfilePicture(e.target.files[0]);
              }}
              className="profile"
              id="profile"
            />
            <PrimaryButton onClick={submitForm} text="Register" />
          </form>
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
