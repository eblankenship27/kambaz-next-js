import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../../../Modules/GreenCheckmark";
import RedStrikethrough from "../../RedStrikethrough";


export default function QuizEditorControls({isPublished, points }: {isPublished: boolean, points: number}) {
    return (
        <div id="wd-quiz-control-buttons" className="float-end d-flex align-items-center justify-content-center">
            <span className="me-2 fs-5">Points {points}</span>
            {isPublished ? <span className="me-2 text-secondary"><GreenCheckmark /> Published</span> : <span className="me-2 text-secondary"><RedStrikethrough /> Not Published</span>}
            <button className="btn btn-secondary me-1 rounded-1" id="wd-quiz-controls-btn">
                <IoEllipsisVertical className="fs-5" />
            </button>
        </div>
    )
}