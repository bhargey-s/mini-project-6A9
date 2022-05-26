import React from 'react'
const submitStyle = {
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
                    <input type="text" name="username" />
                </section>
                <section>
                    <label htmlFor="password">Password : </label>
                    <input type="password" name="password" />
                </section>
                <button type="submit" className="" style={submitStyle}>Submit</button>
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