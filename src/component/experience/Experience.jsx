import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

function Experience() {
  return (
    <Container fluid className=" bg-dark w-100  " id="Exp">
      <Row className=" d-grid align-items-center   ">
      <Col >
        <Col   className="d-grid justify-content-center   ">
        <div className="d-grid justify-content-center text-warning mt-4 mb-4">
          <h2 className="mt-4 mb-2 display-6 text-light fw-bolder">Experience</h2>
        </div>
      
          <div
            className="   shadow  border rounded  mt-3 "
            style={{ minwidth: "360px", maxWidth:"400px" }}
          >
            <Card.Body className="text-light bg-dark p-4 ">
              <Card.Title className="text-info mt-3 mb-3">Teacher</Card.Title>
              <Card.Subtitle className="mb-2 fw-bold text-warning ">
                Grammar Teacher 
              </Card.Subtitle>
              <Card.Text>
                I taught English Grammar for three years at Aparna Industrial Training Centre  Thakurdwara Moradabad U.P.
              </Card.Text>
            </Card.Body>
          </div>
        </Col>

        <Col className="d-grid justify-content-center mt-5">
          <div
            className="m-2 mb-5  bg-secondary shadow  border rounded"
            style={{  minwidth: "360px", maxWidth:"400px" }}
          >
            <Card.Body className="text-light bg-dark pb-4 ">
              <Card.Title className="text-info mt-3 mb-3">Font-End Developer</Card.Title>
              <Card.Subtitle className="mb-2 text-warning ">
                FRESHER
              </Card.Subtitle>
              <Card.Subtitle className="mb-2 text-warning ">
                SKILLS- <span className="text-light">Html, Css, Javascript, Tailwind-css, React-js, Node-js, Bootstrap, React-Icons, Github, </span>
              </Card.Subtitle>
              
            </Card.Body>
          </div>
        </Col>

        

        </Col>
      </Row>
    </Container>
  );
}

export default Experience;
