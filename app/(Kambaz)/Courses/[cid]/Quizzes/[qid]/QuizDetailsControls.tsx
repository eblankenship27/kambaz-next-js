import Link from "next/link";
import { FaPencil } from "react-icons/fa6";


export default function QuizDetailsControls({ cid, qid, role }: { cid: string; qid: string, role: string }) {
    return (
        <div id="wd-quiz-details-controls" className="w-100 d-flex justify-content-center">
            <Link className="btn btn-secondary me-2" href={`/Courses/${cid}/Quizzes/${qid}/Preview`}>Preview</Link>
            {role === "FACULTY" && <Link className="btn btn-secondary me-2" href={`/Courses/${cid}/Quizzes/${qid}/Editor`}><FaPencil className="fs-6 me-1" /> Edit</Link>}
        </div>
    )
}