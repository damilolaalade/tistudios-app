import { useEffect } from "react";
import "./About.css";

const AboutUsText = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="overflow">
      <div className="what-we-do">
        <p className="what-we-do-text">
          Tolobadun Imagery is a professional photography company. We are a team
          of photographers who work very hard to ensure that your special day is
          captured forever. We have a strong passion for weddings and portrait
          work.
          <br />
          We strive to make your wedding day as comfortable and enjoyable as
          possible. When you hire us you will get an unobtrusive approach, while
          capturing the moments of your special event. The most important job to
          us is your job.
          <br />
          We never double book and our customer service is just as important as
          the images themselves. Light, texture, dimension, mood, anticipation,
          passion, emotion, energy, romance and relationships, are the most
          important ingredients necessary to make great photographs at your
          wedding.
          <br />
          Our goal is to capture the essence of who you are naturally. I promise
          you that no one will work harder to capture these special moments of
          your day.
        </p>
      </div>
      <div className="aside">
        <h2 className="aside-header">Philosophy</h2>
        <p className="section">
          People always look better when they are natural and being themselves.
          Rather than forced poses we let it flow and capture moments as they
          unfold. Many years of experience also sets us apart. Rain or shine,
          our clients have peace of mind that their images will be amazing.A
          Tolobadun Imagery has a very unique look - it's the soft, flattering
          lighting, beautiful composition, together with the emotion that really
          captures the entire story of the day.
        </p>
      </div>
      <img
        src="https://images.pexels.com/photos/3679525/pexels-photo-3679525.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        alt="camera-lens"
        className="lens"
      />
    </div>
  );
};

export default AboutUsText;
