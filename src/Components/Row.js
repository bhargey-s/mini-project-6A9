import React from 'react'

function Row(props) {
    const project = props.project;
    return (
        <div className="row">
            <p>{project.name}</p>
            <p>{project.usn}</p>
            <p>{project.subName}</p>
            <p>{project.projectTitle}</p>
            <p>
                <button className="linkBtns">
                    <a href={project.projLink}>Source Code</a>
                </button>
                <button className="linkBtns">
                    <a href={project.projLink}>Project Report</a>
                </button>
            </p>
            <p>{project.marks}</p>
        </div >
    )
}

export default Row