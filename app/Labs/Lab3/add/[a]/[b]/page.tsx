"use client"
import { useParams } from "next/navigation";
export default function AddPathParamters() {
    const { a, b } = useParams(); 
    return (
        <div id="wd-add">
            <h4>Add Path Paramters</h4>
            {a} + {b} = {parseInt(a as string) + parseInt(b as string)}
        </div>
    );
}