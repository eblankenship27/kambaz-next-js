/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { RootState } from "../store";
import Link from "next/link";
import { Card, CardImg, Col, Row, CardBody, CardTitle, CardText, Button, FormControl } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as client from "../Courses/client";
import { deleteCourse, setCourses } from "../Courses/reducer";
import { setEnrollments } from "./reducer";
export default function Dashboard() {
    const { courses } = useSelector((state: RootState) => state.coursesReducer);
    const { currentUser } = useSelector((state: RootState) => (state.accountReducer as any));
    const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);
    const isFaculty = currentUser?.role === "FACULTY";

    const dispatch = useDispatch();
    const [course, setCourse] = useState<any>({
        _id: "0", name: "New Course", number: "New Number",
        startDate: "2023-09-10", endDate: "2023-12-15", image: "/images/reactjs.jpg", description: "New Description"
    });
    const onDeleteCourse = async (courseId: string) => {
        const status = await client.deleteCourse(courseId);
        dispatch(setCourses(courses.filter((course) => course._id !== courseId)));
        console.log(status);
    };
    const fetchCourses = async () => {
        try {
            const courses = await client.findMyCourses();
            dispatch(setCourses(courses));
        } catch (error) {
            console.error(error);
        }
    };
    const fetchAllCourses = async () => {
        try {
            const courses = await client.fetchAllCourses();
            dispatch(setCourses(courses));
        } catch (error) {
            console.error(error);
        }
    }
    const fetchEnrollments = async () => {
        const enrollments = await client.findEnrollmentsForUser(currentUser._id);
        dispatch(setEnrollments(enrollments));
    }
    useEffect(() => {
        fetchEnrollments();
    }, []);
    const onAddNewCourse = async () => {
        const newCourse = await client.createCourse(course);
        dispatch(setCourses([ ...courses, newCourse ]));
    }
    const onUpdateCourse = async () => {
        await client.updateCourse(course);
        dispatch(setCourses(courses.map((c) => {
            if (c._id ===course._id) { return course; }
            else { return c; }
        })));
    };
    const onCreateEnrollmentForCourse = async (cid: string) => {
        const enrollment = await client.enrollUserInCourse(cid, currentUser._id);
        dispatch(setEnrollments([...enrollments, enrollment]));
    };
    const onDeleteEnrollment = async (enrollmentId: string) => {
        await client.deleteEnrollment(enrollmentId);
        dispatch(setEnrollments(enrollments.filter((enrollment: any) => enrollment._id !== enrollmentId)));
    }
    const [displayAll, setDisplayAll] = useState(false);
    useEffect(() => {
        if (displayAll) {
            fetchAllCourses();
        } else {
            fetchCourses();
        }
        
    }, [currentUser, displayAll]);
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
            <button className="btn btn-primary float-end" id="wd-add-new-course-click" onClick={onAddNewCourse} > Add </button>
            <button className="btn btn-warning float-end me-2" onClick={onUpdateCourse} id="wd-update-course-click">
                Update
            </button>
        </h5> 
        )}<br />
      <FormControl value={course.name} className="mb-2" onChange={(e) => setCourse({ ...course, name: e.target.value }) } /> 
      <FormControl value={course.description} as="textarea" rows={3} onChange={(e) => setCourse({ ...course, description: e.target.value}) } />
      <hr />
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
            { !displayAll && courses.map((course: any) => (
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
                                    onDeleteCourse(course._id);
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
            { displayAll && courses.map((course: any) => {

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
                                        <button className="btn btn-danger float-end" onClick={(e) => { 
                                            e.preventDefault();
                                            onDeleteEnrollment(enrollmentId)
                                        }}>Unenroll</button>
                                    ) : (
                                        <button className="btn btn-primary float-end" onClick={(e) => {
                                            e.preventDefault();
                                            onCreateEnrollmentForCourse(cid)
                                        }}>Enroll</button>
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
