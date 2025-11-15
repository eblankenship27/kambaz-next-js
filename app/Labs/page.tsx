import Link from "next/link";
export default function Labs() {
 return (
   <div id="wd-labs">
     <h1>Labs</h1>
     <p><strong>Full Name:</strong> Evan Blankenship</p>
     <p><strong>Section Number:</strong> CS4550.11597.202610</p>
     <p><strong>Link to Github repo: </strong><a href="https://github.com/eblankenship27/kambaz-next-js" target="_blank">Links to all relevant source code repositories</a></p>
     <p><strong>Link to Server Github repo:</strong><a href="https://github.com/eblankenship27/kambaz-node-server-app" target="_blank">Link to Server GitHub repo</a></p>
     <p><strong>Link to server base url:</strong><a href="https://kambaz-node-server-app-0tw3.onrender.com/" target="_blank">Link to server</a></p>
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
       <li>
        <Link href="/Labs/Lab4" id="wd-lab3-link">
          Lab 4: Maintaining State with Redux
        </Link>
       </li>
       <li>
        <Link href="/Labs/Lab5" id="wd-lab4-link">
        Lab 5: Express.js RESTful Web APIs</Link>
       </li>
     </ul>
   </div>
);}
