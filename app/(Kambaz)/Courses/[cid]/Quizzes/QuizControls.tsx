import { FormControl } from "react-bootstrap";
import { FaPlus } from "react-icons/fa6";
import { IoEllipsisVertical } from "react-icons/io5";


export default function QuizControls({ isFaculty, setFilter, addQuiz }: { isFaculty: boolean, setFilter: (filter: string) => void, addQuiz: () => void } ) {
    return (
        <div id="wd-quiz-controls" >
            <FormControl onChange={(e) => setFilter(e.target.value)} placeholder="Search for Quiz" className="float-start me-2 w-25 rounded-1" id="wd-quiz-filter" />
            { isFaculty && (
                <div>
                    <button className="btn btn-secondary float-end me-1 rounded-1" id="wd-quiz-controls-btn">
                        <IoEllipsisVertical className="fs-5" />
                    </button>
                    <button className="btn btn-danger float-end me-1 rounded-1" id="wd-add-quiz-btn" onClick={addQuiz}>
                        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} /> Quiz
                    </button>
                </div>
            )}
        </div> 
    )
}