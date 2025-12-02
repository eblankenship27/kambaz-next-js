/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import PeopleTable from "./Table";
import * as client from "../../client"
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";


export default function People() {
    const [users, setUsers] = useState<any[]>([]);
    const { cid } = useParams();
    const { uid } = useParams();
    const fetchUsers = async () => {
        const users = await client.findUsersForCourse(cid as string);
        setUsers(users);
    }
    useEffect(() => {
        fetchUsers();
    }, [uid]);
    return (
        <div id="wd-people-page">
            <h3>People</h3>
            <PeopleTable users={users} fetchUsers={fetchUsers} />
        </div>
    );
}