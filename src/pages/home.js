import { Col, Container, Row, Button } from "react-bootstrap";
import Slider from "react-slick";
import { createRef, useState } from 'react';
import EnrollModal from '../components/enroll-modal';


// Images



import pricesStar from '../assets/images/prices-star.png';
import pricesStarTwo from '../assets/images/price-star-two.png';
import pricesStarThree from '../assets/images/price-star-three.png';


import testimonialOne from '../assets/images/testimonials/testimonial-1.png';
import testimonialIcon from '../assets/images/testimonials/testimonial-icon.png';
import ImageGallery from "../components/sections/image-gallary";
import Counter from "../components/sections/counter";
// import Placement from "../components/sections/placement";
import Enrollment from "../components/sections/enrollment";
import UiUxCourse from "../components/sections/ui-ux-course";


import studentActivityOne from '../assets/images/student-activity/student-activity-1.png';
import studentActivityTwo from '../assets/images/student-activity/student-activity-2.png';
import studentActivityThree from '../assets/images/student-activity/student-activity-3.png';
import studentActivityFour from '../assets/images/student-activity/student-activity-4.png';
import studentActivityFive from '../assets/images/student-activity/student-activity-5.png';
import studentActivitySix from '../assets/images/student-activity/student-activity-6.png';
import dots from "../assets/images/dots.png";
import dotsLarge from "../assets/images/dots-large.png";

import OurStudentWorksSection from "../components/sections/our-student-works-section";
import useCustom from "../hooks/useCustom";

import orbiting from '../assets/images/orbiting-design.svg';

// import userCenter from '../assets/images/home-rotating/user-center.svg';
// import userOne from '../assets/images/home-rotating/user-1.svg';
// import userTwo from '../assets/images/home-rotating/user-2.svg';
// import userThree from '../assets/images/home-rotating/user-3.svg';
// import userFour from '../assets/images/home-rotating/user-4.svg';
// import userFive from '../assets/images/home-rotating/user-5.svg';
// import userSix from '../assets/images/home-rotating/user-6.svg';

import { useEffect } from 'react';
import BookaSeat from "../components/sections/book-a-seat";
import Faq from "../components/sections/faq";


