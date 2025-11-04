/* eslint-disable @typescript-eslint/no-explicit-any */

"use client"
import { redirect, useParams } from "next/navigation";
import { Button, Col, FormControl, FormLabel, InputGroup, Row, Table } from "react-bootstrap";
import InputGroupText from "react-bootstrap/esm/InputGroupText";
import { CiCalendar } from "react-icons/ci";
import { useState } from "react";
import { addAssignment, updateAssignment } from "../reducer";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../../store";

export default function AssignmentEditor() {
    const { cid, aid } = useParams();
    const { assignments } = useSelector((state: RootState) => state.assignmentsReducer )
    const dispatch = useDispatch();
    const [assignment, setAssignment] = useState<any>(assignments.find((a: any) => a._id === aid) ? assignments.find((a: any) => a._id === aid) : {
        _id: aid,
        title: "New Assignment",
        description: "New Assignment Description",
        points: 100,
        course: cid,
        start: "",
        end: "",
        due: "",
    })
    const handleSubmit = () => {
        if (assignments.find((a) => a._id === aid)) {
            dispatch(updateAssignment(assignment))
        }
        else {
            dispatch(addAssignment(assignment))
        }
        redirect(`/Courses/${cid}/Assignments`)
    }
  return (
    <div id="wd-assignments-editor">
        <FormLabel>Assignment Name</FormLabel>
        <FormControl type="text" defaultValue={assignment.title} onChange={(e) => setAssignment({...assignment,  title: e.target.value})} />
        <br />
        <FormControl
            as="textarea"
            className="form-control"
            rows={3}
            defaultValue={assignment.description}
            onChange={(e) => setAssignment({...assignment, description: e.target.value})}
        />
        <br /><br />
        <Table className="gap-4">
            <Row className="mb-4">
                <Col className="text-end me-1">
                    Points
                </Col>
                <Col className="text-start col-8" >
                    <FormControl type="number" defaultValue={assignment.points} onChange={(e) => setAssignment({...assignment, points: e.target.value})} />
                </Col>
            </Row>
            <Row className="mb-4">
                <Col className="text-end">
                    Assign
                </Col>
                <Col className="text-start col-8">
                    <div className="border rounded p-2">
                        <FormLabel className="fw-bold" >
                            Due
                        </FormLabel>
                        <InputGroup className="mb-2">
                            <FormControl type="date" defaultValue={assignment.due} onChange={(e) => setAssignment({...assignment, due: e.target.value})} />
                            <InputGroupText><CiCalendar /></InputGroupText>
                        </InputGroup>
                        <Row>
                            <Col>
                                <FormLabel className="fw-bold">Available from</FormLabel>
                                <InputGroup className="mb-2">
                                    <FormControl type="date" defaultValue={assignment.start} onChange={(e) => setAssignment({...assignment, start: e.target.value})} />
                                    <InputGroupText><CiCalendar /></InputGroupText>
                                </InputGroup>
                            </Col>
                            <Col>
                                <FormLabel className="fw-bold">Until</FormLabel>
                                <InputGroup className="mb-2">
                                    <FormControl type="date" defaultValue={assignment.end} onChange={(e) => setAssignment({... assignment, end: e.target.value})} />
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
            <Button variant="secondary" className="rounded-sm me-1" onClick={() => redirect(`/Courses/${cid}/Assignments`)} >
                Cancel
            </Button>
            <Button variant="danger"  className="rounded-sm"  onClick={handleSubmit}>
                Save
            </Button>
        </div>
    </div>
);}
