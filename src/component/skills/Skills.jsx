import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { TbBrandRedux } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { FaGithubAlt, FaGithub } from "react-icons/fa";
import { TbBrandVscode } from "react-icons/tb";
import { BiLogoNetlify } from "react-icons/bi";
import { SiPostman } from "react-icons/si";
import DataApi from "../data/Api";

function Skills() {


 
  
  return (

    <Container fluid className="bg-dark" id="Skill">
      <Row className="d-grid align-items-center screen-cover w-full pb-5">
        <Col className="d-grid text-center text-white mr-2 mt-5">
          <h2 className="text-light display-6 fw-bolder mb-2">Skills</h2>
          <div className=" mb-3">
            Here are some of my skills on which I have been working on for
            past one year.
          </div>
        </Col>
        <Col className="d-grid justify-content-center h-100 w-100  ">
          <div
            className="  border border-light text-center  rounded shadow 
           justify-content-center align-items center mb-2  "
          >
            <h4 className="text-center text-light mt-1">Frontend</h4>
            <Col className="">
              <Button variant="outline-light"  href={DataApi.html} target="_blank" >
                <span className="text-danger">
                  <FaHtml5 />
                </span>
                Html
              </Button>
              <Button className="m-2" variant="outline-light"  href={DataApi.Css} target="_blank">
                <span className="text-primary">
                  <FaCss3Alt />
                </span>
                Css
              </Button>
              <Button variant="outline-light"  href={DataApi.Javascript} target="_blank">
                <span className="text-warning">
                  <IoLogoJavascript />
                </span>
                Javascript
              </Button>
            </Col>
            <Col>
              <Button variant="outline-light"  href={DataApi.React} target="_blank">
                <span className="text-info">
                  <FaReact />
                </span>{" "}
                React JS
              </Button>
              <Button className="m-2" variant="outline-light"  href={DataApi.Tailwind} target="_blank">
                <span className="text-info">
                  <SiTailwindcss />
                </span>
                Tailwind
              </Button>
              <Button className="" variant="outline-light"  href={DataApi.Bootstrap} target="_blank">
                <span className="text-primary">
                  <FaBootstrap />
                </span>{" "}
                bootstrap
              </Button>
            </Col>
            <Col className="text-center ">
              <Button variant="outline-light"  href={DataApi.Redux} target="_blank">
                <span className="text-primary">
                  <TbBrandRedux />
                </span>
                Redux Toolkit
              </Button>
              <Button className=" m-2" variant="outline-light"  href={DataApi.Icons} target="_blank">
                <span className="text-danger">
                  <FaReact />
                </span>
                React Icons
              </Button>
            </Col>
          </div>


          <div className=" m-3">
            <div className=" border border-light rounded shadow  
            justify-content-center align-items-center p-2   text-center ">
              <h4 className="text-center text-light">Others</h4>
              <Col className="">
                <Button variant="outline-light"  href={DataApi.Git} target="_blank">
                  <span className="text-danger">
                    <FaGithubAlt />
                  </span>{" "}
                  git
                </Button>
                <Button className="m-2" variant="outline-light"  href={DataApi.github} target="_blank">
                  <span className="text-light ">
                    <FaGithub />
                  </span>{" "}
                  Github
                </Button>
                <Button variant="outline-light"  href={DataApi.VScode} target="_blank">
                  <span className="text-primary ">
                    <TbBrandVscode />
                  </span>
                  VS Code
                </Button>
              </Col>
              <Col>
                <Button variant="outline-light" href={DataApi.Netlify} target="_blank">
                  <span className="text-info ">
                    <BiLogoNetlify />
                  </span>
                  Netlify
                </Button>
                <Button className="m-2" variant="outline-light"  href={DataApi.Postman} target="_blank">
                  <span className="text-danger ">
                    <SiPostman />
                  </span>{" "}
                  Postman
                </Button>
                <Button className="" variant="outline-light"  href={DataApi} target="_blank">
                  Add more
                </Button>
              </Col>
              <Col className="text-center ">
                <Button variant="outline-light"  href={DataApi} target="_blank">Add more</Button>
                <Button className=" m-2" variant="outline-light">
                  Add more
                </Button>
              </Col>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  
  );
  // })
  // }
}
export default Skills;
