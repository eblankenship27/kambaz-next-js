"use client"
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Breadcrumb({ course }: { course: { name: string } | undefined; }) {
    const pathname = usePathname();
    const pathlist = pathname.split("/");
    return (
        <span>
            {course?.name}{pathlist.map((segment, index) => {
                if (index > 2 && index < pathlist.length) {
                    return (<span className="text-black" key={index}> &gt; <Link href={pathlist.slice(0, index + 1).join("/")} className={`${index === pathlist.length - 1 ? 'text-black' : 'text-danger' } text-decoration-none`} key={index}>{segment}</Link></span>);
                }
            })}
        </span>
    );
}