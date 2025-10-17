"use client"
import { useParams } from "next/navigation";
import * as db from "../../../../Database";
import { Button, Col, FormCheck, FormControl, FormLabel, FormSelect, InputGroup, Row, Table } from "react-bootstrap";
import InputGroupText from "react-bootstrap/esm/InputGroupText";
import { CiCalendar } from "react-icons/ci";
import Link from "next/link";

export default function AssignmentEditor() {
    const { cid, aid } = useParams();

    const assignment = db.assignments.find((assignment) => assignment._id === aid)
  return (
    <div id="wd-assignments-editor">
        <FormLabel>Assignment Name</FormLabel>
        <FormControl type="email" placeholder={assignment?.title} className="" />
        <br />
        <div
            contentEditable={true}
            className="form-control"
            style={{ minHeight: "100px" }}
            suppressContentEditableWarning={true}
            >
            {assignment?.description}
        </div>
        <br /><br />
        <Table className="gap-4">
            <Row className="mb-4">
                <Col className="text-end me-1">
                    Points
                </Col>
                <Col className="text-start col-8" >
                    <FormControl type="number" placeholder={`${assignment?.points}`}></FormControl>
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
                            <FormControl readOnly value={assignment?.due} />
                            <InputGroupText><CiCalendar /></InputGroupText>
                        </InputGroup>
                        <Row>
                            <Col>
                                <FormLabel className="fw-bold">Available from</FormLabel>
                                <InputGroup className="mb-2">
                                    <FormControl readOnly value={assignment?.start} />
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
                <Link href={`/Courses/${cid}/Assignments`} className="text-decoration-none text-black">
                Cancel
                </Link>
            </Button>
            <Button variant="danger"  className="rounded-sm">
                <Link href={`/Courses/${cid}/Assignments`} className="text-decoration-none text-white">
                    Save
                </Link> 
            </Button>
        </div>
    </div>
);}
