import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { Col, Container, Row, Button } from "react-bootstrap";
import { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import syllabusPdf from "../assets/Creativa-UI-UX-Syllabus-v2.pdf";
import Loader from "./sections/loader";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const formSchema = {
  name: "",
  email: "",
  phone: "",
};

const secrets = {
  SERVICE_ID: "service_kgoqz33",
  TEMPLATE_ID: "template_sfhgaf8",
  PUBLIC_KEY: "Yb1rq0R_Ktx0LqSsK",
};

// Email Js

// username : sakthisri660@yopmail.com
// password : sakthisri660

const EnrollModal = (props) => {
  const form = useRef();
  const [enroll, setEnrollment] = useState(formSchema);
  const [validationError, setValidationError] = useState(formSchema);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setEnrollment(formSchema);
    setValidationError(formSchema);
  }, [props]);

  const handleForm = (e) => {
    setIsLoading(true);
    e.preventDefault();
    if (validateInputs()) {
      // validation is done

      if (props.syllabus) {
        // syllabusPdf
        downloadURI(syllabusPdf, "Creativa-UI-UX-Syllabus-v2.pdf");
      }

      emailjs
        .sendForm(
          secrets.SERVICE_ID,
          secrets.TEMPLATE_ID,
          form.current,
          secrets.PUBLIC_KEY
        )
        .then(
          (result) => {
            toast.success("Successfully Sent");
            setIsLoading(false);
            console.log(result.text);
            setEnrollment(formSchema);
            setValidationError(formSchema);
            props.onHide();
          },
          (error) => {
            toast.error("Something went wrong please try again later", {
              position: toast.POSITION.TOP_CENTER,
            });
            setIsLoading(false);
            console.log(error.text);
          }
        );
    }
  };

  const downloadURI = (uri, name) => {
    var link = document.createElement("a");
    // If you don't know the name or want to use
    // the webserver default set name = ''
    link.setAttribute("download", name);
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  const validateInputs = () => {
    const onlyAlphabets = /^[A-Za-z]+$/;
    const onlyEmailAddress = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const onlyPhone = /^[6-9]\d{9}$/;
    let returnStatement = false;
    if (enroll.name === "") {
      setValidationError((prev) => ({ ...prev, name: "Please Enter Name" }));
      returnStatement = false;
    } else if (!onlyAlphabets.test(enroll.name)) {
      setValidationError((prev) => ({
        ...prev,
        name: "Please Enter Valid Name",
      }));
      returnStatement = false;
    } else {
      setValidationError((prev) => ({ ...prev, name: "" }));
      returnStatement = true;
    }

    if (enroll.email === "") {
      setValidationError((prev) => ({ ...prev, email: "Please Enter Email" }));
      returnStatement = false;
    } else if (!onlyEmailAddress.test(enroll.email)) {
      setValidationError((prev) => ({
        ...prev,
        email: "Please Enter Valid Email",
      }));
      returnStatement = false;
    } else {
      setValidationError((prev) => ({ ...prev, email: "" }));
    }

    if (enroll.phone === "") {
      setValidationError((prev) => ({
        ...prev,
        phone: "Please Enter Mobile Number",
      }));
      returnStatement = false;
    } else if (!onlyPhone.test(enroll.phone)) {
      setValidationError((prev) => ({
        ...prev,
        phone: "Please Enter Valid Mobile Number",
      }));
      returnStatement = false;
    } else if (onlyPhone.test(enroll.phone)) {
      setValidationError((prev) => ({ ...prev, phone: "" }));
      returnStatement = true;
    }

    return returnStatement;
  };

  const handleInput = (e) => {
    setEnrollment({ ...enroll, [e.target.name]: e.target.value });
  };
  return (
    <>
      <Modal show={props.show} centered onHide={props.onHide} animation={true}>
        <Modal.Header>
          <Button
            variant="close"
            className="close text-white"
            onClick={props.onHide}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M15 5L5 15"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M5 5L15 15"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Button>
        </Modal.Header>
        <Modal.Body>
          {props.syllabus && (
            <div className="text-center">
              <h1 className="enroll-modal-title">
                Download Our User-Centric <br /> Syllabus Now!
              </h1>
              <p className="enroll-modal-desc">
                Dive into the world of user-centric design with our{" "}
                <br className="d-none d-lg-block" /> comprehensive UI/UX
                syllabus
              </p>
            </div>
          )}

          {!props.syllabus && (
            <div className="text-center">
              <h1 className="enroll-modal-title">
                Start Your Design Career <br /> Journey Today!
              </h1>
              <p className="enroll-modal-desc">
                We teach you from experience. Our courses focus on
                <br className="d-none d-lg-block" /> high-value skills and
                proven processes.
              </p>
            </div>
          )}

          <Container>
            <Row>
              <Col xl={{ span: 10, offset: 1 }}>
                <form ref={form} onSubmit={handleForm} noValidate>
                  <Form.Group className="mb-4">
                    <Form.Control
                      type="text"
                      name="name"
                      onChange={handleInput}
                      onBlur={validateInputs}
                      placeholder="Name"
                    />
                    {validationError.name && (
                      <div className="text-danger ps-4 pt-2">
                        {validationError.name}
                      </div>
                    )}
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Control
                      type="email"
                      name="email"
                      onChange={handleInput}
                      onBlur={validateInputs}
                      placeholder="Email"
                    />
                    {validationError.email && (
                      <div className="text-danger ps-4 pt-2">
                        {validationError.email}
                      </div>
                    )}
                  </Form.Group>
                  <Form.Group className="mb-4">
                    <Form.Control
                      type="text"
                      name="phone"
                      onChange={handleInput}
                      onBlur={validateInputs}
                      placeholder="Mobile Number"
                    />
                    {validationError.phone && (
                      <div className="text-danger ps-4 pt-2">
                        {validationError.phone}
                      </div>
                    )}
                  </Form.Group>

                  <Form.Group className="hide-from-user">
                    <Form.Control
                      type="text"
                      name="types"
                      defaultValue={
                        props.syllabus ? "Syllabus Download" : "Enrollment"
                      }
                    />
                  </Form.Group>

                  <Button
                    type="submit"
                    variant="primary"
                    className={`btn-block-green mt-3 ${
                      isLoading ? "disabled-btn" : ""
                    }`}
                  >
                    {isLoading ? (
                      <div className="Loader-class">
                        <Loader />
                      </div>
                    ) : (
                      <>
                        {props.syllabus && "Download Now"}
                        {!props.syllabus && "Enroll Now"}
                      </>
                    )}
                  </Button>

                  {/* onClick={props.onHide} */}
                </form>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      {/* Same as */}
      <ToastContainer />
    </>
  );
};

export default EnrollModal;
