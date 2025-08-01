import React from "react";
import "../Styles/Footer.css";
import Chatbot from "../Chatbot/Chatbot";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="ext-white pt-4 pb-2">
      <div className="container-footer">
        <div className="text-white pt-4 pb-2">
          <div className="row">
            <div className="col-md-3 mb-3">
              <h5>About Us</h5>
              <p>we are committed to better Service Low Price and Flexible</p>
            </div>

            <div className="col-md-3">
              <div className="quick-links">
                <h5>Quick Links</h5>
                <ul className="list-unstyled">
                  <li>
                    <a
                      href="/BookFlight"
                      className="text-white text-decoration-none"
                    >
                      BookFlight
                    </a>
                  </li>
                  <li>
                    <a
                      href="/YourFlights"
                      className="text-white text-decoration-none"
                    >
                      YourFlights
                    </a>
                  </li>
                  <li>
                    <a
                      href="/MyBooking"
                      className="text-white text-decoration-none"
                    >
                      MyBooking
                    </a>
                  </li>
                  <li>
                    <a href="/Contact" className="text-white text-decoration-none">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 mb-12">
              <h5>Contact Us</h5>
              <p>Email:gulamnoxbondy@gmail.com</p>
              <p>Phone: +46769072199</p>
            </div>

            <div className="col-md-3 mb-12">
              <h5>Social-icons</h5>
              <div className="social-icons">
                <a href="https://github.com/noxbondy">
                  <FaFacebook />
                </a>
                <a href="https://instagram.com/noxbondy">
                  <FaInstagramSquare />
                </a>
                <a href="https://youtube.com/noxbondy">
                  <FaYoutube />
                </a>
              </div>

              <Chatbot />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