const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const {
    show,
    handleClose,
    syllabus,
    handleShow,
    bookMySeat,
    testimonials,
    homeCounterValue,
    homeHeadingDetails
  } = useCustom();



  //creating the ref
  const customeSlider = createRef();

  const [images] = useState({ studentActivityOne, studentActivityTwo, studentActivityThree, studentActivityFour, studentActivityFive, studentActivitySix });

  // setting slider configurations
  const [sliderSettings] = useState({
    infinite: true,
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  })

  const gotoNext = () => {
    customeSlider.current.slickNext()
  }

  const gotoPrev = () => {
    customeSlider.current.slickPrev()
  }


  return (
    <>

      <div className="body-wrap overflow-hidden">
        <div className="design-circle position-absolute"></div>

        <Container className="position-relative">

          <Row>
            <Col xs={{ span: 12, order: 2 }} lg={{ span: 6, order: 1 }}>
            <div className="clearfix pt-md-5 mt-md-5 d-md-block d-lg-none d-none"></div>
              <div className="home-content-section">
                <div>
                  <h1 className="home-title">Learn UX UI Design Form Industry Experts</h1>
                  <p className="home-desc">3 months learning program and 2 Months of internship at Digital Techworks</p>
                  <Button bsPrefix="home" variant="button" className="mt-4" size="lg" onClick={bookMySeat}>
                    Enroll Now
                  </Button>
                </div>
              </div>
            </Col>
            <Col xs={{ span: 12, order: 1 }} lg={{ span: 6, order: 2 }}>
            <div className="d-flex align-items-center justify-content-center height-100">
              <img src={orbiting} className="orbiting-design" alt="orbiting" />
          
              </div>
              {/* <div className="d-flex align-items-center justify-content-center height-100">
                <div className="orbiting-design">

                  <div className="user-center">
                    <img src={userCenter} alt="user-center" />
                  </div>

                  <div className="dashed-layer-1">
                    <div className="user-outer-layer-1">
                      <img src={userOne} alt="user-center" className="user-1" />
                      <img src={userTwo} alt="user-center" className="user-2" />
                      <img src={userThree} alt="user-center" className="user-3" />
                    </div>
                  </div>

                  <div className="dashed-layer-2">
                    <div className="user-outer-layer-2">
                      <img src={userFour} alt="user-center" className="user-4" />
                      <img src={userFive} alt="user-center" className="user-5" />
                      <img src={userSix} alt="user-center" className="user-6" />
                    </div>
                  </div>



                </div>
              </div> */}
            </Col>
          </Row>
        </Container>

        {/* Counter Design Section */}
        <section className="section">
          <Counter counterValues={homeCounterValue} />
        </section>
        {/* UI/UX Design Course */}
        <section className="section">
          <UiUxCourse bookMySeat={bookMySeat} />
        </section>
        
        <section className="section">
          <Container >
            {/* className="py-5" */}
            <div className="prices-design position-relative">

              <img src={dots} alt="dots" className="dots-top" />
              <img src={dots} alt="dots" className="dots-bottom" />

              <Row>
                <Col xl={5}>

                  <h2 className="prices-title">Explore Our Pricing Options </h2>

                  <p className="prices-desc">We've simplified pricing to make your decision effortless. Choose the plan that suits your journey</p>

                </Col>
                <Col xl={7}>
                  <Row className="my-4">
                    <Col md={4}>
                      <div className="price-card">
                        <img src={pricesStar} alt="price-img" />
                        <h3 className="plan-title">One Time Plan</h3>
                        <h3 className="plan-price">₹58,798</h3>
                        <span className="plan-note">*Including GST</span>

                      </div>
                    </Col>
                    <Col md={4}>
                      <div className="price-card">
                        <img src={pricesStarTwo} alt="price-img" />
                        <h3 className="plan-title">2 Month EMI Plan</h3>
                        <h3 className="plan-price">₹61,798</h3>
                        <span className="plan-note">*Including GST</span>

                      </div>
                    </Col>
                    <Col md={4}>
                      <div className="price-card">
                        <img src={pricesStarThree} alt="price-img" />
                        <h3 className="plan-title">3 Month EMI Plan</h3>
                        <h3 className="plan-price">₹63,798</h3>
                        <span className="plan-note no-margin-btm">*Including GST</span>

                      </div>
                    </Col>
                  </Row>
                </Col>

              </Row>
            </div>
          </Container>
        </section>

        <section className="section">
          <div className="position-relative">
            <div className="design-circle-ui-ux position-absolute"></div>
            {/* className="my-5 pt-5" */}
            <Container >
              <h1 className="courses-title mb-4">Mastering User-Centric Design: Our UI/UX Syllabus</h1>
              <p className="course-syllabus-desc pb-md-5 pb-3">Dive into the world of user-centric design with our comprehensive UI/UX syllabus. From foundational principles to advanced techniques, our curriculum is meticulously crafted to equip you with the skills demanded by the industry. </p>

              <Row>
                <Col lg={4}>
                  <div className="course-card">
                    <div className="course-badge">
                      Week 01
                    </div>
                    <h2 className="syllabus-card-title mt-lg-5 mb-lg-4 my-2">Introduction to UI/UX Design</h2>

                    <p className="syllabus-list">
                      Understanding the differences between UI and UX.
                    </p>
                    <p className="syllabus-list">
                      The role of UI/UX in product development.
                    </p>

                    <p className="syllabus-list">
                      Key principles and heuristics in UI/UX design
                    </p>

                  </div>
                </Col>
                <Col lg={4}>
                  <div className="course-card">
                    <div className="course-badge">
                      Week 02
                    </div>
                    <h2 className="syllabus-card-title mt-lg-5 mb-lg-4 my-2">Introduction to UI/UX Design</h2>

                    <p className="syllabus-list">
                      Understanding the differences between UI and UX.
                    </p>
                    <p className="syllabus-list">
                      The role of UI/UX in product development.
                    </p>

                    <p className="syllabus-list">
                      Key principles and heuristics in UI/UX design
                    </p>
                  </div>
                </Col>
                <Col lg={4}>
                  <div className="course-card">
                    <div className="course-badge">
                      Week 03
                    </div>
                    <h2 className="syllabus-card-title mt-lg-5 mb-lg-4 my-2">Introduction to UI/UX Design</h2>

                    <p className="syllabus-list">
                      Understanding the differences between UI and UX.
                    </p>
                    <p className="syllabus-list">
                      The role of UI/UX in product development.
                    </p>

                    <p className="syllabus-list">
                      Key principles and heuristics in UI/UX design
                    </p>

                  </div>
                </Col>
              </Row>
              <div className="text-center my-md-4 mb-4">
                <Button bsPrefix="home" variant="button" className="mt-md-4" size="lg" onClick={() => handleShow('syllabus')}>
                  View More Syllabus
                </Button>
              </div>
            </Container>
          </div>
        </section>
        
        <section className="section">
          <div className="position-relative pt-1 pt-md-0">
            <div className="design-circle-enroll-your-demo position-absolute"></div>
           {/* Book a Seat */}
           <BookaSeat handleShow={handleShow} />
          </div>
        </section>

        {/* our student works */}
        <section className="section">
          <OurStudentWorksSection headingDetails={homeHeadingDetails}  />
        </section>

        {/* <section className="section">
          <div className="position-relative">
            <div className="design-circle-placement position-absolute"></div>
            <--* Our Placement Companies *-->
            <Placement />
          </div>
        </section> */}

        <section className="section">
          <Container className="pt-md-0 pt-3">
            {/*  className="py-5" */}
            <div className="testimonial-design mt-4  position-relative">
              <img src={dotsLarge} alt="dots" className="dots-top" />
              <img src={dots} alt="dots" className="dots-bottom" />

              <Row className="px-md-3">
                <Col md={6}>
                  <h2 className="testimonial-title">Learners Testimonial</h2>
                </Col>
                <Col md={6} className="pr-0">
                  <div className="d-flex align-items-center justify-content-end">
                    <div onClick={() => gotoPrev()} className="testimonials-button btn-prev m-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="13" viewBox="0 0 24 13" fill="none">
                        <path d="M6.06524 11.7315L1.2803 7.14817C0.906567 6.79021 0.906567 6.20979 1.2803 5.8518L6.06524 1.26847C6.43897 0.91051 7.04489 0.91051 7.41862 1.26847C7.79236 1.62646 7.79236 2.20685 7.41862 2.56484L4.26735 5.58334H22.043C22.5715 5.58334 23 5.99375 23 6.5C23 7.00626 22.5715 7.41667 22.043 7.41667H4.26735L7.41862 10.4352C7.60547 10.6142 7.6989 10.8488 7.6989 11.0833C7.6989 11.3179 7.60547 11.5525 7.41862 11.7315C7.04489 12.0895 6.43897 12.0895 6.06524 11.7315Z" fill="#1B1B1B" stroke="#DFFE03" stroke-width="0.5" />
                      </svg>
                    </div>
                    <div onClick={() => gotoNext()} className="testimonials-button btn-next m-2">
                      <svg width="24" height="13" viewBox="0 0 24 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path id="Icon metro-arrow-right" d="M17.9348 11.7315L22.7197 7.14817C23.0934 6.79021 23.0934 6.20979 22.7197 5.8518L17.9348 1.26847C17.561 0.91051 16.9551 0.91051 16.5814 1.26847C16.2076 1.62646 16.2076 2.20685 16.5814 2.56484L19.7326 5.58334H1.95699C1.42846 5.58334 1 5.99375 1 6.5C1 7.00626 1.42846 7.41667 1.95699 7.41667H19.7326L16.5814 10.4352C16.3945 10.6142 16.3011 10.8488 16.3011 11.0833C16.3011 11.3179 16.3945 11.5525 16.5814 11.7315C16.9551 12.0895 17.561 12.0895 17.9348 11.7315Z" fill="#DFFE03" stroke="#1B1B1B" stroke-width="0.5" />
                      </svg>
                    </div>
                  </div>

                </Col>

              </Row>



              <Slider {...sliderSettings} ref={customeSlider}>
                
                {
                  testimonials.map((testimonialItem => (
                    <div key={testimonialItem.testimonialID}>
                      <div className="testimonial-card">
                        <Row>
                          <Col xs={{ span: 12, order: 2 }} md={{ span: 8, order: 1 }} className="d-flex align-items-center justify-content-center">
                            <div className="testimonial-desc-section position-relative pe-xl-4">
                              <img src={testimonialIcon} alt="testimonial-icon" />
                              <p className="testimonial-description">{testimonialItem.testimonialMsg}</p>
                            </div>
                          </Col>
                          <Col xs={{ span: 12, order: 1 }} md={{ span: 4, order: 2 }}>
                            <div className="testimonial-user text-center">
                              <img src={testimonialOne} className="user-img" alt="testimonial-img" />
                              <h2 className="user-name">ahmed elsayed</h2>
                              <p className="user-designation">UI/UX Designer at Nitro</p>
                            </div>
                          </Col>
                        </Row>
      
                      </div>
                    </div>
                  )))
                }
        
              </Slider>



            </div>
          </Container>
        </section>

        <section className="section">
          <div className="position-relative">
            <div className="design-circle-student-work-top position-absolute"></div>
          
            <Container className="pt-5 pt-md-0">
              <h2 className="students-activitiy-title mb-5">Crafting Experiences, Shaping Futures</h2>
              <ImageGallery images={images} />
            </Container>
            <div className="design-circle-student-work-bottom position-absolute"></div>

          </div>
        </section>

      
        <section className="section">
           <Faq />
        </section>

        {/* Wanna learn UI/UX Design like a Pro!  */}
        <section className="section">
          <Enrollment bookMySeat={bookMySeat} />
        </section>
      </div>

      <EnrollModal
        show={show}
        syllabus={syllabus}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      />
    </>

  );
}

export default Home;
