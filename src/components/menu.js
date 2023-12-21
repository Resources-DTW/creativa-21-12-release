import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import creativa from '../assets/images/creativa-logo.svg';
import { Link, useLocation } from "react-router-dom";


import Offcanvas from 'react-bootstrap/Offcanvas';
import { useEffect, useState } from "react";
import {Button} from 'react-bootstrap';

import useCustom from "../hooks/useCustom";
import EnrollModal from '../components/enroll-modal';

const Menu = () => {

  const [showSideMenu, setShowSideMenu] = useState(false);

  const handleSideMenuClose = () => setShowSideMenu(false);
  const handleSideMenuShow = () => setShowSideMenu(true);

  const [navClass, setNavClass] = useState("");

  useEffect(() => {
    window.addEventListener('scroll', pop);

    return () => window.removeEventListener('scroll', pop);
  }, []);



  const handleEnroll = () => {
      handleSideMenuClose();
      bookMySeat();
  }

  const pop = () => {
    if (window.scrollY > 0) {
      setNavClass("fixed-top");
    } else {
      setNavClass("bg-transparent");
    }

  }

  const {
    show,
    handleClose,
    bookMySeat
  } = useCustom();


  //assigning location variable
  const location = useLocation();

  //destructuring pathname from location
  const { pathname } = location;

  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/");

  return (
    <div className="position-relative overflow-hidden hidden-in-pdf-view">
      {['lg'].map((expand) => (
        <Navbar  key={expand} expand={expand} className={`bg-body-tertiary custom-navbar ${navClass}`} data-bs-theme="dark" bg="dark" onToggle={handleSideMenuShow} >
          <Navbar.Brand href="/" className="d-flex align-items-center justify-content-center">
            <img src={creativa} className="App-logo" alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`}  >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 14 13" fill="none" >
              <path d="M1 0.5H13M5.5 6.5H13M1 12.5H13" stroke="#F8F8F8" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </Navbar.Toggle>
          <Navbar.Offcanvas
          show={showSideMenu} onHide={handleSideMenuClose}
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
          >
            <Offcanvas.Header>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                <img src={creativa} className="App-logo" alt="logo" />
              </Offcanvas.Title>

              <Button variant="link" onClick={handleSideMenuClose}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M1.5 14.7168L14.935 1.28177" stroke="#F8F8F8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M14.5 14.7178L1.06497 1.28274" stroke="#F8F8F8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </Button>
            </Offcanvas.Header>
            <Offcanvas.Body>


              <Nav className="ms-auto">
                <Link className={splitLocation[1] === "" || splitLocation[1] === "home" ? "active nav-link" : "nav-link"} to="/"  onClick={handleSideMenuClose} >Home</Link>
                <Link className={splitLocation[1] === "about-us" ? "active nav-link" : "nav-link"} to="/about-us"  onClick={handleSideMenuClose}>About Us</Link>
                <Link className={splitLocation[1] === "upcoming-batches" ? "active nav-link" : "nav-link"} to="/upcoming-batches"  onClick={handleSideMenuClose}>Upcoming Batches</Link>
                <Link className={splitLocation[1] === "our-student-works" ? "active nav-link" : "nav-link"} to="/our-student-works"  onClick={handleSideMenuClose}>Our Students Works</Link>
                <Link className={splitLocation[1] === "gallery" ? "active nav-link" : "nav-link"} to="/gallery"  onClick={handleSideMenuClose}>Gallery</Link>
                <Link className="nav-link enroll-btn ms-lg-5" onClick={handleEnroll}>Enroll Now</Link>
              </Nav>

            </Offcanvas.Body>
          </Navbar.Offcanvas>

        </Navbar>
      ))}

     

      <EnrollModal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      />

<div className="design-circle position-absolute home-one"></div>
    </div>
  );
}

export default Menu;