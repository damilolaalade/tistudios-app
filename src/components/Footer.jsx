import "./Footer.css";
import {
  LinkedinOutlined,
  InstagramOutlined,
  WhatsAppOutlined,
  FacebookOutlined,
  RightOutlined,
  EnvironmentOutlined,
  PhoneOutlined,
  MailOutlined,
  GlobalOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-area">
      <div className="footer-wave-box">
        <div class="footer-wave footer-animation"></div>
      </div>
      <div className="main">
        <div className="footer">
          <div className="single-footer">
            <h4>Our Team</h4>
            <p className="footer-text">
              We use our extensive experience and expertise in the outdoors to
              plan unforgettable custom event for every client. We bring our
              full value to every single planning, we are just an email and a
              phone call away.
            </p>
            <div className="footer-social">
              <a href="">
                <InstagramOutlined
                  style={{
                    fontSize: "28px",
                    color: "rgb(179, 199, 64)",
                  }}
                />
              </a>
              <a href="">
                <WhatsAppOutlined
                  style={{
                    fontSize: "28px",
                    color: "rgb(179, 199, 64)",
                  }}
                />
              </a>
              <a href="">
                <FacebookOutlined
                  style={{
                    fontSize: "28px",
                    color: "rgb(179, 199, 64)",
                  }}
                />
              </a>
              <a href="">
                <LinkedinOutlined
                  style={{
                    fontSize: "28px",
                    color: "rgb(179, 199, 64)",
                  }}
                />
              </a>
            </div>
          </div>
          <div className="single-footer">
            <h4>Menu</h4>
            <ul>
              <li>
                <a href="">
                  <RightOutlined />
                  <Link to="/">Home</Link>
                </a>
              </li>
              <li>
                <a href="">
                  <RightOutlined />
                  <Link to="/about-us">About</Link>
                </a>
              </li>
              <li>
                <a href="">
                  <RightOutlined />
                  Testimonials
                </a>
              </li>
              <li>
                <a href="">
                  <RightOutlined />
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="single-footer">
            <h4>Links</h4>
            <ul>
              <li>
                <a href="">
                  <RightOutlined />
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="">
                  <RightOutlined />
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
          <div className="single-footer">
            <h4>Contact </h4>
            <ul>
              <li>
                <a href="">
                  <EnvironmentOutlined
                    style={{
                      fontSize: "28px",
                      margin: "5px",
                    }}
                  />
                  Oduduwa Street, Surulere, Lagos State.
                </a>
              </li>

              <li>
                <a href="">
                  <PhoneOutlined
                    style={{
                      fontSize: "28px",
                      margin: "5px",
                    }}
                  />
                  +234-8036297300
                </a>
              </li>
              <li>
                <a href="">
                  <MailOutlined
                    style={{
                      fontSize: "28px",
                      margin: "5px",
                    }}
                  />
                  tolobadunimagery@gmail.com
                </a>
              </li>
              <li>
                <a href="">
                  <GlobalOutlined
                    style={{
                      fontSize: "28px",
                      margin: "5px",
                    }}
                  />
                  www.tolobadunimagery.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="copy">
          <p className="footer-text">&copy;Tolobadun Imagery 2022.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
