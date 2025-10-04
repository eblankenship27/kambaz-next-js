import { Table } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
export default function PeopleTable() {
 return (
  <div id="wd-people-table">
   <Table striped>
    <thead>
     <tr><th>Name</th><th>Login ID</th><th>Section</th><th>Role</th><th>Last Activity</th><th>Total Activity</th></tr>
    </thead>
    <tbody>
     <tr><td className="wd-full-name text-nowrap">
          <FaUserCircle className="me-2 fs-1 text-secondary" />
          <span className="wd-first-name">Tony</span>{" "}
          <span className="wd-last-name">Stark</span></td>
      <td className="wd-login-id">001234561S</td>
      <td className="wd-section">S101</td>
      <td className="wd-role">STUDENT</td>
      <td className="wd-last-activity">2020-10-01</td>
      <td className="wd-total-activity">10:21:32</td></tr>
      <tr>
        <td className="wd-full-name text-nowrap">
            <FaUserCircle className="me-2 fs-1 text-secondary" />
            <span className="wd-first-name">Jonathan</span>
            {" "}
            <span className="wd-last-name">Sims</span>
        </td>
        <td className="wd-login-id">00123462S</td>
        <td className="wd-section">S101</td>
        <td className="wd-role">STUDENT</td>
        <td className="wd-last-activity">2025-10-2</td>
        <td className="wd-total-activity">24:30:47</td>
      </tr>
      <tr>
        <td className="wd-full-name text-nowrap">
            <FaUserCircle className="me-2 fs-1 text-secondary" />
            <span className="wd-first-name">Will</span> 
            {" "}
            <span className="wd-last-name">Hunting</span>
        </td>
        <td className="wd-login-id">001234563S</td>
        <td className="wd-section">S101</td>
        <td className="wd-role">STUDENT</td>
        <td className="wd-last-activity">2024-3-12</td>
        <td className="wd-total-activity">13:29:19</td>
      </tr>
      <tr>
        <td className="wd-full-name text-nowrap">
            <FaUserCircle className="me-2 fs-1 text-secondary" />
            <span className="wd-first-name">Santa</span> 
            {" "}
            <span className="wd-last-name">Claus</span>
        </td>
        <td className="wd-login-id">001234564S</td>
        <td className="wd-section">S101</td>
        <td className="wd-role">STUDENT</td>
        <td className="wd-last-activity">2023:5:28</td>
        <td className="wd-total-activity">17:52:18</td>
      </tr>
    </tbody>
   </Table>
  </div> );}