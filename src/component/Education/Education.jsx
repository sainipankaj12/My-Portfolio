import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";


function Education() {
  return (
    <Container fluid className=" bg-dark w-100  " id="Edu">
    <Row className=" d-grid align-items-center   ">
    <Col >
      <Col   className="d-grid justify-content-center   ">
      <div className="d-grid justify-content-center">
        <h2 className="mt-5 mb-3 text-light display-6 fw-bolder ">Education</h2>
      </div>
    
        <div
          className=" mx-2 bg-secondary shadow  border rounded  "
          style={{ minwidth: "360px", maxWidth:"400px" }}
        >
          <Card.Body className="text-light bg-dark ">
            <Card.Title className="text-info">PGDCA</Card.Title>
            <Card.Subtitle className="mb-2 fw-bold text-warning  ">
              UNIVERSITY - <span className="text-light">DR.C.V.R UNIVERSITY Madhya Pradesh</span>
            </Card.Subtitle>
            <Card.Subtitle className="mb-2 fw-bold text-warning ">
              COURSE - <span className="text-light">PGDCA</span>
            </Card.Subtitle>
            <Card.Subtitle className="mb-2 fw-bold text-warning ">
            DURING - <span className="text-light">July 2020 - June 2021</span>
            </Card.Subtitle>
            <Card.Subtitle className="mb-2 fw-bold text-warning ">
            OBTAINED  - <span className="text-light">First Division With Honours</span>
            </Card.Subtitle>
            
          </Card.Body>
        </div>
      </Col>

      <Col className="d-grid justify-content-center ">
        <div
          className=" mt-3 mx-2  shadow  border rounded"
          style={{ minwidth: "360px", maxWidth:"400px" }}
        >
          <Card.Body className="text-light bg-dark">
            <Card.Title className="text-info">GRADUATION</Card.Title>
            <Card.Subtitle className="mb-2 text-warning ">
            UNIVERSITY - <span className="text-light">M.J.P.R.UNIVERSITY BARAEILLY U.P</span>
            </Card.Subtitle>
            <Card.Subtitle className="mb-2 text-warning ">
            COURSE - <span className="text-light">B.Sc</span>
            </Card.Subtitle>
            <Card.Subtitle className="mb-2 text-warning ">
            DURING - <span className="text-light">2014-2017</span>
            </Card.Subtitle>
            <Card.Subtitle className="mb-2 text-warning ">
            OBTAINED - <span className="text-light">First Division</span>
            </Card.Subtitle>
          </Card.Body>
        </div>
      </Col>

      <Col className="d-grid justify-content-center ">
        <div
          className="px-5  mt-3 shadow border rounded"
          style={{ minwidth: "360px", maxWidth:"400px" }}
        >
          <Card.Body className="text-light bg-dark">
            <Card.Title className="text-info">INTERMEDIATE</Card.Title>
            <Card.Subtitle className="mb-2 text-warning">
              BORD - <span className="text-light">U.P  BOARD</span>
            </Card.Subtitle>
            <Card.Subtitle className="mb-2 text-warning">
              CLASS - <span className="text-light">12TH</span>
            </Card.Subtitle>
            <Card.Subtitle className="mb-2 text-warning">
              DURING - <span className="text-light">2011</span>
            </Card.Subtitle>
            <Card.Subtitle className="mb-2 text-warning">
              OBTAINED - <span className="text-light">Second Division</span>
            </Card.Subtitle>
           
          </Card.Body>
        </div>
       
      </Col>

      <Col className="d-grid justify-content-center ">
        <div
          className="px-5 mt-3  shadow border rounded"
          style={{  minwidth: "360px", maxWidth:"400px"}}
        >
          <Card.Body className="text-light bg-dark">
            <Card.Title className="text-info">TENTH</Card.Title>
            <Card.Subtitle className="mb-2 text-warning">
              BORD-<span className="text-light">U.P  BOARD</span>
            </Card.Subtitle>
            <Card.Subtitle className="mb-2 text-warning">
              CLASS - <span className="text-light">10TH</span>
            </Card.Subtitle>
            <Card.Subtitle className="mb-2 text-warning">
              DURING - <span className="text-light">2009</span>
            </Card.Subtitle>
            <Card.Subtitle className="mb-2 text-warning">
              OBTAINED - <span className="text-light">Second Division</span>
            </Card.Subtitle>
           
          </Card.Body>
        </div>
       
      </Col>
      </Col>
    </Row>
  </Container>
  )
}

export default Education