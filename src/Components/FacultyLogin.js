import React from 'react'
import {Link} from 'react-router-dom'
const submitStyle = {
    width:"10vw",
    margin:"0 auto",
    padding: "1vh 1vw",
    background: "#0686e9",
    borderRadius: "25px",
    color: "white",
    fontFamily: 'Open Sans',
    fontSize: "18px",
    border: "none",
    cursor: "pointer"
};
function FacultyLogin() {
    return (
        <div className="facultyLogin">
            <div className="login">
                <section>
                    <label htmlFor="username">Username : </label>
                    <input type="text" name="username" placeholder="Mobile No./Email" required/>
                </section>
                <section>
                    <label htmlFor="password">Password : </label>
                    <input type="password" name="password" placeholder="Password" required/>
                </section>
                <Link type="submit" className="" style={submitStyle} to='/search'>Login</Link>
            </div>
            <div className="loginNote">
                <ul>
                    <li>You are expected to login with ID number as User Name and Date of Birth as your password. Date of Birth must be in DD-MM-YYYY Format.</li>
                    <li>Upon Login you will be getting all information related to the projects uploaded by the students.</li>
                </ul>
            </div>
        </div>
    )
}

export default FacultyLogin