import { FaTrash } from "react-icons/fa";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { IoEllipsisVertical } from "react-icons/io5";

export default function HomeworkControlButtons({ assignmentId, deleteAssignment, isFaculty }: { assignmentId: string, deleteAssignment: (assignmentId: string) => void, isFaculty: boolean}) {
    return (
        <div className="float-end d-flex align-items-center">
            { isFaculty && 
                <FaTrash className="text-danger me-2 mb-1" onClick={() =>  deleteAssignment(assignmentId)} />    
            }
            <GreenCheckmark />
            <IoEllipsisVertical className="fs-4" />
        </div>
    )
}