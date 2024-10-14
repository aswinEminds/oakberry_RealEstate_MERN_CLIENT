import React, { useEffect } from "react";
import { IoPlaySharp } from "react-icons/io5";
import AOS from "aos";
import "aos/dist/aos.css";
import "./videoCard.css";

const VideoCard = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="video-section">
      <div className="image">
        <img
          src="https://preview.colorlib.com/theme/oakberry/images/bg_4.jpg"
          alt=""
        />
      </div>
      <div className="texts">
        <h1>Modern House Video</h1>
        <p>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.
        </p>
        <IoPlaySharp className="play" />
      </div>
    </section>
  );
};

export default VideoCard;
