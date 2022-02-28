import { Carousel } from "antd";
import { Row, Col } from "antd";
import gallery1 from "./../images/gallery1.jpeg";
import gallery2 from "./../images/gallery2.jpeg";
import gallery3 from "./../images/gallery3.jpeg";
import gallery4 from "./../images/gallery4.jpeg";
import gallery5 from "./../images/gallery5.jpeg";
import gallery6 from "./../images/gallery6.jpeg";
import gallery8 from "./../images/gallery8.jpeg";
import header from "./../images/header.jpeg";
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
          <p>Hello!</p>
          <p>
            We are excited to have you drop by at our digital home, Thank you.
            We specialize in wedding photography, corporate, family and senior
            portraits, often traveling to your destination to capture the
            perfect moment in the perfect place.
          </p>
          <p className="second-paragraph">
            We will be there with you every step of the way to guarantee your
            special moments are captured for all time. To us photography is
            about people being real and then letting us paint a picture of that
            moment to remember it forever.
          </p>
          <p className="second-paragraph">
            This is the story that matters most: real people, real stories, real
            moments. We are incredibly blessed to have a team of photographers
            who work with us on any given weekend. Please take a few minutes to
            get to know us. We would love to visit with you by phone or in
            person and talk about your wedding, event, portrait session or video
            project. Please reach out to us through the Contact Page.
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
        <div className="column">
          <img src={gallery6} />
          <button className="centered">Portraits</button>
        </div>
        <div className="column">
          <img src={gallery5} />
          <button className="centered">Wedding Photography</button>
        </div>
        <div className="column">
          <img src={gallery8} />
          <button className="centered">Products Photography</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
