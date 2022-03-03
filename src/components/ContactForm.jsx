import "./Contact.css";
import {
  ClockCircleOutlined,
  EnvironmentOutlined,
  MailOutlined,
  MobileOutlined,
  LinkedinOutlined,
  InstagramOutlined,
  WhatsAppOutlined,
  FacebookOutlined,
} from "@ant-design/icons";
import connect from "./../images/connect.jpeg";

const ContactForm = () => {
  return (
    <section class="contact-section">
      <div class="contact-bg">
        <h3>Get in Touch with Us</h3>
        <div class="line">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <p class="text">
          At Tolobadun Imagery, we pride ourselves in ensuring our clients have
          the best experience from start to finish... We would like to hear from
          you.
        </p>
      </div>

      <div class="contact-body">
        <div class="contact-info">
          <div>
            <span>
              <MobileOutlined
                style={{
                  fontSize: "28px",
                  color: "rgb(179, 199, 64)",
                }}
              />
            </span>
            <span>Phone No.</span>
            <span class="text">+234 8036297300</span>
          </div>
          <div>
            <span>
              <MailOutlined
                style={{
                  fontSize: "28px",
                  color: "rgb(179, 199, 64)",
                }}
              />
            </span>
            <span>E-mail</span>
            <span class="text">mail@tolobadunimagery.com</span>
          </div>
          <div>
            <span>
              <EnvironmentOutlined
                style={{
                  fontSize: "28px",
                  color: "rgb(179, 199, 64)",
                }}
              />
            </span>
            <span>Address</span>
            <span class="text">39 Patrick Street, Surulere,Lagos,Nigeria</span>
          </div>
          <div>
            <span>
              <ClockCircleOutlined
                style={{
                  fontSize: "28px",
                  color: "rgb(179, 199, 64)",
                }}
              />
            </span>
            <span>Opening Hours</span>
            <span class="text">Monday - Saturday (9:00 AM to 5:00 PM)</span>
          </div>
        </div>

        <div class="contact-form">
          <form>
            <div>
              <input
                type="text"
                class="form-control"
                placeholder="First Name"
              />
              <input type="text" class="form-control" placeholder="Last Name" />
            </div>
            <div>
              <input type="email" class="form-control" placeholder="E-mail" />
              <input type="text" class="form-control" placeholder="Phone" />
            </div>
            <textarea
              rows="5"
              placeholder="Message"
              class="form-control"
            ></textarea>
            <input type="submit" class="send-btn" value="send message" />
          </form>

          <div>
            <img src={connect} alt="" />
          </div>
        </div>
      </div>

      {/* <div class="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63428.02858255801!2d3.312841533536913!3d6.489768148117441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8c1aaf26ce7d%3A0x4d2fd698b58de1a3!2sSurulere%2C%20Ikeja!5e0!3m2!1sen!2sng!4v1646269549494!5m2!1sen!2sng"
          width="100%"
          height="450"
          frameborder="0"
          style="border:0;"
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
        ></iframe>
      </div> */}
      <div class="contact-footer">
        <h3>Follow Us</h3>
        <div class="social-links">
          <a href="#">
            <WhatsAppOutlined  />
          </a>
          <a href="#">
            <InstagramOutlined />
          </a>
          <a href="#">
            <FacebookOutlined />
          </a>
          <a href="#">
            <LinkedinOutlined />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
