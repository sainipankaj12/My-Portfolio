import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { FaSquareGithub } from "react-icons/fa6";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-scroll";
import DataApi from "../data/Api";


function Navbars() {


  
  return (
    <>
      <Navbar
        expand="lg"
        className=" bg-dark  w-100   fixed-top z-index-4 position-fixed "
      >
        <Container
          fluid
          className=" d-flex justify-content-between col h-100  "
        >
          <Navbar.Brand className="col-2 fw-bolder mx-5 px-4 " href="#">
            <span className="display-6 text-warning fw-bolder ">Port</span>
            <span className="display-6 text-danger fw-bolder ">folio</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto  px-5 col-6 mx-5 my-lg-2  w-75 gap-3   "
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link className="text-light ">
              
                <Link
                  to="Home"
                  spy={true}
                  smooth={true}
                  offset={-40}
                  duration={100}
                  activeClass='active'
                >
                  About
                </Link>
              </Nav.Link>

              <Nav.Link className="text-light">
                <Link
                  to="Skill"
                  spy={true}
                  smooth={true}
                  offset={-40}
                  duration={100}
                  activeClass='active'
                >
                  Skills
                </Link>
              </Nav.Link>
              <Nav.Link className="text-light">
                <Link
                  to="Exp"
                  spy={true}
                  smooth={true}
                  offset={-40}
                  duration={100}
                  activeClass='active'
                >
                  Experience
                </Link>
              </Nav.Link>
              <Nav.Link className="text-light">
                <Link
                  to="Project"
                  spy={true}
                  smooth={true}
                  offset={-40}
                  duration={100}
                  activeClass='active'
                >
                  Projects
                </Link>
              </Nav.Link>
              <Nav.Link className="text-light">
                <Link
                  to="Edu"
                  spy={true}
                  smooth={true}
                  offset={-40}
                  duration={100}
                  activeClass='active'
                >
                  Education
                </Link>
              </Nav.Link>
              <Nav.Link className="text-light">
                <Link
                  to="Contact"
                  spy={true}
                  smooth={true}
                  offset={-40}
                  duration={100}
                  activeClass='active'
                >
                  Contact
                </Link>
              </Nav.Link>
            </Nav>
            <div className="text-end  mx-md-5 px-md-5">
              <Button variant="outline-light"
                   href={DataApi.github} target="_blank">
                <FaSquareGithub size="30px" />
              </Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </> 
  );
}

export default Navbars;
