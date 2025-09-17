export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name"><strong>Assignment Name</strong></label><br /><br />
      <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
      <textarea id="wd-description">
        The assignment is available online Submit a link to the landing page of
      </textarea>
      <br /><br />
      <table>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" value={100} /><br/><br/>
          </td>
          
        </tr>
        {/* Complete on your own */}
        <tr>
            <td align="right" valign="top" >
                <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td>
                <select id="wd-group" defaultValue={'assignments'} >
                    <option value='assignments'>ASSIGNMENTS</option>
                </select>
                <br/><br/>
            </td>
        </tr>
        <tr>
            <td align="right" valign="top" >
                <label htmlFor="wd-display-grade-as">Display Grade as</label>
            </td>
            <td>
                <select id="wd-display-grade-as" defaultValue={'percentage'}>
                    <option value="percentage">Percentage</option>
                </select>
                <br/><br/>
            </td>
        </tr>
        <tr>
            <td align="right" valign="top" >
                <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
                <select id="wd-submission-type" defaultValue={'online'}>
                    <option value="online">Online</option>
                </select>
                <br/><br/>
            </td>
        </tr>
        <tr>
            <td align='right' valign='top'>

            </td>
            <td>
                <label htmlFor=''>Online Entry Options</label><br/>

                <input type='checkbox' name='online-entry-options' id="wd-text-entry" />
                <label htmlFor="wd-text-entry">Text Entry</label>
                <br/>

                <input type="checkbox" name='online-entry-options' id="wd-website-url" />
                <label htmlFor="wd-website-url">Website URL</label>
                <br/>

                <input type="checkbox" name='online-entry-options' id="wd-media-recordings" />
                <label htmlFor="wd-media-recordings">Media Recordings</label>
                <br/>

                <input type="checkbox" name='online-entry-options' id="wd-student-annotation" />
                <label htmlFor="wd-student-annotations">Student Annotation</label>
                <br/>

                <input type="checkbox" name='online-entry-options' id="wd-file-upload" />
                <label htmlFor="wd-file-upload">File Uploads</label>
                <br/><br/>
            </td>
        </tr>
        <tr>
            <td align="right" valign="top">
                <label htmlFor="wd-assign-to">Assign</label>
            </td>
            <td>
                <label htmlFor="wd-assign-to">Assign to</label><br/>
                <input value="Everyone" id="wd-assign-to"/>
                <br/><br/>
            </td>
        </tr>
        <tr>
            <td align='right' valign='top'>

            </td>
            <td>
                <label htmlFor="wd-due-date">Due</label><br/>
                <input type="date" />
                <br/><br/>
            </td>
        </tr>
        <tr>
        <td align='right' valign='top'></td>
        <td align='left' >
            <label htmlFor="wd-available-from">Available from</label><br/>
            <input type='date' id="wd-availabile-from" />
        </td>
        <td align='left' >
            <label htmlFor="wd-available-until">Until</label><br/>
            <input type="date" id="wd-available-until" />

        </td>
        </tr>
      </table>
      <hr/>
      <div >
        <button type="button" >Cancel</button>
        <button type="submit" >Save</button>
      </div>
    </div>
);}
