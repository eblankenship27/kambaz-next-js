import React, { ReactNode } from "react";
export default function Sqaure({ children }: { children: ReactNode }) {
    const num = Number(children);
    return <span id="wd-square">{num * num}</span>;
}