


import bookaseatbanner from '../../assets/images/bookaseat-banner.png';
import calendarBlack from '../../assets/images/calendar-black.svg';
import dots from "../../assets/images/dots.png";

import { Col, Container, Row, Button } from "react-bootstrap";


const BookaSeat = ({handleShow}) => {
   
    return (

        <Container  id="enrollNow" >
            <div className="bookaseat-design mt-4 position-relative">
                <img src={dots} alt="dots" className="dots-top" />
                <img src={dots} alt="dots" className="dots-bottom" />

                <Row>
                    <Col xs={{ span: 12, order: 2 }} md={{ span: 6, order: 1 }}>

                        <div className="enroll-badge mb-md-5">Free Demo Class</div>
                        <h2 className="Enroll-title">Enroll your FREE UX/UI design Demo class</h2>

                        <p className="Enroll-timing-details mb-md-5 mb-4">  <img src={calendarBlack} alt="calendar-black" /> 24 Sept , 02.00 PM to 03.00 PM</p>
                        <div>
                         <Button bsPrefix="btn" variant="bookaseat" onClick={handleShow}>Book A Seat</Button>
                   
                        </div>
                    </Col>
                    <Col xs={{ span: 12, order: 1 }} md={{ span: 6, order: 2 }}>
                        <div style={{ backgroundImage: `url(${bookaseatbanner}` }} alt="enroll-img" className="enroll-banner" />
                    </Col>

                </Row>
            </div>
        </Container>

    );

}

export default BookaSeat;