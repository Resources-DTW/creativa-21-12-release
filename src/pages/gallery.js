

import ImageGallery from "../components/sections/image-gallary";
import GalleryMain from "../assets/images/gallery-main.jpg";
import useCustom from "../hooks/useCustom";
import { useState, useEffect } from "react";
import EnrollModal from '../components/enroll-modal';
import { Col, Container, Row } from "react-bootstrap";

import galleryOne from '../assets/images/gallery/gallery-1.jpg';
import galleryTwo from '../assets/images/gallery/gallery-2.jpg';
import galleryThree from '../assets/images/gallery/gallery-3.jpg';
import galleryFour from '../assets/images/gallery/gallery-4.jpg';
import galleryFive from '../assets/images/gallery/gallery-5.jpg';
import gallerySix from '../assets/images/gallery/gallery-6.jpg';
import gallerySeven from '../assets/images/gallery/gallery-7.jpg';
import galleryEight from '../assets/images/gallery/gallery-8.jpg';
import galleryNine from '../assets/images/gallery/gallery-9.jpg';
import galleryTen from '../assets/images/gallery/gallery-10.jpg';
import galleryEleven from '../assets/images/gallery/gallery-11.jpg';
import galleryTwelve from '../assets/images/gallery/gallery-12.jpg';
import galleryThirteen from '../assets/images/gallery/gallery-13.jpg';
import galleryFourteen from '../assets/images/gallery/gallery-14.jpg';
import galleryFifteen from '../assets/images/gallery/gallery-15.jpg';
import gallerySixteen from '../assets/images/gallery/gallery-16.jpg';
import gallerySeventeen from '../assets/images/gallery/gallery-17.jpg';
import galleryEighteen from '../assets/images/gallery/gallery-18.jpg';
import galleryNineteen from '../assets/images/gallery/gallery-19.jpg';
import galleryTwenty from '../assets/images/gallery/gallery-20.jpg';
import BookaSeat from "../components/sections/book-a-seat";

const Gallery = () => {


  const [images] = useState([
    galleryOne,
    galleryTwo,
    galleryThree,
    galleryFour,
    galleryFive,
    gallerySix,
    gallerySeven,
    galleryEight,
    galleryNine,
    galleryTen,
    galleryEleven,
    galleryTwelve,
    galleryThirteen,
    galleryFourteen,
    galleryFifteen,
    gallerySixteen,
    gallerySeventeen,
    galleryEighteen,
    galleryNineteen,
    galleryTwenty]);


  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const {
    show,
    handleClose,
    handleShow
  } = useCustom();

  return (
    
    <div className="body-wrap overflow-hidden">
      <Container>
        <h1 className="about-us-title text-center my-5">Works which got our  <span className="theme-color-green"> Activity <br className='d-none d-lg-block' /> Gallery</span>  </h1>
        <div className="pt-4 position-relative">
          <div className="design-circle-upcoming-batch position-absolute"></div>
          <ImageGallery img={GalleryMain} />
        </div>
      </Container>

      <section className="section">
        <Container >
          {/* className="my-5 pt-5" */}
          <h1 className="student-work-title mb-4"> Moments of Joy through work </h1>
          <p className="student-work-desc pb-5">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duoLorem ipsum</p>

          <Row>
            {
              images.map(((img, i) => (
                <Col lg={6} key={i}>
                  <div className="studen-work-card mb-4">
                    <div className='img-1'>
                      <div style={{ backgroundImage: `url(${img})` }} className="student-card-img img-1" >
                      </div>
                    </div>
                  </div>
                </Col>
              )))
            }
          </Row>
        </Container>
      </section>



    
      <section className="section">
        <div className="position-relative">
          <div className="design-circle-our-founder position-absolute"></div>
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

  )
}

export default Gallery;