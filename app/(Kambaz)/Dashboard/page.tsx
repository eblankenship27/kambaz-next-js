/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { RootState } from "../store";
import Link from "next/link";
import { Card, CardImg, Col, Row, CardBody, CardTitle, CardText, Button, FormControl } from "react-bootstrap";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewCourse, deleteCourse, updateCourse, } from "../Courses/reducer";
import { addNewEnrollment, deleteEnrollment } from "./reducer";
export default function Dashboard() {
    const { courses } = useSelector((state: RootState) => state.coursesReducer);
    const { currentUser } = useSelector((state: RootState) => (state.accountReducer as any));
    const isFaculty = currentUser?.role === "FACULTY";
    const { enrollments } = useSelector((state: RootState) => state.enrollmentsReducer);
    const dispatch = useDispatch();
    const [course, setCourse] = useState<any>({
        _id: "0", name: "New Course", number: "New Number",
        startDate: "2023-09-10", endDate: "2023-12-15", image: "/images/reactjs.jpg", description: "New Description"
    });
    const [displayAll, setDisplayAll] = useState(false);
    if (!currentUser) {
        return (
            <div id="wd-dashboard">
                <h1 id="wd-dashboard-title">Dashboard</h1>
                <p>Please <Link href="/Account/Signin">sign in</Link> to view your courses.</p>
            </div>
        );
    }
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard
        <button className="btn btn-primary float-end" onClick={() => setDisplayAll(!displayAll)}>Enrollments</button>
      </h1>
      { isFaculty && (
        <h5>New Course
            <button className="btn btn-primary float-end" id="wd-add-new-course-click" onClick={() => dispatch(addNewCourse(course))} > Add </button>
            <button className="btn btn-warning float-end me-2" onClick={() => dispatch(updateCourse(course))} id="wd-update-course-click">
                Update
            </button>
        </h5> 
        )}<br />
      <FormControl value={course.name} className="mb-2" onChange={(e) => setCourse({ ...course, name: e.target.value }) } /> 
      <FormControl value={course.description} as="textarea" rows={3} onChange={(e) => setCourse({ ...course, description: e.target.value}) } />
      <hr />
      <h2 id="wd-dashboard-published">Published Courses ({courses.filter((course: any) => enrollments.some((enrollment) => enrollment.user === (currentUser._id) && enrollment.course === course._id)).length})</h2> <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
            { ! displayAll && (courses as any[]).filter((course: any) => enrollments.some((enrollment: any) => enrollment.user === (currentUser ? currentUser._id : "") && enrollment.course === course._id )).map((course) => (
                <Col className="wd-dashboard-course" key={course._id} style={{ width: "300px" }}>
                    <Card>
                        <Link href={`/Courses/${course._id}/Home`} className="wd-dashboard-course-link text-decoration-none text-dark" >
                            <CardImg src="/images/reactjs.jpg" variant="top" width="100%" height={160} />
                            <CardBody className="card-body">
                                <CardTitle className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                                    {course.name}
                                </CardTitle>
                                <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px"}}>
                                    {course.description}
                                </CardText>
                                <Button variant="primary"> Go </Button>
                                {isFaculty && (
                                    <button onClick={(event) => {
                                    event.preventDefault();
                                    dispatch(deleteCourse(course._id));
                                    }} className="btn btn-danger float-end" id="wd-delete-course-click">
                                        Delete
                                    </button>
                                )}
                                {isFaculty && (
                                    <button id="wd-edit-course-click" onClick={(event) => {
                                        event.preventDefault();
                                        setCourse(course);
                                    }} className="btn btn-warning me-2 float-end" >
                                        Edit
                                    </button>
                                )}
                                
                            </CardBody>
                        </Link>
                    </Card>
                </Col>
            ))}
            { displayAll && courses.map((course) => {

                const enrollment = enrollments.find((enrollment: any) => enrollment.user === currentUser._id && enrollment.course === course._id);
                const enrollmentId = enrollment?._id;
                const cid = course._id

                return (
                <Col className="wd-dashboard-course" key={course._id} style={{ width: "300px" }}>
                    <Card>
                        <Link href={`/Courses/${course._id}/Home`} onClick={(e) => {
                            if (!enrollment) {
                                e.preventDefault()
                            }
                        }} className="wd-dashboard-course-link text-decoration-none text-dark" >
                            <CardImg src="/images/reactjs.jpg" variant="top" width="100%" height={160} />
                            <CardBody className="card-body">
                                <CardTitle className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                                    {course.name}
                                    {enrollment ? (
                                        <button className="btn btn-danger float-end" onClick={() => dispatch(deleteEnrollment(enrollmentId))}>Unenroll</button>
                                    ) : (
                                        <button className="btn btn-primary float-end" onClick={() => dispatch(addNewEnrollment({ course: cid, user: currentUser._id}))}>Enroll</button>
                                    )}
                                </CardTitle>
                                <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px"}}>
                                    {course.description}
                                </CardText>
                                <Button variant="primary"> Go </Button>
                                {isFaculty && (
                                    <button onClick={(event) => {
                                    event.preventDefault();
                                    dispatch(deleteCourse(course._id));
                                    }} className="btn btn-danger float-end" id="wd-delete-course-click">
                                        Delete
                                    </button>
                                )}
                                {isFaculty && (
                                    <button id="wd-edit-course-click" onClick={(event) => {
                                        event.preventDefault();
                                        setCourse(course);
                                    }} className="btn btn-warning me-2 float-end" >
                                        Edit
                                    </button>
                                )}
                                
                            </CardBody>
                        </Link>
                    </Card>
                </Col>
                )
            })}
        </Row>
      </div>
    </div>
);}
