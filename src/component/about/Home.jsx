import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Pic from "/src/assets/pk2.jpeg";
import Resume from "/src/assets/Pankaj.pdf";

import Typed from "typed.js";
import { useEffect, useRef } from "react";
function Home() {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Full stack developer",
        "Front-end developer",
        "React Developer",
      ],
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      loop: true,
    });
    // Destroying
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <Container fluid className="flex h-screen w-full bg-dark  " id="Home">
      <Row className="d-grid w-100 h-100 d-lg-flex py-5 ">
        <Col className="d-grid  mx-3 mx-md-5  text-white mt-5 pt-2">
          <h4 className="mt-5">Hi, I am</h4>
          <h1 className="text-info mt-5">Pankaj Saini</h1>
          <h3 className="mt-5">
            <span>
              <h1>
{/* here i used typed.js */}

                I am <span className="text-warning" ref={el}></span>
              </h1>
            </span>
          </h3>
          <h6 className="text-start mt-5 ">
            Hi, I am a motivated and versatile individual, always eager to take new challenges 
            with a passion for learning. I dedicate to deliver high quality result with a possitive attitude and growth mindset.
          </h6>
          <div className="w-25 mt-5  mb-5">
            {" "}
            <Button className="text-light" variant="danger">
              <a className="text-light" href={Resume} download="Resume">Resume</a>
            </Button>
          </div>
        </Col>

        <Col
          className="  d-flex justify-content-center 
      align-items-center mx-3 pt-5 mt-5 "
        >
          <div className="d-flex  justify-content-center  ">
            {" "}
            <Col xs={10} md={7}>
              <Image className=" h-100 w-100    " src={Pic} roundedCircle />
            </Col>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
