import { Carousel } from "antd";
import { Row, Col } from "antd";
import gallery1 from "./../images/gallery1.jpeg";
import gallery2 from "./../images/gallery2.jpeg";
import gallery3 from "./../images/gallery3.jpeg";
import gallery4 from "./../images/gallery4.jpeg";
import gallery5 from "./../images/gallery5.jpeg";
import gallery6 from "./../images/gallery6.jpeg";
import gallery8 from "./../images/gallery8.jpeg";
import header from "./../images/header.jpg";
import { Link } from 'react-router-dom';
import "./Home.css";

const contentStyle = {
  height: "90vh",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

const Home = () => {
  return (
    <div style={{ zIndex: "5", position: "relative", top: "80px" }}>
      <Carousel autoplay>
        <div>
          <div style={{ ...contentStyle, backgroundImage: `url(${gallery1})` }}>
            Some Text
          </div>
        </div>
        <div>
          <div style={{ ...contentStyle, backgroundImage: `url(${gallery2})` }}>
            Some Text
          </div>
        </div>
        <div>
          <div style={{ ...contentStyle, backgroundImage: `url(${gallery3})` }}>
            Some Text
          </div>
        </div>
        <div>
          <div style={{ ...contentStyle, backgroundImage: `url(${gallery4})` }}>
            Some Text
          </div>
        </div>
      </Carousel>
      <Row>
        <Col xs={{ span: 11, push: 1, offset: 0 }} lg={{ span: 11, offset: 1 }}>
          <h2>Who We Are</h2>
          <hr />
          <p>Hello! Welcome to Tolobadun Imagery.</p>
          <p>
            Thank you for taking the time to look at my work. I hope you can see
            that I love what I do – which is all about the unique combination of
            the craft and the people. People like you who appreciate the value
            of great photography.
          </p>
          <p className="second-paragraph">
            We will be there with you every step of the way to guarantee your
            special moments are captured for all time. To us photography is
            about people being real and then letting us paint a picture of that
            moment to remember it forever.
          </p>
          <p className="second-paragraph">
            We are incredibly blessed to have a team of photographers who work
            with us on any given weekend. Please take a few minutes to get to
            know us. We would love to visit with you by phone or in person and
            talk about your wedding, event, portrait session or video project.
            Please reach out to us through the Contact Page.
          </p>
        </Col>
        <Col
          xs={{ span: 10, push: 1, offset: 1 }}
          lg={{ span: 8, offset: 2, pull: 2 }}
        >
          <img src={header} alt="picture" />
        </Col>
      </Row>

      <div className="row">
        <Link to="/services/portraits">
        <div className="column">
          <img src={gallery6} />
          <button className="centered">Portraits</button>
        </div>
        </Link>
        <Link to="/services/weddings">
        <div className="column">
          <img src={gallery5} />
          <button className="centered">Wedding Photography</button>
        </div>
        </Link>
        <Link to="/services/commercial">
          <div className="column">
            <img src={gallery8} />
            <button className="centered">Commercial</button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
