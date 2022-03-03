import "./Newsletter.css";
import { MailOutlined } from "@ant-design/icons";

const Newsletter = () => {
  return (
    <div className="wrapper">
      <form action="" className="action">
        <h2>Join our Mailing List!</h2>
        <p>
          Subscribe to receive email updates on special promotions and More.
        </p>
        <div className="email-box">
          <MailOutlined
            style={{
              fontSize: "32px",
              color: "#c0bdbd",
              backgroundColor: "#58530c",
              width: "40px",
              lineHeight: "50px",
              marginRight: "1px",
            }}
          />
          <input
            className="tbox"
            type="email"
            name="email"
            placeholder="Enter your e-mail"
          />
          <button type="button" className="btn">
            Subscribe
          </button>
        </div>
      </form>
    </div>
  );
};

export default Newsletter;
