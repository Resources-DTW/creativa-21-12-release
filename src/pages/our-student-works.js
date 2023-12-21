
import studentActivityOne from '../assets/images/our-students-work/our-students-work-1.png';
import studentActivityTwo from '../assets/images/our-students-work/our-students-work-2.png';
import studentActivityThree from '../assets/images/our-students-work/our-students-work-3.png';
import studentActivityFour from '../assets/images/our-students-work/our-students-work-4.png';
import studentActivityFive from '../assets/images/our-students-work/our-students-work-5.png';
import studentActivitySix from '../assets/images/our-students-work/our-students-work-6.png';


import ImageGallery from "../components/sections/image-gallary";
import Counter from "../components/sections/counter";
import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import OurStudentWorksSection from '../components/sections/our-student-works-section';

import useCustom from "../hooks/useCustom";
import EnrollModal from '../components/enroll-modal';
import BookaSeat from '../components/sections/book-a-seat';

const OurStudentWorks = () => {

  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const {
    show,
    handleClose,
    handleShow,
    ourStudentsWorkCounter,
    ourStudentWorkHeadingDetails
  } = useCustom();



  const [images] = useState({ studentActivityOne, studentActivityTwo, studentActivityThree, studentActivityFour, studentActivityFive, studentActivitySix });


  return (
    <div className="body-wrap overflow-hidden">
      <div className="clearfix"></div>
      <div className="position-relative">
        <div className="design-circle-students-placed position-absolute"></div>

        <Container>
          <h1 className="about-us-title text-center my-5">Showcasing Student Excellence: <span className="theme-color-green">Here’s What Got Our Students  placed</span></h1>
          <div className="pt-4">
            <ImageGallery images={images} />
          </div>
        </Container>
      </div>

      {/* Counter Design Section */}
      <section className="section">
        <div className="position-relative">
          {/* py-5 my-5  */}
          <div className="design-circle-our-students-count position-absolute"></div>
          <Counter counterValues={ourStudentsWorkCounter} />
        </div>
      </section>

      {/* our student works */}
      <section className="section">
        <div className="position-relative">
          <div className="design-circle-our-student-worksection position-absolute"></div>
          <OurStudentWorksSection headingDetails={ourStudentWorkHeadingDetails} />
        </div>
      </section>

      {/* Wanna learn UI/UX Design like a Pro!  */}
      <section className="section">
        <div className="position-relative">
          <div className="design-circle-our-students-count position-absolute"></div>
          {/* Book a Seat */}
          <BookaSeat handleShow={handleShow} />
        </div>
      </section>
      <EnrollModal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      />
    </div>
  );
}

export default OurStudentWorks;