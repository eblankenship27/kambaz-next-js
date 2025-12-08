import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../Modules/GreenCheckmark";
import RedStrikethrough from "./RedStrikethrough";
import Dropdown from "react-bootstrap/Dropdown";


export default function QuizControlButtons({isPublished, qid, deleteQuiz, setPublished}: {isPublished: boolean, qid: string, deleteQuiz: () => void, setPublished: () => void}) {
    return (
        <div id="wd-quiz-control-buttons" className="ms-auto d-flex align-items-center">
            {isPublished ? <GreenCheckmark /> : <RedStrikethrough />}
            <Dropdown>
                <Dropdown.Toggle variant="link" className="p-0 m-0 text-decoration-none text-dark dropdown-toggle-no-caret">
                    <IoEllipsisVertical className="fs-4" />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item onClick={setPublished}>Publish/Unpublish</Dropdown.Item>
                    <Dropdown.Item onClick={deleteQuiz}>Delete</Dropdown.Item>
                    <Dropdown.Item href={`${qid}`}>Edit</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}