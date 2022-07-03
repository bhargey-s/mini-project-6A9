import React from 'react'

function Row(props) {
    const project = props.project;

    // Called when clicked on Edit button (To change the marks)
    const handleMarks = (e) => {
        // Code to let only the Assignedfaculty to update the marks
        /* if(project.assignedFaculty!="admin"){
            alert("You are not the Assigned Faculty");
            return ;
        } */

        // Making the p tag with marks as textarea 
        let marksPara = e.target.previousSibling;
        marksPara.innerHTML = `<textarea cols="5">${marksPara.innerText}</textarea>`;
        // Making the Textarea back to p tag
        let textarea = document.querySelector("textarea");
        textarea.addEventListener("blur", function () {
            marksPara.innerHTML = textarea.value;
        });
        
        // Update the marks in the database
        // PUT request to the Database using Axios
    }
    return (
        <div className="row">
            <p>{project.name}</p>
            <p>{project.usn}</p>
            <p>{project.subName}</p>
            <p>{project.projectTitle}</p>
            <p>
                <button className="linkBtns" style={{ backgroundColor: "#0189CB" }}>
                    <a href={project.projLink}>Source Code</a>
                </button>
                <button className="linkBtns" style={{ backgroundColor: "#E75059" }}>
                    <a href={project.report}>Project Report</a>
                </button>
            </p>
            <p className="marksTab">
                <p className="marks">
                    {project.marks}
                </p>
                <button className="editMarksBtn" onClick={e => handleMarks(e)}>Edit</button>
            </p>
        </div >
    )
}

export default Row