import { Col, Row } from "react-bootstrap";
import { useState } from "react";
import Slider from "react-slick";

const ImageGallery = (props) => {


    const [sliderSettings] = useState({
        infinite: true,
        dots: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      })


  return (
    <div className="px-xxl-0 px-md-5 px-0">
        
    <Row className="d-none d-xl-flex">
        <Col lg={4}>
            <div style={{backgroundImage: `url(${props.img ? props.img : props.images.studentActivityOne}`}}  className={`student-activity-image activity-one ${props.img ? "background-fixed" : ""}`} />
        </Col>
        <Col lg={4}>
            <div style={{backgroundImage: `url(${props.img ? props.img : props.images.studentActivityTwo}`}} className={`student-activity-image activity-two ${props.img ? "background-fixed" : ""}`}  />
            <div style={{backgroundImage: `url(${props.img ? props.img : props.images.studentActivityThree}`}}  className={`student-activity-image activity-three ${props.img ? "background-fixed" : ""}`} />
        </Col>
        <Col lg={4}>
            <div style={{backgroundImage: `url(${props.img ? props.img : props.images.studentActivityFour}`}} className={`student-activity-image activity-four ${props.img ? "background-fixed" : ""}`} />
        </Col>
        <Col lg={6}>
            <div style={{backgroundImage: `url(${props.img ? props.img : props.images.studentActivityFive}`}}  className={`student-activity-image activity-five ${props.img ? "background-fixed" : ""}`} />
        </Col>
        <Col lg={6}>
            <div style={{backgroundImage: `url(${props.img ? props.img : props.images.studentActivitySix}`}} className={`student-activity-image activity-six ${props.img ? "background-fixed" : ""}`} />
        </Col>
    </Row>

    
    <Slider {...sliderSettings} className="d-xl-none image-gallery">
        <div>
                <div style={{backgroundImage: `url(${props.img ? props.img : props.images.studentActivityOne}`,height: '369px'}}  className={`student-activity-image activity-one ${props.img ? "background-fixed" : ""}`} />
        </div>
        <div>
                <div style={{backgroundImage: `url(${props.img ? props.img : props.images.studentActivityTwo}`,height: '369px'}}  className={`student-activity-image activity-one ${props.img ? "background-fixed" : ""}`} />
        </div>
        <div>
                <div style={{backgroundImage: `url(${props.img ? props.img : props.images.studentActivityThree}`,height: '369px'}}  className={`student-activity-image activity-one ${props.img ? "background-fixed" : ""}`} />
        </div>
        <div>
                <div style={{backgroundImage: `url(${props.img ? props.img : props.images.studentActivityFour}`,height: '369px'}}  className={`student-activity-image activity-one ${props.img ? "background-fixed" : ""}`} />
        </div>
        <div>
                <div style={{backgroundImage: `url(${props.img ? props.img : props.images.studentActivityFive}`,height: '369px'}}  className={`student-activity-image activity-one ${props.img ? "background-fixed" : ""}`} />
        </div>
        <div>
                <div style={{backgroundImage: `url(${props.img ? props.img : props.images.studentActivitySix}`,height: '369px'}}  className={`student-activity-image activity-one ${props.img ? "background-fixed" : ""}`} />
        </div>
    </Slider>
    </div>



  )
}

export default ImageGallery;