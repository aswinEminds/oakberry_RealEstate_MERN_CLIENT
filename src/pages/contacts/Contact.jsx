import React from "react";
import HeroSectionCard from "../../components/cards/HeroSectionCard/HeroSectionCard";
import "./contacts.css";
import SecondaryButton from "../../components/buttons/SecondaryButton";
import PrimaryButton from "../../components/buttons/PrimaryButton";

function Contact() {
  return (
    <div className="contact-parent">
      <HeroSectionCard pageName={"Contact us"} />
      <section className="contact-us">
        <div className="container">
          <div className="contact-us-form">
            <div className="headings">
              <h3>Contact us</h3>
              <p>We're open for any suggestion or just to have a chat</p>
            </div>
            <div className="contact-details">
              <div>
                <p>Address:</p>
                <span style={{ color: "gray" }}>
                  198 West 21th Street, Suite 721 New York NY 10016
                </span>
              </div>
              <div>
                <p>Email:</p>
                <span>aswin.g@eminds.ai</span>
              </div>
              <div>
                <p>Phone:</p>
                <span>123456789</span>
              </div>
            </div>
            <div className="contact-form">
              <input type="text" className="input-field" placeholder="Name" />
              <input type="email" className="input-field" placeholder="Email" />
              <input
                type="text"
                className="input-field"
                placeholder="Subject"
              />
              <textarea
                name=""
                id=""
                placeholder="Create a message here"
                className="input-field"
              ></textarea>
              <PrimaryButton text="SEND MESSAGE" />
            </div>
            <div className="follow-us">
              <h5>Follow us here</h5>
              <div>
                <a href="">FaceBook</a>
                <a href="">Twitter</a>
                <a href="">Instagram</a>
                <a href="">Dribble</a>
              </div>
            </div>
          </div>
          <div className="contact-us-image">
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/contact-us-illustration-download-in-svg-png-gif-file-formats--call-logo-customer-service-support-onboarding-pack-business-illustrations-4849052.png?f=webp"
              alt=""
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
