import React from "react";
import RoomIcon from "@mui/icons-material/Room";
import CallIcon from "@mui/icons-material/Call";
import TelegramIcon from "@mui/icons-material/Telegram";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

import "./Footer.css";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer class="footer-section">
      <div class="container">
        <div class="footer-cta pt-5 pb-5">
          <div class="row">
            <div class="col-xl-4 col-md-4 mb-30">
              <div class="single-cta">
                <RoomIcon className="locIcon" />
                <div class="cta-text">
                  <h4>Find us</h4>
                  <span>
                    Eastern zone office. Syama comitee market, 5th floor, Near
                    devi gajadhar chak devi mandir golapar, 801503 patna bihar
                  </span>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-md-4 mb-30">
              <div class="single-cta">
                <CallIcon className="locIcon" />
                <div class="cta-text">
                  <h4>Call us</h4>
                  <span>9472232821</span>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-md-4 mb-30">
              <div class="single-cta">
                <MailOutlineIcon className="locIcon" />
                <div class="cta-text">
                  <h4>Mail us</h4>
                  <span>infowyamro@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-content pt-5 pb-5">
          <div class="row">
            <div class="col-xl-4 col-lg-4 mb-50">
              <div class="footer-widget">
                <div class="footer-logo">
                  <img
                    src={`/images/Logo2jpg.jpg`}
                    class="img-fluid"
                    alt="logo"
                  />
                </div>
                <div class="footer-text">
                  <p>
                    The objective of the Wyamro Foundation is to bring yoga,
                    naturopathy, and Ayurveda, along with other alternative
                    medicines like acupuncture, homeopathy, etc., to the general
                    public in India.
                  </p>
                </div>
                <div class="footer-social-icon">
                  <span>Follow us</span>
                  <a href="https://www.facebook.com/wyamro?mibextid=ZbWKwL">
                    <FacebookIcon />{" "}
                  </a>
                  <a href="https://twitter.com/WyamroF?t=GI6v5dtnkQxwNo0cTKnfgw&s=08">
                    <TwitterIcon />
                  </a>
                  <a href="https://www.instagram.com/wyamro_foundation/">
                    <InstagramIcon />{" "}
                  </a>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
              <div class="footer-widget">
                <div class="footer-widget-heading">
                  <h3>Useful Links</h3>
                </div>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="aboutUs">about</Link>
                  </li>
                  <li>
                    <Link to="admissionForm">Admission Form</Link>
                  </li>
                  <li>
                    <Link to="/tour">wYamro Tours</Link>
                  </li>
                  <li>
                    <Link to="contactUs">Contact</Link>
                  </li>
                  <li>
                    <Link to="aboutUs">About us</Link>
                  </li>
                  <li>
                    <Link to="admissionForm">Admission</Link>
                  </li>
                  <li>
                    <Link to="contactUs">Expert Team</Link>
                  </li>
                  <li>
                    <Link to="contactUs">Contact us</Link>
                  </li>
                  {/* <li>
                    <a href="#">Latest News</a>
                  </li> */}
                </ul>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-6 mb-50">
              <div class="footer-widget">
                <div class="footer-widget-heading">
                  <h3>Subscribe</h3>
                </div>
                <div class="footer-text mb-25">
                  <p>
                    Don’t miss to subscribe to our new feeds, kindly fill the
                    form below.
                  </p>
                </div>
                <div class="subscribe-form">
                  <form action="#">
                    <input type="text" placeholder="Email Address" />
                    <button>
                      <TelegramIcon />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="copyright-area">
        <div class="container">
          <div class="row">
            <div class="col-xl-6 col-lg-6 text-center text-lg-left">
              <div class="copyright-text">
                <p>
                  Copyright &copy; 2018, All Right Reserved{" "}
                  <Link to="/">wYamro</Link>{" "}
                </p>
              </div>
            </div>
            <div class="col-xl-6 col-lg-6 d-none d-lg-block text-right">
              <div class="footer-menu">
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/aboutUs">About</Link>
                  </li>
                  <li>
                    <Link to="/tour">wYamro Tours</Link>
                  </li>
                  <li>
                    <Link to="admissionForm">Admission</Link>
                  </li>
                  <li>
                    <Link to="contactUs">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
