import { Col, Container, Row } from "react-bootstrap";
import dots from "../../assets/images/dots.png";

const Counter = ({counterValues}) => {
  return (
    <Container>
    <div className="counter-design d-md-flex align-items-center justify-content-between mt-4">
      <img src={dots} alt="dots" className="dots-top" />
       <img src={dots} alt="dots" className="dots-bottom" />

      <div className="w-100">
        <Row>
          {counterValues.map((counter => (
              <Col lg={3} md={6} xs={6} key={counter.id}>
                <h2 className="counter-value">{counter.value}<span>+</span></h2>
                <p className="counter-title">{counter.title}</p>
              </Col>
          )))}
          
          {/* <Col lg={3} md={6}>
            <h2 className="counter-value">50<span>+</span></h2>
            <p className="counter-title">Students Enrolled</p>
          </Col>
          <Col lg={3} md={6}>
            <h2  className="counter-value">100<span>+</span></h2>
            <p className="counter-title">Students Placed</p>
          </Col>
          <Col lg={3} md={6}>
            <h2  className="counter-value">20<span>+</span></h2>
            <p className="counter-title">Workshops Conducted</p>
          </Col> */}
        </Row>
      </div>
  
    </div>
  </Container>
  )
}

export default Counter;