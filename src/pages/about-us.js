import { Container, Row, Col, Button } from "react-bootstrap";
import Counter from "../components/sections/counter";
import ImageGallery from "../components/sections/image-gallary";
// import Placement from "../components/sections/placement";

import EnrollModal from "../components/enroll-modal";

import { useState, useEffect } from "react";

import founderOne from "../assets/images/founder-1.png";
import founderTwo from "../assets/images/founder-2.png";

import studentActivityOne from "../assets/images/about-us/about-us-1.jpg";
import studentActivityTwo from "../assets/images/about-us/about-us-2.jpg";
import studentActivityThree from "../assets/images/about-us/about-us-3.jpg";
import studentActivityFour from "../assets/images/about-us/about-us-4.jpg";
import studentActivityFive from "../assets/images/about-us/about-us-5.jpg";
import studentActivitySix from "../assets/images/about-us/about-us-6.jpg";

import useCustom from "../hooks/useCustom";

import dots from "../assets/images/dots.png";
import dotsLarge from "../assets/images/dots-large.png";
import BookaSeat from "../components/sections/book-a-seat";
import Faq from "../components/sections/faq";
const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const {
    show,
    handleClose,
    handleShow,
    creativaCard,
    aboutusCounter,
    bookMySeat,
  } = useCustom();

  const [images] = useState({
    studentActivityOne,
    studentActivityTwo,
    studentActivityThree,
    studentActivityFour,
    studentActivityFive,
    studentActivitySix,
  });

  return (
    <div className="body-wrap  overflow-hidden">
      <Container>
        <h1 className="about-us-title text-center my-md-5 my-4">
          We're Here to Lead You <br className="d-none d-lg-block" />
          Towards a <span className="theme-color-green">Brighter Future.</span>
        </h1>
        <div className="pt-4">
          <ImageGallery images={images} />
        </div>
      </Container>

      {/* Counter Design Section */}
      <section className="section">
        <div className="position-relative">
          {/* className="py-5 my-5" */}
          <div className="design-circle-about-us-counter position-absolute"></div>
          <Counter counterValues={aboutusCounter} />
        </div>
      </section>

      <section className="section">
        <Container>
          <div className="text-md-center">
            <h1 className="creative-learning-title">Why Choose Creativa? </h1>
            <p className="creative-learning-desc">
              At Creativa, we're not just a design academy; we're a gateway to
              your creative potential.
            </p>
          </div>

          <Row>
            {creativaCard.map((creativaItem, i) => (
              <Col xl={4} md={6} key={creativaItem.id}>
                <div className="creative-learning-card">
                  {creativaItem.img}
                  <div className="circle-icon">
                    <img src={creativaItem?.imgs} alt="creative-learnings" />
                  </div>

                  <h2 className="creative-learning-card-title">
                    {creativaItem.title}
                  </h2>

                  <p className="creative-learning-card-desc">
                    {creativaItem.description}
                  </p>
                </div>
              </Col>
            ))}
          </Row>

          <div className="text-center my-md-4 pb-4 pb-md-0 mt-3">
            <Button
              bsPrefix="home"
              variant="button"
              onClick={bookMySeat}
              className="mt-md-4 enroll-btns"
              size="lg"
            >
              Enroll Now
            </Button>
          </div>
        </Container>
      </section>

      <section className="section">
        <div className="position-relative">
          <div className="design-circle-our-founder position-absolute"></div>
          <Container>
            {/*  className="py-5 " */}
            <div className="founders-design postion-relative">
              <img src={dotsLarge} alt="dots" className="dots-top" />
              <img src={dotsLarge} alt="dots" className="dots-top-2" />
              <img src={dots} alt="dots" className="dots-bottom" />
              <Row>
                <Col lg={5}>
                  <div className="d-flex justify-content-center flex-column h-100 our-founder-align">
                    <h1 className="founder-title">Our Founders</h1>
                    <p className="founder-desc">
                      Meet the visionaries behind Creativa, whose minds have
                      shaped our path towards excellence in design education.
                    </p>
                  </div>
                </Col>
                <Col lg={7}>
                  <Row className="text-center">
                    <Col md={6}>
                      <img
                        src={founderOne}
                        alt="founder-img"
                        className="founder-img"
                      />
                      <h2 className="founder-name">Ahmed</h2>
                      <p className="founder-designation mob-view">
                        CEO, Founder
                      </p>
                    </Col>
                    <Col md={6}>
                      <img
                        src={founderTwo}
                        alt="founder-img"
                        className="founder-img"
                      />
                      <h2 className="founder-name">Mohammed Sulaiman</h2>
                      <p className="founder-designation">
                        Co-Founder, Lead Mentor
                      </p>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      </section>

      {/* <section className="section">
          <div className="position-relative">
            <div className="design-circle-about-us-counter position-absolute"></div>
              <--* Our Placement Companies *-->
              <Placement />
          </div>
        </section> */}

      <section className="section">
        <Faq />
      </section>

      {/* Book a Seat */}
      <section className="section">
        <BookaSeat handleShow={handleShow} />
      </section>

      <EnrollModal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      />
    </div>
  );
};

export default AboutUs;
