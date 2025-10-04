import { BsPlus } from "react-icons/bs"
import { IoEllipsisVertical } from "react-icons/io5"
export default function AssignmentControlButtons() {
    return (
        <div className="float-end p-0 m-0 d-flex align-items-center">
            <div className="rounded-pill border border-gray text-secondary p-1 fs-6" >
                40% of Total
            </div>

            <BsPlus className="fs-4" />
            <IoEllipsisVertical className="fs-4" /> 
        </div>
    )
}