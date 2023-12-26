import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DataApi from '../data/Api';
import Button from 'react-bootstrap/Button';
import img from "/src/assets/img1.jpg";
import img2 from "/src/assets/img2.jpg";
import img3 from "/src/assets/img3.jpg";
import img4 from "/src/assets/img4.jpg";
import Card from 'react-bootstrap/Card'

function Projects() {
  
  return (
    <Container fluid className='w-100 h-full bg-dark ' id='Project'>
    <Row className='d-grid justify-content-center align-items-center  '>
      <Col className='d-grid  justify-content-center w-100 h-100  '>
      <h3 className='text-center pt-5 mb-5 text-light display-6 fw-bolder'>Projects</h3>
       
      
      <Col className='d-md-flex d-grid gap-3 w-100  '> 
      <div>
        <Card className='bg-dark border-light text-light' style={{ width: '20rem', }}>
      <Card.Img variant="top" style={{ height: '16rem' }} src={img} />
      <Card.Body>
        <Card.Title>Weather-App</Card.Title>
        <Card.Text>
        <span className='text-warning'>Skills -</span> React-vite, Tailwind-css,  Weather-Api, Axios, React-Icons
        </Card.Text>
        <Button variant="outline-light" href={DataApi.project1} target="_blank">Project</Button>
      </Card.Body>
    </Card>
        </div>
        <div>
        <Card className='bg-dark border-light text-light' style={{ width: '20rem',   }}>
      <Card.Img variant="top"  style={{ height: '16rem' }} src={img2} />
      <Card.Body>
        <Card.Title >Shopping-App</Card.Title>
        <Card.Text >
         <span className='text-warning'>Skills -</span>  React-vite, Bootstrap, Css, fetch-Api, Redux-Toolkit, React-Icons
        </Card.Text >
        <Button  variant="outline-light" href={DataApi.project2} target="_blank">Project</Button>
      </Card.Body>
    </Card>
        </div>
        </Col>

        <Col className='d-md-flex d-grid gap-3 mt-3 w-100'> 
      <div>
        <Card className='bg-dark border-light text-light' style={{ width: '20rem' }}>
      <Card.Img variant="top"  style={{ height: '16rem' }} src={img3} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card`s content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
        </div>
        <div>
        <Card className='bg-dark border-light text-light ' style={{ width: '20rem' }}>
      <Card.Img variant="top"  style={{ height: '16rem' }} src={img4} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card`s content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
        </div>
        </Col>
        </Col>

    </Row>
  </Container>
  )
}

export default Projects