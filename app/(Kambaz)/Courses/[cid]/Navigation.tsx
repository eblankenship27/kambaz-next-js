"use client"
import Link from "next/link";
import { useParams } from "next/navigation";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { usePathname} from "next/navigation";
export default function CourseNavigation() {
  const pathname = usePathname();
  const { cid } = useParams();
  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];
  return (
    <ListGroup id="wd-course-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => (
        <ListGroupItem key={link} as={Link} href={`/Courses/${cid}/${link === "People" ? "People" : link}`} className={`list-group-item text-center border-0 ${pathname.includes(link) ? "active" : "text-danger" }`}>
          {link}
        </ListGroupItem>
      ))}
    </ListGroup>
  );
}
