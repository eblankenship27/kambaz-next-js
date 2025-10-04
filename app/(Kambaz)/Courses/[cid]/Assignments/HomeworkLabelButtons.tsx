import { BsGripVertical } from "react-icons/bs";
import { MdOutlineAssignment } from "react-icons/md";


export default function HomeworkLabelButtons() {
    return (
        <div className="float-end d-flex align-items-center justify-content-center me-2">
            <BsGripVertical className="me-1 fs-3" />
            <MdOutlineAssignment className="fs-2 text-success" />
        </div>
    )
}