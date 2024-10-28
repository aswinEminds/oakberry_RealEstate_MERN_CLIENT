import React, { useState } from "react";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import { Link, useNavigate } from "react-router-dom";
import "./auth.css";
import { login } from "../../api/user_api";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const submitForm = async (e) => {
    e.preventDefault();
    const res = await login(email, password);
    if (res.status === "Login Successfully") {
      alert("Login Successfully!");
      navigate("/");
      localStorage.setItem("token", res.token);
    } else {
      alert("Error LogIn");
    }
  };

  return (
    <div className="auth-parent">
      <div className="container">
        <div className="auth-form">
          <form>
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="input-field"
              placeholder="Email"
            />
            <input
              type="password"
              className="input-field"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              placeholder="Password"
            />
            <PrimaryButton onClick={submitForm} text="Login" />
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
            New user ?
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
