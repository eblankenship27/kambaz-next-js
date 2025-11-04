import { Button, FormControl, InputGroup } from "react-bootstrap"
import { CiSearch } from "react-icons/ci"
import { FaPlus } from "react-icons/fa6"
import InputGroupText from "react-bootstrap/esm/InputGroupText";
import { redirect, useParams } from "next/navigation";
import { v4 as uuidv4 } from "uuid";

export default function AssignmentControls({ isFaculty }: { isFaculty: boolean}) {
    const { cid } = useParams();
    return (
        <div id="wd-assignments-controls" className="text-nowrap d-flex">
            <InputGroup className="me-4">
                <InputGroupText>
                    <CiSearch className="position-relative me-2" style={{ bottom: "1px" }} />
                </InputGroupText>
                <FormControl />
            </InputGroup>
            { isFaculty && (
                <Button variant="secondary" size="lg" className="me-1 float-end" id="wd-add-group-btn">
                <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} /> Group
                </Button>
            )}
            { isFaculty && (
                <Button variant="danger" size="lg" className="me-1 float-end" id="wd-add-assignment-btn" onClick={() => redirect(`/Courses/${cid}/Assignments/${uuidv4()}`) }>
                <FaPlus className="position-relative me-2" style={{ bottom: "1px"}} />
                Assignment
                </Button>
            )}
        </div>
    )
}