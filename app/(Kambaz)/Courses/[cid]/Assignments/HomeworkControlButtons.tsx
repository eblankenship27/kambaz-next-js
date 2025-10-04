import GreenCheckmark from "../Modules/GreenCheckmark";
import { IoEllipsisVertical } from "react-icons/io5";

export default function HomeworkControlButtons() {
    return (
        <div className="float-end d-flex align-items-center">
            <GreenCheckmark />
            <IoEllipsisVertical className="fs-4" />
        </div>
    )
}