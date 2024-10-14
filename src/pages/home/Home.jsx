import React, { useEffect } from "react";
import "./home.css";
import Carousel from "react-bootstrap/Carousel";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import SecondaryButton from "../../components/buttons/SecondaryButton";
import { RiLandscapeLine } from "react-icons/ri";
import { HiOutlineHomeModern } from "react-icons/hi2";
import { BsBuildings } from "react-icons/bs";
import { MdOutlineTempleHindu } from "react-icons/md";
import { Link } from "react-router-dom";
import PropertyCard from "../../components/cards/propertycard/PropertyCard";
import { IoPlaySharp } from "react-icons/io5";
import AOS from "aos";
import "aos/dist/aos.css";
import VideoCard from "../../components/cards/videoCard/VideoCard";
import AboutUsCard from "../../components/cards/AboutUsCard/AboutUsCard";
import GetInTouchBanner from "../../components/banners/Getintouch/GetInTouchBanner";
import TestimonialCard from "../../components/cards/testimonialCard/TestimonialCard";
import Testimonials from "../../components/banners/testinomials/Testimonials";
import AgentCard from "../../components/cards/agentcard/AgentCard";
import ImagesBanner from "../../components/banners/imagesBanner/ImagesBanner";
function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

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
              <Carousel.Caption
                data-aos="fade-up"
                data-aos-easing="ease-in-out"
                data-aos-duration="800"
              >
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
              <Carousel.Caption
                data-aos="fade-up"
                data-aos-easing="ease-in-out"
                data-aos-duration="800"
              >
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
              <Carousel.Caption
                data-aos="fade-up"
                data-aos-easing="ease-in-out"
                data-aos-duration="800"
              >
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
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-duration="800"
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
              data-aos="fade-up"
              data-aos-easing="ease-in-out"
              data-aos-delay="100"
              data-aos-duration="800"
            >
              <RiLandscapeLine size="64px" />
              <p className="m-0">Land</p>
            </div>
            <div
              className="category"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-easing="ease-in-out"
              data-aos-duration="800"
            >
              <HiOutlineHomeModern size="64px" />
              <p className="m-0">Residential</p>
            </div>
            <div
              className="category"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-easing="ease-in-out"
              data-aos-duration="800"
            >
              <BsBuildings size="64px" />
              <p className="m-0">Commercial</p>
            </div>
            <div
              className="category"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-easing="ease-in-out"
              data-aos-duration="800"
            >
              <MdOutlineTempleHindu size="64px" />
              <p className="m-0">Industrial</p>
            </div>
          </div>
          <div className="places">
            <ul
              className="places-list"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-easing="ease-in-out"
              data-aos-duration="800"
            >
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
            <ul
              className="places-list"
              data-aos="fade-up"
              data-aos-easing="ease-in-out"
              data-aos-duration="800"
              data-aos-delay="200"
            >
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
            <ul
              className="places-list"
              data-aos="fade-up"
              data-aos-easing="ease-in-out"
              data-aos-duration="800"
              data-aos-delay="300"
            >
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
        <section className="grey-section">
          {/* properties section */}
          <section className="featured-properties section">
            <div className="container">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
                data-aos="fade-up"
                data-aos-easing="ease-in-out"
                data-aos-duration="300"
              >
                <p className="subHeading">Our Properties</p>
                <h1 className="heading">Featured Properties</h1>
              </div>
              <div className="properties">
                <div
                  data-aos="fade-up"
                  data-aos-delay="200"
                  data-aos-easing="ease-in-out"
                  data-aos-duration="800"
                >
                  <PropertyCard />
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-easing="ease-in-out"
                  data-aos-duration="800"
                >
                  <PropertyCard />
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-easing="ease-in-out"
                  data-aos-duration="800"
                >
                  <PropertyCard />
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-delay="400"
                  data-aos-easing="ease-in-out"
                  data-aos-duration="800"
                >
                  <PropertyCard />
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-delay="500"
                  data-aos-easing="ease-in-out"
                  data-aos-duration="800"
                >
                  <PropertyCard />
                </div>
              </div>
            </div>
          </section>
          {/* video section */}
          <VideoCard />
        </section>
        <AboutUsCard />
        <Testimonials />
        <section className="agents">
          <div className="agents-overlay"></div>
          <div className="container">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "start",
                flexDirection: "column",
              }}
              data-aos="fade-up"
              data-aos-easing="ease-in-out"
              data-aos-duration="300"
            >
              <p className="subHeading">Our Properties</p>
              <h1 className="heading" style={{ color: "white" }}>
                Featured Properties
              </h1>
            </div>
            <div className="agents-list">
              <AgentCard />
              <AgentCard />
              <AgentCard />
              <AgentCard />
            </div>
          </div>
        </section>
        <ImagesBanner />
      </div>
    </>
  );
}

export default Home;
