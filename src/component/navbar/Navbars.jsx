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
        <Container fluid className="  bg-dark  " >
      <Navbar expand="md"
        className=" bg-dark  w-full  z-index-4 fixed-top pt-0 " >
       
         
          <Navbar.Brand className="col-3 fw-bolder  mx-lg-4 px-lg-4 " href="#">
            <span className="display-6 text-warning fw-bolder  ">Port</span>
            <span className="display-6  text-danger fw-bolder  ">folio</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" className="  bg-white " />
          <Navbar.Collapse id="navbarScroll" className="">
            <Nav
              className="    col-6 
               mx-lg-5 my-lg-2     w-75  "
              style={{ maxHeight: "150px"}}
              navbarScroll
            >
              <Nav.Link className="text-light    ">
              
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
            <div className=" text-end  ">
              <Button variant="outline-light" 
                   href={DataApi.github} target="_blank">
                <FaSquareGithub size="25px" />
              </Button>
            </div>
          </Navbar.Collapse>
      </Navbar>
        </Container>
    </> 
  );
}

export default Navbars;
