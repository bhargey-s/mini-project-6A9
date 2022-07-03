import React from 'react'

function Row(props) {
    const project = props.project;

    const handleMarks = (e) => {
        console.log(project.assignedfaculty) ;
        // if(project.assignedFaculty!="admin"){
        //     alert("You are not the Assigned Faculty");
        //     return ;
        // }
        let marksPara = e.target.previousSibling;
        // let marks = marksPara.innerText ;
        marksPara.innerHTML = `<textarea cols="5">${marksPara.innerText}</textarea>`;
        let textarea = document.querySelector("textarea");
        textarea.addEventListener("blur", function () {
            marksPara.innerHTML = textarea.value;
        });
    }
    return (
        <div className="row">
            <p>{project.name}</p>
            <p>{project.usn}</p>
            <p>{project.subName}</p>
            <p>{project.projectTitle}</p>
            <p>
                <button className="linkBtns" style={{backgroundColor:"#0189CB"}}>
                    <a href={project.projLink}>Source Code</a>
                </button>
                <button className="linkBtns" style={{backgroundColor:"#E75059"}}>
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