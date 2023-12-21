import { Col, Container, Row, Button } from "react-bootstrap";
import calendar from '../../assets/images/calendar.svg';
import user from '../../assets/images/user.svg';
import languages from '../../assets/images/languages.svg';
import clock from '../../assets/images/clock.svg';

const UiUxCourse = ({bookMySeat}) => {
 

    return (
   
               <Container >
                {/* className="my-md-5 pt-5" */}
          
   
          <h1 className="courses-title mb-md-4 mb-3">UI/UX Design Course</h1>
          <p className="course-syllabus-desc pb-md-5 pb-3">Discover the latest updates for our classes—combining the best of offline and online learning experiences.</p>
           
          <Row>
                <Col md={6}>
                  <div className="course-card">
                    <div className="course-badge">
                       Online Live
                    </div>
                    <h2 className="course-card-title mt-md-5 mt-3">UX UI Design Course Program</h2>
                    <Row>
                      <Col md={6}>
                        <p className="course-list">
                          <img src={calendar} alt="calendar" />
                          <span className="ms-md-3">03 Months</span>
                        </p>
                      </Col>
                      <Col md={6}>
                        <p className="course-list">
                          <img src={clock} alt="clock" />
                          <span className="ms-md-3">10:00 AM - 1:00 PM</span>
                        </p>
                      </Col>
                      <Col md={6}>
                        <p className="course-list">
                          <img src={languages} alt="languages" className="lang" />
                          <span className="ms-md-3">Tamil & English</span>
                        </p>
                      </Col>
                      <Col md={6}>
                        <p className="course-list">
                          <img src={user} alt="user" />
                          <span className="ms-md-3">Slots left - 05</span>
                        </p>
                      </Col>
                    </Row>
  
                    <Button variant="primary" className="btn-block-green mt-5" onClick={bookMySeat} >
                      Enroll Now
                    </Button>
                    
                  </div>
                </Col>
                <Col md={6}>
                  <div className="course-card">
                    <div className="course-badge">
                       Offline Classroom
                    </div>
                    <h2 className="course-card-title mt-md-5 mt-3">UX UI Design Course Program</h2>
                    <Row>
                      <Col md={6}>
                        <p className="course-list">
                          <img src={calendar} alt="calendar" />
                          <span className="ms-md-3">03 Months</span>
                        </p>
                      </Col>
                      <Col md={6}>
                        <p className="course-list">
                          <img src={clock} alt="clock" />
                          <span className="ms-md-3">10:00 AM - 1:00 PM</span>
                        </p>
                      </Col>
                      <Col md={6}>
                        <p className="course-list">
                          <img src={languages} alt="languages" className="lang" />
                          <span className="ms-md-3">Tamil & English</span>
                        </p>
                      </Col>
                      <Col md={6}>
                        <p className="course-list">
                          <img src={user} alt="user" />
                          <span className="ms-md-3">Slots left - 05</span>
                        </p>
                      </Col>
                    </Row>
  
                    <Button variant="primary" className="btn-block-green mt-5" onClick={bookMySeat}>
                      Enroll Now
                    </Button>
                    
                  </div>
                </Col>
            </Row>
         </Container>
      
       
    )
}

export default UiUxCourse;