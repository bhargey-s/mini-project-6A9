import React from 'react'
import Header from './Header'
import Heading from './Heading'
import FacultyLogin from './FacultyLogin'

function FacultyLoginPage() {
    return (
        <div>
        <Header links={[{name:"HOME",href:""},{name:"UPLOAD",href:""}]}></Header>
        <div>
        <Heading intro={["Faculty Login", ""]}></Heading>
        <FacultyLogin></FacultyLogin>
        </div>
        </div>
    )
}

export default FacultyLoginPage