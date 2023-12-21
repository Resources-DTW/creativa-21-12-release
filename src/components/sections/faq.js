import { Col, Container, Row } from "react-bootstrap";

import Accordion from 'react-bootstrap/Accordion';
import useCustom from "../../hooks/useCustom";

const Faq = () => {
    
  const {
    faq
  } = useCustom();


  return (
    <Container >
          <h2 className="students-activitiy-title mb-md-5 mb-3">FAQ's</h2>

          <Accordion>
          {
                faq.map(((faqItem, index) => (
                  <Accordion.Item eventKey={index} key={faqItem.faqID}>
                    <Accordion.Header>
                      <div className="w-100">
                      <Row>
                        <Col xs={2} lg={1} className="pe-0">
                          <h1 className="accordian-title count mt-1">{faqItem.faqID}</h1>
                        </Col>
                        <Col xs={10} lg={11}  className="ps-0">
                          <h1 className="accordian-title">{faqItem.question}</h1>
                        </Col>
                      </Row>
                      </div>
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="text-white faq-content">
                        {faqItem.answer}
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                )))
          }
          </Accordion>
        </Container>
  )
}

export default Faq;