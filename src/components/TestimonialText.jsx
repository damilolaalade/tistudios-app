import "./Testimonial.css";
import testimonial1 from "./../images/testimonial1.jpeg";
import testimonial2b from "./../images/testimonial2.jpeg";
import testimonial3 from "./../images/testimonial3.jpeg";
import testimonial6 from "./../images/testimonail6.jpeg";

const TestimonialText = () => {
  return (
    <div className="testimonial-wrapper">
      <h2>What our Clients are Saying!</h2>
      {/* first testimonial */}
      <div className="section-container">
        <div
          className="columns image"
          style={{ backgroundImage: `url(${testimonial6})` }}
        >
          &nbsp;
        </div>
        <div className="columns content">
          <div className="content-container">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <em>--Dencia Aloha</em>
          </div>
        </div>
      </div>

      {/* second testimonial */}
      <div class="section-container">
        <div class="columns content">
          <div class="content-container">
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like).
            </p>
            <em>--Omobola Abiona</em>
          </div>
        </div>
        <div
          class="columns image"
          s
          style={{ backgroundImage: `url(${testimonial1})` }}
        >
          &nbsp;
        </div>
      </div>
      {/* third testimonial */}
      <div className="section-container">
        <div
          className="columns image"
          style={{ backgroundImage: `url(${testimonial2b})` }}
        >
          &nbsp;
        </div>
        <div className="columns content">
          <div className="content-container">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <em>--Frank Abangu</em>
          </div>
        </div>
      </div>

      {/* fourth testimonial */}
      <div class="section-container">
        <div class="columns content">
          <div class="content-container">
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like).
            </p>
            <em>--Oreoluwa Esusu</em>
          </div>
        </div>
        <div
          class="columns image"
          s
          style={{ backgroundImage: `url(${testimonial3})` }}
        >
          &nbsp;
        </div>
      </div>
    </div>
  );
};

export default TestimonialText;
