/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { ReactNode, useState } from "react";
import CourseNavigation from "./Navigation";
import { FaAlignJustify } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useParams } from "next/navigation";
import { RootState } from "../../store";
import Breadcrumb from "./Breadcrumb";
export default function CoursesLayout(
  { children }: { children: ReactNode }) {
 const [navOpen, setNavOpen] = useState<boolean>(false);
 const { cid } = useParams();
 const { courses } = useSelector((state: RootState) => state.coursesReducer);
 const course = courses.find((course: any) => course._id === cid);

 const toggleNav = () => setNavOpen((v) => !v);

 return (
  <div id="wd-courses">
    <h2 className="text-danger">
      <button
        type="button"
        onClick={toggleNav}
        className="btn btn-link p-0 me-3 text-decoration-none text-danger"
        title="Toggle navigation"
      >
        <FaAlignJustify className="fs-4 mb-1" />
      </button>
      <Breadcrumb course={course} />
    </h2>
      <hr />
      <div className="d-flex">
        <div id="course-nav" className={`${navOpen ? "d-block" : "d-none"} d-md-block me-3` }>
          <CourseNavigation />
        </div>
        <div className="flex-fill">
          {children}
        </div>
      </div>
   </div>
);}
