"use client"
import Link from "next/link";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { usePathname} from "next/navigation";
export default function CourseNavigation({ params }: Readonly<{ params: { cid: string } }>) {
  const pathname = usePathname();
  const { cid } = params;
  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];
  return (
    <ListGroup id="wd-course-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => (
        <ListGroupItem key={link} as={Link} href={`/Courses/${cid}/${link === "People" ? "People/Table" : link}`} className={`list-group-item text-center border-0 ${pathname.includes(link) ? "active" : "text-danger" }`}>
          {link}
        </ListGroupItem>
      ))}
    </ListGroup>
  );
}
