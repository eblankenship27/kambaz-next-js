'use client' 
import React, { useState } from "react";
import { FormCheck, FormControl } from "react-bootstrap";
const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
export default function WorkingWithObjects() {
    const [assignment, setAssignment] = useState({
        id: 1, title: "NodeJS Assignment", 
        description: "Create a NodeJS server with ExpressJS",
        due: "2025-11-14", completed: false, score: 0,
    });
    const [module, setModule] = useState({
        id: 1, name: "NodeJS Module",
        description: "Class module to learn about ExpressJS and Working on a Server",
        course: "RS101",
    })
    const ASSIGNMENT_API_URL = `${HTTP_SERVER}/lab5/assignment`
    return (
        <div id="wd-working-with-objects">
            <h3>Working With Objects</h3>
            <h4>Modifying Properties</h4>
            <a id="wd-update-assignment-title" className="btn btn-primary float-end" href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}>
                Update Title
            </a>
            <FormControl className="w-75" id="wd-assignment-title" defaultValue={assignment.title} onChange={(e) => setAssignment({ ...assignment, title: e.target.value })} />
            <hr />
            <h4>Modifying Assignment score</h4>
            <a id="wd-update-assignment-score" className="btn btn-primary float-end" href={`${ASSIGNMENT_API_URL}/score/${assignment.score}`}>
                Update Score
            </a>
            <FormControl className="w-75" type="nu" id="wd-assignment-score" defaultValue={assignment.score} onChange={(e) => setAssignment({ ...assignment, score: parseInt(e.target.value)})} />
            <hr />
            <h4>Modifying Completed</h4>
            <a className="btn btn-primary float-end" id="wd-update-assignment-completed" href={`${ASSIGNMENT_API_URL}/completed/${assignment.completed}`}>
                Update Completed
            </a>
            <FormCheck id="wd-assignment-completed" checked={assignment.completed} onChange={(e) => setAssignment({ ...assignment, completed: e.target.checked})} />
            <hr />
            <h4>Retrieving Objects</h4>
            <a id="wd-retrieve-assignments" className="btn btn-primary" href={`${HTTP_SERVER}/lab5/assignment`}>
                Get Assignment
            </a><hr />
            <h4>Retrieving Properties</h4>
            <a id="wd-retrieve-assignment-title" className="btn btn-primary" href={`${HTTP_SERVER}/lab5/assignment/title`}>
                Get Assignment Title
            </a>
            <hr />
            <h4>Set Module Name Section</h4>
            <a id="wd-update-module-name" className="btn btn-primary float-end" href={`${HTTP_SERVER}/lab5/module/${module.name}`}>
                Update Name
            </a>
            <FormControl className="w-75" id="wd-module-name" defaultValue={module.name} onChange={(e) => setModule({...module, name: e.target.value})} />
            <hr />
            <h4>Get Module Section</h4>
            <a id="wd-retrieve-module" className="btn btn-primary" href={`${HTTP_SERVER}/lab5/module`}>
                Get Module
            </a><hr />
            <h4>Get Module Title Section</h4>
            <a id="wd-retrieve-module-title" className="btn btn-primary" href={`${HTTP_SERVER}/lab5/module/name`}>
                Get Module Title
            </a><hr />
        </div>
    )
}