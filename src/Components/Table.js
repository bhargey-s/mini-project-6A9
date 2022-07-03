import React from 'react'
import Projects from './Projects'
import Row from './Row'

function Table(props) {
    const searchVal = props.searchVal;
    let displayProjects = Projects.filter((project) => {
        return project.subName.toLowerCase() == searchVal.toLowerCase() || project.usn.toLowerCase() == searchVal.toLowerCase() || project.projectTitle.toLowerCase() == searchVal.toLowerCase();
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
            {displayProjects.length != 0 ? displayProjects.map((project) => {
                console.log(project);
                return <Row project={project}></Row>
            }) : <p>No projects found</p>}
        </div>
    )
}

export default Table