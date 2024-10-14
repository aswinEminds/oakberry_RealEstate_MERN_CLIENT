import React from "react";
import HeroSectionCard from "../../components/cards/HeroSectionCard/HeroSectionCard";
import AboutUsCard from "../../components/cards/AboutUsCard/AboutUsCard";
import VideoCard from "../../components/cards/videoCard/VideoCard";
import GetInTouchBanner from "../../components/banners/Getintouch/GetInTouchBanner";
import Testimonials from "../../components/banners/testinomials/Testimonials";
import ImagesBanner from "../../components/banners/imagesBanner/ImagesBanner";

function About() {
  return (
    <div className="about-parent">
      <HeroSectionCard pageName={"About us"} />
      <AboutUsCard />
      <VideoCard />
      <GetInTouchBanner />
      <Testimonials />
      <ImagesBanner />
    </div>
  );
}

export default About;
