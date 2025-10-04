import { Button, FormControl, InputGroup } from "react-bootstrap"
import { CiSearch } from "react-icons/ci"
import { FaPlus } from "react-icons/fa6"
import InputGroupText from "react-bootstrap/esm/InputGroupText";

export default function AssignmentControls() {
    return (
        <div id="wd-assignments-controls" className="text-nowrap d-flex">
            <InputGroup className="me-4">
                <InputGroupText>
                    <CiSearch className="position-relative me-2" style={{ bottom: "1px" }} />
                </InputGroupText>
                <FormControl />
            </InputGroup>
            <Button variant="secondary" size="lg" className="me-1 float-end" id="wd-add-group-btn">
                <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} /> Group
            </Button>
            <Button variant="danger" size="lg" className="me-1 float-end" id="wd-add-assignment-btn">
                <FaPlus className="position-relative me-2" style={{ bottom: "1px"}} />
                Assignment
            </Button>
        </div>
    )
}