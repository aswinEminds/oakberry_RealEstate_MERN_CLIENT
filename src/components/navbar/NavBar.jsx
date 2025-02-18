import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./navBar.css";
import PrimaryButton from "../buttons/PrimaryButton";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

function NavBar() {
  const [isMobileMenuVisbile, setMobileMenuVisible] = useState(false);

  const openMenu = () => {
    setMobileMenuVisible(!isMobileMenuVisbile);
  };

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const check = localStorage.getItem("token");
    if (check) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <header
      className={` navbar-parent ${isMobileMenuVisbile ? "mobile-menu " : ""}"`}
    >
      <div className="container-xl">
        <div className="logo">
          <h3 className="m-0 logo-head">Oakberry</h3>
          <p className="m-0 logo-sub">Real Estate Agency</p>
        </div>
        <nav className="menu-items">
          <ul className="m-0 p-0">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="properties">Properties</Link>
            </li>
            <li>
              <Link to="/agents">Agents</Link>
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
            <li>
              <Link to="/contacts">Contacts</Link>
            </li>
          </ul>
        </nav>
        <div className="user">
          <Link to={isLoggedIn ? "/addProperty" : "/login"}>
            <PrimaryButton
              text={isLoggedIn ? "Add Property" : "Login"}
              isRounded={true}
            />
          </Link>
        </div>
        <Link onClick={openMenu} className="menu-button">
          {isMobileMenuVisbile ? <IoClose /> : <GiHamburgerMenu />}
          <p className="p-0 m-0">MENU</p>
        </Link>
      </div>
      <nav className="menu-items-mobile">
        <ul className="m-0 p-0">
          <li>
            <Link onClick={openMenu} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link onClick={openMenu} to="/about">
              About
            </Link>
          </li>
          <li>
            <Link onClick={openMenu} to="properties">
              Properties
            </Link>
          </li>
          <li>
            <Link onClick={openMenu} to="/agents">
              Agents
            </Link>
          </li>
          <li>
            <Link onClick={openMenu} to="/blogs">
              Blogs
            </Link>
          </li>
          <li>
            <Link onClick={openMenu} to="/contacts">
              Contacts
            </Link>
          </li>
        </ul>
      </nav>
      <div className="user-mobile">
        <PrimaryButton
          text={isLoggedIn ? "Add Property" : "Login"}
          isRounded={true}
        />
      </div>
    </header>
  );
}

export default NavBar;
