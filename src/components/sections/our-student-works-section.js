import studentWorkOne from "../../assets/images/student-works/my-student-work-1.png";
import studentWorkTwo from "../../assets/images/student-works/my-student-work-2.png";
import studentWorkThree from "../../assets/images/student-works/my-student-work-3.png";
import studentWorkFour from "../../assets/images/student-works/my-student-work-4.png";
import studentWorkFive from "../../assets/images/student-works/my-student-work-5.png";
import studentWorkSix from "../../assets/images/student-works/my-student-work-6.png";

import allCaseStudy from "../../assets/Casestudy.zip";

import LeafyBuy from "../../assets/Casestudy/LeafyBuy.pdf";
import ELearning from "../../assets/Casestudy/E-Learning-UI-UX-CaseStudy.pdf";
import Bikemend from "../../assets/Casestudy/Bikemend-UX-CaseStudy.pdf";

import FurniCart from "../../assets/Casestudy/Furni-Cart-Casestudy.pdf";
import Travelapp from "../../assets/Casestudy/Travel-app-casestudy.pdf";
import easypay from "../../assets/Casestudy/UPI-Payement-UI-UX-CaseStudy.pdf";

import downloads from "../../assets/images/download.png";

import { Col, Container, Row, Button } from "react-bootstrap";

const OurStudentWorksSection = ({ headingDetails }) => {
  const downloadAllCaseStudy = () => {};

  const openNewTab = (link) => {
    window.open(`/pdf-viewer?link=${link}`, "_blank");
  };

  return (
    <Container>
      {/* className="my-5 pt-5" */}
      <h1 className="student-work-title mb-4">{headingDetails.title} </h1>
      <p className="student-work-desc pb-md-5 pb-4">
        {headingDetails.description}
      </p>

      <Row>
        <Col lg={6}>
          <div className="studen-work-card mb-5">
            <div className="img-1">
              <a href={LeafyBuy} target="_blank" rel="noreferrer">
                <div
                  style={{ backgroundImage: `url(${studentWorkOne})` }}
                  className="student-card-img img-1"
                >
                  <div className="my-overlay">
                    <img
                      src={downloads}
                      alt="download"
                      className="download-icon"
                    />
                  </div>
                </div>
              </a>
            </div>
            <h2 className="student-card-title my-md-4">
              Leafy Buy - Plant Reselling App
            </h2>
            <p className="student-card-desc">
              Resale Plant platform blooms with the essence of community,
              connecting plant lovers with kind neighbors and nurturing
              nurseries.{" "}
            </p>
          </div>

          <div className="studen-work-card mb-5">
            <div className="img-3">
              <a href={ELearning} target="_blank" rel="noreferrer">
                <div
                  style={{ backgroundImage: `url(${studentWorkThree})` }}
                  className="student-card-img img-3"
                >
                  <div className="my-overlay">
                    <img
                      src={downloads}
                      alt="download"
                      className="download-icon"
                    />
                  </div>
                </div>
              </a>
            </div>
            <h2 className="student-card-title my-md-4">
              Edu Connect - E Learning App
            </h2>
            <p className="student-card-desc">
              Innovative mobile app transforming e-learning. It offers a
              user-friendly platform with personalized recommendations,
              interactive lessons, and progress tracking.
            </p>
          </div>

          <div className="studen-work-card mb-5">
            <div className="img-3">
              <a href={Bikemend} target="_blank" rel="noreferrer">
                <div
                  style={{ backgroundImage: `url(${studentWorkFive})` }}
                  className="student-card-img img-3"
                >
                  <div className="my-overlay">
                    <img
                      src={downloads}
                      alt="download"
                      className="download-icon"
                    />
                  </div>
                </div>
              </a>
            </div>
            <h2 className="student-card-title my-md-4">
              BikeMent - Bike Services App{" "}
            </h2>
            <p className="student-card-desc">
              The Bike Service Booking Mobile App is a platform designed to make
              the process of booking bike services convenient and user-friendly.
            </p>
          </div>
        </Col>
        <Col lg={6}>
          <div className="studen-work-card mb-5">
            <div className="img-2">
              <a href={FurniCart} target="_blank" rel="noreferrer">
                <div
                  style={{ backgroundImage: `url(${studentWorkTwo})` }}
                  className="student-card-img img-2"
                >
                  <div className="my-overlay">
                    <img
                      src={downloads}
                      alt="download"
                      className="download-icon"
                    />
                  </div>
                </div>
              </a>
            </div>
            <h2 className="student-card-title  my-md-4">
              Furni Cart - Furniture App
            </h2>
            <p className="student-card-desc">
              Transforming furniture shopping into a seamless and personalized
              experience through our innovative mobile application.
            </p>
          </div>

          <div className="studen-work-card mb-5">
            <div className="img-4">
              <a href={Travelapp} target="_blank" rel="noreferrer">
                <div
                  style={{ backgroundImage: `url(${studentWorkFour})` }}
                  className="student-card-img img-4"
                >
                  <div className="my-overlay">
                    <img
                      src={downloads}
                      alt="download"
                      className="download-icon"
                    />
                  </div>
                </div>
              </a>
            </div>
            <h2 className="student-card-title  my-md-4">
              Travel Planner - Travel App
            </h2>
            <p className="student-card-desc">
              Simplifies travel planning, offers personalized recommendations,
              seamless bookings for flights and accommodations, and fosters a
              vibrant travel community.
            </p>
          </div>

          <div className="studen-work-card mb-5">
            <div className="img-4">
              <a href={easypay} target="_blank" rel="noreferrer">
                <div
                  style={{ backgroundImage: `url(${studentWorkSix})` }}
                  className="student-card-img img-4"
                >
                  <div className="my-overlay">
                    <img
                      src={downloads}
                      alt="download"
                      className="download-icon"
                    />
                  </div>
                </div>
              </a>
            </div>
            <h2 className="student-card-title  my-md-4">
              Easy Pay - UPI Payment App
            </h2>
            <p className="student-card-desc">
              Transformative mobile application, redefining the way we handle
              payments. Seamlessly integrating with the (UPI), Easy Payment sets
              out to revolutionize the user experience for conducting
              transactions.
            </p>
          </div>
        </Col>
      </Row>
      <div className="text-center my-md-4">
        <a href={allCaseStudy} download>
          <Button
            bsPrefix="home"
            variant="button"
            className="mt-md-4"
            size="lg"
          >
            View All Projects
          </Button>
        </a>
      </div>
    </Container>
  );
};

export default OurStudentWorksSection;
