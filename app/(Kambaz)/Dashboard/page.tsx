import Link from "next/link";
import { Card, CardImg, Col, Row, CardBody, CardTitle, CardText, Button } from "react-bootstrap";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
            <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                <Card>
                    <Link href='/Courses/1234/Home'
                        className="wd-dashboard-course-link text-decoration-none text-dark" 
                    >
                        <CardImg variant="top" src="/images/reactjs.jpg" width="100%" height={160}/>
                        <CardBody>
                            <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS1234 React JS</CardTitle>
                            <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                                Full Stack software developer
                            </CardText>
                            <Button variant="primary">Go</Button>
                        </CardBody>
                    </Link>
                </Card>
            </Col>
            <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                <Card>
                    <Link href="/Courses/1800/Home" className="wd-dashboard-course-link text-decoration-none text-dark"
                    >
                        <CardImg variant="top" src="/images/discretestructures.jpg" width="100%" height={160} />
                        <CardBody>
                            <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS1800 Discrete Structures</CardTitle>
                            <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                                Coding Logic and Math
                            </CardText>
                            <Button variant="primary">Go</Button>
                        </CardBody>
                    </Link>
                </Card>
            </Col>
            <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                <Card>
                    <Link href="/Courses/1500/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
                        <CardImg variant="top" src="/images/defaultred.png" width="100%" height={160} />
                        <CardBody>
                            <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS1500 Intro to Computer Science</CardTitle>
                            <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                                Introductory Coding Class with Python
                            </CardText>
                            <Button variant="primary">Go</Button>
                        </CardBody>
                    </Link>
                </Card>
            </Col>
            <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                <Card>
                    <Link href="/Courses/2500/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
                        <CardImg variant="top" src="/images/defaultgreen.png" width="100%" height={160} />
                        <CardBody>
                            <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">DS2500 Intro to Data Sciences</CardTitle>
                            <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                                Data manipulation and Machine Learn in Python
                            </CardText>
                            <Button variant="primary">Go</Button>
                        </CardBody>
                    </Link>
                </Card>
            </Col>
            <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                <Card>
                    <Link href="/Courses/2550/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
                        <CardImg variant="top" src="/images/defaultblue.jpg" width="100%" height={160} />
                        <CardBody>
                            <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CY2550 Intro to Cybersecurity</CardTitle>
                            <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                                Introductory Class for Cybersecurity
                            </CardText>
                            <Button variant="primary">Go</Button>
                        </CardBody>
                    </Link>
                </Card>
            </Col>
            <Col className="wd-dashboard-course" style={{ width: "300px"}}>
                <Card>
                    <Link href="/Courses/3500/Home" className="wd-dashboard-course-link textdecoration-none text-dark">
                        <CardImg variant="top" src="/images/defaultgrey.jpg" width="100%" height={160} />
                        <CardBody>
                            <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS3500 Object Oriented Design</CardTitle>
                            <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                                Object Oriented Design Coding practices course
                            </CardText>
                            <Button variant="primary">Go</Button>
                        </CardBody>
                    </Link>
                </Card>
            </Col>
            <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                <Card>
                    <Link href="/Courses/2231/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
                        <CardImg variant="top" src="/images/electricalengineering.webp" width="100%" height={160} />
                        <CardBody>
                            <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">EECE2231 Intro to Digital Design</CardTitle>
                            <CardText className="we-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                                Introduction to working with circuits and creating computers
                            </CardText>
                            <Button variant="primary">Go</Button>
                        </CardBody>
                    </Link>
                </Card>
            </Col>
        </Row>
      </div>
    </div>
);}
