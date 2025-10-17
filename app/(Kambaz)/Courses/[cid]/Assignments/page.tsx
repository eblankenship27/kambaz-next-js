/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { useParams } from "next/navigation";
import * as db from "../../../Database"
import Link from "next/link";
import AssignmentControls from "./AssignmentsControls";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import AssignmentControlButtons from "./AssignmentControlButtons";
import HomeworkControlButtons from "./HomeworkControlButtons";
import HomeworkLabelButtons from "./HomeworkLabelButtons";

export default function Assignments() {
  const { cid } = useParams();
  const assignments = db.assignments;
  return (
    <div id="wd-assignments">
      <AssignmentControls /><br/><br/>
      <ListGroup className="rounded-0" id="wd-assignment-groups">
        <ListGroupItem className="wd-group p-0 fs-5 border-gray">
          <div className="wd-group-title p-3 ps-2 bg-body-tertiary"><BsGripVertical className="me-2 fs-3" /> ASSIGNMENTS<AssignmentControlButtons /></div> 
        </ListGroupItem>
        {assignments.filter((assignment: any) => assignment.course === cid).map((assignment: any) => (
          <ListGroupItem key={assignment._id} className="wd-assignment p-3 ps-1 d-flex">
            <HomeworkLabelButtons />
            <Link href={`/Courses/${cid}/Assignments/${assignment._id}`} className="fs-3 text-decoration-none text-black">
              {assignment.title} <br />
              <div className="fs-6">
                <span className="text-danger">Multiple Modules</span>  |  <strong>Not available until</strong> {assignment.start}  |  <strong>Due</strong> {assignment.due}  |  {assignment.points}
              </div>
            </Link>
            <HomeworkControlButtons />
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
);}
