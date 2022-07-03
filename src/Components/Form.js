import React, { useEffect, useState } from 'react'
import Modal from './Modal'
import MemberRow from './MemberRow';

function Form() {
    const initialState = { noMembers: 1, membersDetails: members, semester: 1, subject: "", subCode: "", title: "", assignedFaculty: "", projLink: "", report: "" };
    // Details is the main state which will store all the inputs of the form
    const [details, setDetails] = useState(initialState);

    // Member state to properly store the members and after saving updating it in the details state
    const [members, setMembers] = useState([{ name: "", usn: "" }]);

    // State to hold the errors in the Name and USN
    const [formErrors, setFormErrors] = useState({ name: [], usn: [] });

    // State which holds the Team Id and set only if the form is validated
    const [teamId, setTeamId] = useState(null);

    // To show the Project added successfully popup
    const [modalShow, setModalShow] = useState(false);

    // Store the members details before updating the state
    let memberArr = [];

    // Function called on Clicking the Save Members button 
    const handleMembers = (e) => {
        // preventDefault() To prevent the page to refresh
        e.preventDefault();

        // Collecting all the Name input values for further validation
        var names = Array.from(document.querySelectorAll(".name")).map((input) => {
            return input.value;
        });

        // Collecting all the USN input values for further validation
        var usns = Array.from(document.querySelectorAll(".usn")).map((input) => {
            return input.value;
        });

        // Validating only the Names and USN before saving them
        // And setting the Errors if any
        setFormErrors(validate(names, usns));

        // Checking if there are any errors or not
        // If there are errors then don't save the members
        if (formErrors.name.length != 0 || formErrors.usn.length != 0) {
            return 0;
        }
        // Else save the Members and also update the members in the details state
        else if (formErrors.name.length == 0 || formErrors.usn.length == 0){
            for (let i = 0; i < details.noMembers; i++) {
                memberArr[i] = { name: names[i], usn: usns[i] };
            }
            setMembers(memberArr);
            setDetails({ ...details, membersDetails: members });
        }
    }

    // Validation function only for Names and USN
    // Other inputs will be validated automatically using the required attribute
    const validate = (names, usns) => {
        const errors = { name: [], usn: [] };
        const regex = /1[dD][sS]\d\d[cC][sS]\d\d\d/i;
        // Checking for any errors in any of the Name input
        names.forEach((element, index) => {
            if (element.length == 0)
                errors.name[index] = "Name is required";
        });
        // Checking for any errors in any of the USN input
        usns.forEach((element, index) => {
            if (element == "")
                errors.usn[index] = "USN is required";
            else if (!regex.test(element))
                errors.usn[index] = "Enter a valid USN";
        });
        return errors;
    }

    // Called when value of any of the inputs is changed
    const handleChange = (e) => {
        const { name, value } = e.target;
        // On changing the no. of Members, the no. of MemberInputs will change
        if (name == "noMembers") {
            for (let i = 0; i < value; i++) {
                memberArr.push({ name: "", usn: "" });
            }
            setMembers(memberArr);
        }
        // Updating the details state when input changes
        setDetails({ ...details, [name]: value });
    }

    // Called when clicked on button Team ID
    // Works as a Submit button of the form
    // Will only execute if all the inputs are filled
    const handleTeamId = (e) => {
        // preventDefault() To prevent the page to refresh
        e.preventDefault();
        if (formErrors.name.length == 0 || formErrors.usn.length == 0) {
            // Fetch the team Id with axios
            //  And then set teamId using setTeamId method
            setTeamId("Team ID : 19CNL0005")
        }
    }

    // Only displayed when the TeamID is fetched and the teamId state is set some value
    const handleSubmit = (e) => {
        e.preventDefault();
        // Axios POST request
        // Post the details state into the database
        setDetails(initialState);
        setTeamId(null);
        setMembers([{ name: "", usn: "" }]);
        showModal();
    }

    // To show the popup
    const showModal = () => {
        setModalShow(true);
    };
    // To hide the popup
    const hideModal = () => {
        setModalShow(false);
        return true;
        window.location.reload() ;
    };

    return (
        <React.Fragment>
            <form className="form" onSubmit={handleTeamId}>

                <div className="noMembers">
                    <label>No. of Members :</label>
                    <select name="noMembers" onChange={handleChange}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                </div>

                {members.map((curItem, index) => {
                    return (
                        <React.Fragment>
                            <MemberRow key={index} i={index} obj={curItem}></MemberRow>
                            {Object.keys(formErrors).length !== 0 &&
                                <div className="errors">
                                    <span>{formErrors.name[index]}</span>
                                    <span>{formErrors.usn[index]}</span>
                                </div>
                            }
                        </React.Fragment>
                    )
                })}
                <button className="saveBtn" onClick={handleMembers}>Save Members</button>

                <div className="noMembers semester">
                    <label>Semester :</label>
                    <select name="semester" onChange={handleChange}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                    </select>
                </div>

                <div>
                    <label>Subject Name :</label>
                    <select
                        type="text"
                        name="subject"
                        className="subjectname"
                        defaultValue=""
                        placeholder="eg.Computer Networks"
                        value={details.subject}
                        required
                        onChange={handleChange}>
                        <option value="" disabled>Select</option>
                        <option value="CN">Computer Networks</option>
                        <option value="DBMS">Database Management System</option>
                        <option value="OPJ">Object Oriented Programming with Java</option>
                        <option value="SS">System Software</option>
                    </select>
                    {/* <input type="text" className="subjectname" placeHolder="eg.Computer Networks" value={subject} required onChange={e => { setSubject(e.target.value) }} /> */}
                </div>

                <div>
                    {/* <label>Subject Code :</label>
                <input type="text" placeHolder={"eg.1DS19CS5DSCNL"} value={subCode} required onChange={e => { setSubCode(e.target.value) }} />*/}
                    <label>Assigned Faculty :</label>
                    <select
                        type="text"
                        name="assignedFaculty"
                        className="subjectname"
                        defaultValue=""
                        value={details.assignedFaculty}
                        required
                        onChange={handleChange}>
                        <option value="" disabled>Select</option>
                        <option value="AG">Prof. Anupama G</option>
                        <option value="VM">Dr.Vindhya M</option>
                        <option value="DG">Dr.Deepak G</option>
                        <option value="RRS">Dr.Ramya R S</option>
                        <option value="AM">Prof. Almas M</option>
                    </select>
                </div>

                <div>
                    <label>Project Title :</label>
                    <input
                        type="text"
                        name="title"
                        className="subjectcode"
                        value={details.title}
                        required
                        onChange={handleChange} />
                </div>

                <div>
                    <label>Project Type :</label>
                    <input type="radio" name="gender" checked readOnly />
                    <label>Minor Project</label>
                    <input type="radio" name="gender" readOnly />
                    <label>Major Project</label>
                </div>

                <div>
                    <label className="report" htmlFor="report">Upload Synopsis/Report :</label>
                    <input
                        type="file"
                        className="report"
                        name="report"
                        required
                        value={details.report}
                        onChange={handleChange} />
                </div>

                <div>
                    <label htmlFor="projectlink">Upload Project Link :</label>
                    <input
                        type="text"
                        name="projLink"
                        className="projectlink"
                        placeholder="Github/Drive Link"
                        required
                        value={details.projLink}
                        onChange={handleChange} />
                </div>

                <button
                    className="generateId"
                    disabled={teamId}
                    type="submit">
                    Generate Team Id
                </button>

                <p className="teamId">{teamId}</p>
                {teamId && <button onClick={handleSubmit} className="submit">Submit</button>}
            </form>
            <Modal show={modalShow} handleClose={hideModal}></Modal>
        </React.Fragment>
    )
}

export default Form;