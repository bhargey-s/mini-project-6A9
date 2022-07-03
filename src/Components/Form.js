import React, { useEffect, useState } from 'react'
import Modal from './Modal'
import MemberRow from './MemberRow';

function Form() {
    const initialState = { noMembers: 1, membersDetails: members, semester: 1, subject: "", subCode: "", title: "", assignedFaculty: "", projLink: "", report: "" };
    const [details, setDetails] = useState(initialState);
    const [formErrors, setFormErrors] = useState({ name: [], usn: [] });
    const [isSubmit, setIsSubmit] = useState(false);
    const [teamId, setTeamId] = useState(null);
    const [modalShow, setModalShow] = useState(false);
    const [members, setMembers] = useState([{ name: "", usn: "" }]);

    let memberArr = [];

    const handleMembers = (e) => {
        e.preventDefault();
        var names = Array.from(document.querySelectorAll(".name")).map((input) => {
            return input.value;
        });

        var usns = Array.from(document.querySelectorAll(".usn")).map((input) => {
            return input.value;
        });

        setFormErrors(validate(names, usns));

        if (formErrors.name.length != 0 || formErrors.usn.length != 0) {
            return 0;
        }
        else {
            for (let i = 0; i < details.noMembers; i++) {
                memberArr[i] = { name: names[i], usn: usns[i] };
            }
            console.log(memberArr);
            setMembers(memberArr);
            setDetails({ ...details, membersDetails: members });
        }
    }

    const validate = (names, usns) => {
        const errors = { name: [], usn: [] };
        const regex = /1[dD][sS]\d\d[cC][sS]\d\d\d/i;
        names.forEach((element, index) => {
            if (element.length == 0)
                errors.name[index] = "Name is required";
        });
        usns.forEach((element, index) => {
            if (element == "")
                errors.usn[index] = "USN is required";
            else if (!regex.test(element))
                errors.usn[index] = "Enter a valid USN";
        });
        return errors;
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name == "noMembers") {
            for (let i = 0; i < value; i++) {
                memberArr.push({ name: "", usn: "" });
            }
            setMembers(memberArr);
        }
        setDetails({ ...details, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setDetails(initialState);
        setTeamId(null);
        // setIsSubmit(false);
        showModal();
    }

    const showModal = () => {
        setModalShow(true);
    };

    const hideModal = () => {
        setModalShow(false);
        return true;
    };


    const handleTeamId = (e) => {
        e.preventDefault();
        // setIsSubmit(true);
        if (formErrors.name.length == 0 || formErrors.usn.length == 0) {
            // Fetch the team Id with axios and then set
            setTeamId("Team ID : 19CNL0005")

        }
        // setDetails({ noMembers: noMembers, members: members, subject: subject, subCode: subCode, title: title, assignedFaculty: assignedFaculty });
    }

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
                    <p className="error">{formErrors.subject}</p>
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
                    <p className="error">{formErrors.assignedFaculty}</p>
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
                    <p className="error">{formErrors.title}</p>
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
                    // onClick={handleTeamId}
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