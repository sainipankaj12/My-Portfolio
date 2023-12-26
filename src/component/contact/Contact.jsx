import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import DataApi from "../data/Api";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ge1azam', 'template_dcmt5sd', form.current, 'hk7aS6KFa8D_Q2iKS')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <Container fluid className="bg-dark w-100" id="Contact">
      <Row className="d-flex align-items-center">
        <Col className="d-grid justify-content-center ">
          <div className=" text-light text-center mt-4 ">
            <div className="display-6 fw-bolder mb-2"> Contact Us</div>
            <div>
              Fell free to reach out to me for any question and opportunity.
            </div>
          </div>

          <div className="  text-center  p-2 text-light fw-bolder rounded ">
            <div className="fw-bolder">Email Me</div>
            <div className=" d-flex justify-content-center">
              <Form name="from_name" ref={form} onSubmit={sendEmail}>
                <Form.Group
                  style={{ width: "18rem" }}
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Control
                    className="mb-2 mt-3"
                    type="text"
                    name="from_name"
                    placeholder="Name"
                    

                  />
                  <Form.Control
                    className="mb-3 mt-3"
                    type="email"
                    name="email_id"
                    placeholder="Email"
                    
                  />
                  <Form.Control
                   type="Subject"
                   placeholder="Subject"
                   name="subject"
                  
                    />
                </Form.Group>
                <Form.Group
                  className="mb-2 mt-3"
                  style={{ width: "18rem" }}
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Control placeholder="TextArea" as="textarea" rows={3} name="message" />
                </Form.Group>
                <Form.Group
                  className="mb-2  w-full"
                  style={{ width: "18rem" }}
                  controlId="exampleForm.ControlButton1"
                >
                  <Button className="w-100" variant="success" type="submit"  value="Send">
                    Success
                  </Button>
                </Form.Group>
              </Form>
            </div>
          </div>

          <div className="  text-light  w-100 d-grid gap-2">
            <div className=" text-center mt-2 mb-2 text-warning   fw-bolder">
              Pankaj Kumar Saini
            </div>

            <div className=" justify-content-center text-light  w-100 d-flex gap-4  mb-1">
              <div className="">
                <Button variant="dark" href={DataApi.github} target="_blank">
                  <FaGithub size="30px" />
                </Button>
              </div>
              <div >
              <Button className="text-primary" variant="dark" href={DataApi.LinkedIn} target="_blank">
                  <FaLinkedin size="30px" />
                </Button>
              </div>
              <div >
              <Button className="text-danger" variant="dark" href={DataApi.instagram} target="_blank">
                  <FaInstagramSquare size="30px" />
                </Button>
              </div>
              <div >
              <Button className="text-primary"  variant="dark" href={DataApi.facebook} target="_blank">
                  <FaFacebookSquare size="30px" />
                </Button>
              </div>
            </div>
            <div className=" text-center  mb-1 text-light   fw-bolder">
              panakjsainips143@gmail.com
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
