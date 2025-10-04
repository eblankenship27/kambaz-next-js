import Link from "next/link";
import AssignmentControls from "./AssignmentsControls";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import AssignmentControlButtons from "./AssignmentControlButtons";
import HomeworkControlButtons from "./HomeworkControlButtons";
import HomeworkLabelButtons from "./HomeworkLabelButtons";

export default function Assignments() {
  return (
    <div id="wd-assignments">
      <AssignmentControls /><br/><br/>
      <ListGroup className="rounded-0" id="wd-assignment-groups">
        <ListGroupItem className="wd-group p-0 fs-5 border-gray">
          <div className="wd-group-title p-3 ps-2 bg-body-tertiary"><BsGripVertical className="me-2 fs-3" /> ASSIGNMENTS<AssignmentControlButtons /></div> 
        </ListGroupItem>
        <ListGroupItem className="wd-assignment p-3 ps-1 d-flex">
          <HomeworkLabelButtons />
          <Link href="/Courses/1234/Assignments/1" className="fs-3 text-decoration-none text-black">
            A1<br />
            <div className="fs-6"><span className="text-danger">Multiple Modules</span>  |  <strong>Not availabile until</strong> May 6 at 12:00am  |  <strong>Due</strong> May 13 at 11:59pm  | 100pts</div>
          </Link>
          <HomeworkControlButtons />
        </ListGroupItem>
        <ListGroupItem className="wd-assignment p-3 ps-1 d-flex">
          <HomeworkLabelButtons />
          <Link href="/Courses/1234/Assignments/2" className="fs-3 text-decoration-none text-black">
            A2<br/>
            <div className="fs-6"><span className="text-danger">Multiple Modules</span>  |  <strong>Not available until</strong> May 13 at 12:00am  | <strong>Due</strong> May 20 at 11:59pm  | 100pts</div>
          </Link>
          <HomeworkControlButtons />
        </ListGroupItem>
        <ListGroupItem className="wd-assignment p-3 ps-1 d-flex">
          <HomeworkLabelButtons />
          <Link href="/Courses/1234/Assignments/3" className="fs-3 text-decoration-none text-black">
            A3<br />
            <div className="fs-6"><span className="text-danger">Multiples Modules</span>  | <strong>Not available until</strong> May 20 at 12:00am  | <strong>Due</strong> May 27 at 11:59pm  | 100pts</div>
          </Link>
          <HomeworkControlButtons />
        </ListGroupItem>
      </ListGroup>
    </div>
);}
