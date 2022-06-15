import React from 'react'
import Projects from './Projects'
import Row from './Row'

function Table(props) {
    const searchVal = props.searchVal;
    let displayProjects = Projects.filter((project) => {
        return project.subName == searchVal || project.usn == searchVal || project.projectTitle == searchVal;
    })
    return (
        <div className="table">
            <div className="tableHead">
                <p>Name</p>
                <p>USN</p>
                <p>Subject</p>
                <p>Project Title</p>
                <p>Links</p>
                <p>Marks</p>
            </div>
            {displayProjects.map((project) => {
                return <Row project={project}></Row>
            })}
        </div>
    )
}

export default Table