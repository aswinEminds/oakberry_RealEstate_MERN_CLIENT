import React from "react";
import "./home.css";
import Carousel from "react-bootstrap/Carousel";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import SecondaryButton from "../../components/buttons/SecondaryButton";
import { RiLandscapeLine } from "react-icons/ri";
import { HiOutlineHomeModern } from "react-icons/hi2";
import { BsBuildings } from "react-icons/bs";
import { MdOutlineTempleHindu } from "react-icons/md";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="home-parent">
        <div className="hero-section">
          <Carousel interval={2000}>
            <Carousel.Item>
              <img
                src="https://preview.colorlib.com/theme/oakberry/images/bg_1.jpg"
                alt=""
              />
              <Carousel.Caption>
                <h1>Your Property Is Our Priority</h1>
                <p>
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia. It is a paradisematic country,
                  in which roasted parts of sentences fly into your mouth.
                </p>
                <PrimaryButton text="Learn More →" />
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                src="https://preview.colorlib.com/theme/oakberry/images/bg_2.jpg"
                alt=""
              />
              <Carousel.Caption>
                <h1>Let Your Home Be Unique & Stylist</h1>
                <p>
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia. It is a paradisematic country,
                  in which roasted parts of sentences fly into your mouth.
                </p>
                <PrimaryButton text="Learn More →" />
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                src="https://preview.colorlib.com/theme/oakberry/images/bg_3.jpg"
                alt=""
              />
              <Carousel.Caption>
                <h1>Modern House Make Better Life</h1>
                <p>
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia. It is a paradisematic country,
                  in which roasted parts of sentences fly into your mouth.
                </p>
                <PrimaryButton text="Learn More →" />
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          <div className="filter-box container">
            <div className="filter-buttons">
              <SecondaryButton text="Buy Properties" />
              <PrimaryButton text="Sell Properties" />
            </div>
            <div className="filter-options">
              <div className="filters">
                <p>Enter Keyword</p>
                <input
                  className="filter-search"
                  type="text"
                  placeholder="Enter Keyword"
                />
              </div>
              <div className="filters">
                <p>Property Type </p>
                <select name="" id="" className="filter-dropdown">
                  <option value="">Residential</option>
                  <option value="">Commercial</option>
                  <option value="">Land</option>
                  <option value="">Industrial</option>
                </select>
              </div>
              <div className="filters">
                <p>Location</p>{" "}
                <input
                  className="filter-search"
                  type="text"
                  placeholder="Enter Location"
                />
              </div>
              <div className="filters">
                <p>Price Limit</p>
                <select name="" id="" class="filter-dropdown">
                  <option value="">$100</option>
                  <option value="">$10,000</option>
                  <option value="">$50,000</option>
                  <option value="">$100,000</option>
                  <option value="">$200,000</option>
                  <option value="">$300,000</option>
                  <option value="">$400,000</option>
                  <option value="">$500,000</option>
                  <option value="">$600,000</option>
                  <option value="">$700,000</option>
                  <option value="">$800,000</option>
                  <option value="">$900,000</option>
                  <option value="">$1,000,000</option>
                  <option value="">$2,000,000</option>
                </select>
              </div>
              <div className="filters filter-button">
                <p>Search</p>
              </div>
            </div>
          </div>
        </div>

        {/* category Section */}

        <section className="container section categories-section">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <p className="subHeading">Oakberry Categories</p>
            <h1 className="heading">Explore Our Categories & Places</h1>
          </div>
          <div className="categories">
            <div
              onClick={() => {
                console.log("Helloo");
              }}
              className="category"
            >
              <RiLandscapeLine size="64px" />
              <p className="m-0">Land</p>
            </div>
            <div className="category">
              <HiOutlineHomeModern size="64px" />
              <p className="m-0">Residential</p>
            </div>
            <div className="category">
              <BsBuildings size="64px" />
              <p className="m-0">Commercial</p>
            </div>
            <div className="category">
              <MdOutlineTempleHindu size="64px" />
              <p className="m-0">Industrial</p>
            </div>
          </div>
          <div className="places">
            <ul className="places-list">
              <li>
                <Link to="/">
                  <div>
                    <p>Channei</p>
                    <p className="count">200 Properties</p>
                  </div>
                  <hr />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <div>
                    <p>Channei</p>
                    <p className="count">200 Properties</p>
                  </div>
                  <hr />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <div>
                    <p>Channei</p>
                    <p className="count">200 Properties</p>
                  </div>
                  <hr />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <div>
                    <p>Channei</p>
                    <p className="count">200 Properties</p>
                  </div>
                </Link>
              </li>
            </ul>
            <ul className="places-list">
              <li>
                <Link to="/">
                  <div>
                    <p>Channei</p>
                    <p className="count">200 Properties</p>
                  </div>
                  <hr />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <div>
                    <p>Channei</p>
                    <p className="count">200 Properties</p>
                  </div>
                  <hr />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <div>
                    <p>Channei</p>
                    <p className="count">200 Properties</p>
                  </div>
                  <hr />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <div>
                    <p>Channei</p>
                    <p className="count">200 Properties</p>
                  </div>
                </Link>
              </li>
            </ul>{" "}
            <ul className="places-list">
              <li>
                <Link to="/">
                  <div>
                    <p>Channei</p>
                    <p className="count">200 Properties</p>
                  </div>
                  <hr />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <div>
                    <p>Channei</p>
                    <p className="count">200 Properties</p>
                  </div>
                  <hr />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <div>
                    <p>Channei</p>
                    <p className="count">200 Properties</p>
                  </div>
                  <hr />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <div>
                    <p>Channei</p>
                    <p className="count">200 Properties</p>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
