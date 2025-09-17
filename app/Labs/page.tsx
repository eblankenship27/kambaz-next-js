import Link from "next/link";
export default function Labs() {
 return (
   <div id="wd-labs">
     <h1>Labs</h1>
     <p><strong>Full Name:</strong> Evan Blankenship</p>
     <p><strong>Section Number:</strong> CS4550.11597.202610</p>
     <p><strong>Link to Github repo: </strong><a href="https://github.com/eblankenship27/kambaz-next-js" target="_blank">Links to all relevant source code repositories</a></p>
     <ul>
       <li>
         <Link href="/Labs/Lab1" id="wd-lab1-link">
           Lab 1: HTML Examples </Link>
       </li>
       <li>
         <Link href="/Labs/Lab2" id="wd-lab2-link">
           Lab 2: CSS Basics </Link>
       </li>
       <li>
         <Link href="/Labs/Lab3" id="wd-lab3-link">
           Lab 3: JavaScript Fundamentals </Link>
       </li>
     </ul>
   </div>
);}
