import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { RiFacebookFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { BsFillSendFill } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer-parent ">
      <div className="container">
        <div className="footer-contents">
          <div className="company">
            <div class="logo">
              <h3 class="m-0 logo-head">Oakberry</h3>
              <p class="m-0 logo-sub">Real Estate Agency</p>
            </div>
            <p style={{ color: "rgba(255, 255, 255, 0.7)" }}>
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia.
            </p>
            <div className="social-icons">
              <RiFacebookFill className="icon" />

              <FaTwitter className="icon" />

              <FaInstagram className="icon" />
            </div>
          </div>
          <div className="links">
            <h2>Offers</h2>
            <ul>
              <li>
                <Link>
                  <IoIosArrowForward />
                  <p>Properties</p>
                </Link>
              </li>
              <li>
                <Link>
                  <IoIosArrowForward />
                  <p>Agents</p>
                </Link>
              </li>
              <li>
                <Link>
                  <IoIosArrowForward />
                  <p>Locations</p>
                </Link>
              </li>
              <li>
                <Link>
                  <IoIosArrowForward />
                  <p>Client support</p>
                </Link>
              </li>
            </ul>
          </div>
          <div className="links">
            <h2>Company</h2>
            <ul>
              <li>
                <Link>
                  <IoIosArrowForward />
                  <p>Home</p>
                </Link>
              </li>
              <li>
                <Link>
                  <IoIosArrowForward />
                  <p>About</p>
                </Link>
              </li>
              <li>
                <Link>
                  <IoIosArrowForward />
                  <p>Blog</p>
                </Link>
              </li>
              <li>
                <Link>
                  <IoIosArrowForward />
                  <p>Contact Us</p>
                </Link>
              </li>
            </ul>
          </div>
          <div className="links">
            <h2>Quick Links</h2>
            <ul>
              <li>
                <Link>
                  <IoIosArrowForward />
                  <p>Teams & Conditions</p>
                </Link>
              </li>
              <li>
                <Link>
                  <IoIosArrowForward />
                  <p>User's Guide</p>
                </Link>
              </li>
              <li>
                <Link>
                  <IoIosArrowForward />
                  <p>Support Center</p>
                </Link>
              </li>
              <li>
                <Link>
                  <IoIosArrowForward />
                  <p>Press Info</p>
                </Link>
              </li>
            </ul>
          </div>
          <div className="links">
            <h2>Have a Qoution?</h2>
            <ul>
              <li>
                <Link>
                  <IoLocationSharp color="#5ea41d" size={36} />
                  <p>
                    203 Fake St. Mountain View, San Francisco, California, USA
                  </p>
                </Link>
              </li>
              <li>
                <Link>
                  <FaPhoneAlt color="#5ea41d" />
                  <p> +2 392 3929 210 </p>
                </Link>
              </li>
              <li>
                <Link>
                  <BsFillSendFill color="#5ea41d" />
                  <p> info@yourdomain.com</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="copyrights">
          <p>
            Copyright ©2024 All rights reserved | This Website is made with ❤︎
            by <span style={{ fontWeight: "bolder" }}>Aswin</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
