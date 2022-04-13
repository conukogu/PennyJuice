import React from "react";
import "./Footer.css";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
function Footer() {
  return (
    <>
      <section className="padding">
        <section className="new-contact">
          <div>
            <h1>Contact Us</h1>
            <p>Call: +1 (336) 333 333</p>
            <p>Email: pennyjuice65@gmail.com</p>
            <p>Mon to Fri 11 pm - 7 am</p>
          </div>
          <div>
            <h1>Visit Us</h1>
            <p>Envoy So. California</p>
            <p>24 Honey, Ste</p>
            <p>Building 2</p>
          </div>
          <div>
            <h1>Social Media</h1>
            <div>
              <a href="twitter.com/lang=en">
                <AiFillTwitterCircle /> pennyjuice@twitter.com
              </a>
            </div>
            <div>
              <a href="github.com">
                <AiOutlineGithub /> pennyjuice34
              </a>
            </div>
            <div>
              <a href="instagram.com">
                <AiOutlineInstagram /> penny_juice
              </a>
            </div>
          </div>
        </section>
        <div className="foot-content">
          <p className="p1">About Us</p>
          <p className="p2">Privacy Policy</p>
          <p className="p3">Conditions of Use</p>
          <p className="p4">Web Accessibility</p>
          <p className="p5">Contact Us</p>
        </div>
        <p className="copyright">
          @2022 The content on this website is publicly free to use. Please
          contact for any additional questions.
        </p>
      </section>
    </>
  );
}

export default Footer;
