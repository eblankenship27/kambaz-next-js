import { Button, Col, FormCheck, FormControl, FormLabel, FormSelect, InputGroup, Row, Table } from "react-bootstrap";
import InputGroupText from "react-bootstrap/esm/InputGroupText";
import { CiCalendar } from "react-icons/ci";

export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
        <FormLabel>Assignment Name</FormLabel>
        <FormControl type="email" placeholder="A1" className="" />
        <br />
        <div
            contentEditable={true}
            className="form-control"
            style={{ minHeight: "100px" }}
            suppressContentEditableWarning={true}
            >
            The assignment is <span className="text-danger">available online</span><br /><br />
            Submit a link to the landing page of your Web application running on Netlify.<br /><br />
            The landing page should include the following:
            <ul>
                <li>Your full name and section</li>
                <li>Links to each of the lab assignments</li>
                <li>Links to the Kambaz application</li>
                <li>Links to all relevant source code repositories</li>
            </ul>
            The Kambaz application should include a link to navigate back to the landing page.
        </div>
        <br /><br />
        <Table className="gap-4">
            <Row className="mb-4">
                <Col className="text-end me-1">
                    Points
                </Col>
                <Col className="text-start col-8" >
                    <FormControl type="number" placeholder="100"></FormControl>
                </Col>
            </Row>
            <Row className="mb-4">
                <Col className="text-end">
                    Assignment Group
                </Col>
                <Col className="text-start col-8">
                    <FormSelect>
                        <option value='assignments'>ASSIGNMENTS</option>
                    </FormSelect>
                </Col>
            </Row>
            <Row className="mb-4">
                <Col className="text-end">
                    Display Grade as
                </Col>
                <Col className="text-start col-8">
                    <FormSelect>
                        <option value="percentage">Percentage</option>
                    </FormSelect>
                </Col>
            </Row>
            <Row className="mb-4">
                <Col className="text-end">
                    Submission Type
                </Col>
                <Col className="text-start col-8">
                    <div className="border rounded p-2">
                        <FormSelect>
                            <option value="online">Online</option>
                        </FormSelect>
                        <br />
                        <div className="mb-2"><strong>Online Entry Options</strong></div>
                        <FormCheck type="checkbox" label="Text Entry" className="mb-3" />
                        <FormCheck type="checkbox" label="Website URL" className="mb-3" defaultChecked />
                        <FormCheck type="checkbox" label="Media Recordings" className="mb-3" />
                        <FormCheck type="checkbox" label="Student Annotation" className="mb-3" />
                        <FormCheck type="checkbox" label="File Uploads" className="mb-3" />
                    </div>
                </Col>
            </Row>
            <Row className="mb-4">
                <Col className="text-end">
                    Assign
                </Col>
                <Col className="text-start col-8">
                    <div className="border rounded p-2">
                        <FormLabel className="fw-bold">Assign to</FormLabel>
                        <FormSelect className="mb-2">
                            <option value="everyone">Everyone</option>                        </FormSelect>
                        <FormLabel className="fw-bold" >
                            Due
                        </FormLabel>
                        <InputGroup className="mb-2">
                            <FormControl type="date" placeholder="May 13, 2024, 11:59 PM" />
                            <InputGroupText><CiCalendar /></InputGroupText>
                        </InputGroup>
                        <Row>
                            <Col>
                                <FormLabel className="fw-bold">Available from</FormLabel>
                                <InputGroup className="mb-2">
                                    <FormControl type="date" placeholder="May 6, 2024, 12:00 AM" />
                                    <InputGroupText><CiCalendar /></InputGroupText>
                                </InputGroup>
                            </Col>
                            <Col>
                                <FormLabel className="fw-bold">Until</FormLabel>
                                <InputGroup className="mb-2">
                                    <FormControl type="date" placeholder="" />
                                    <InputGroupText><CiCalendar /></InputGroupText>
                                </InputGroup>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </Table>
        <hr />
        <div className="d-flex justify-content-end">
            <Button variant="secondary" className="rounded-sm me-1" >
                Cancel
            </Button>
            <Button variant="danger"  className="rounded-sm">
                Save
            </Button>
        </div>
    </div>
);}
