import React, { useEffect, useState } from 'react'

function Form1() {
    const [details, setDetails] = useState({ noMembers: 1, members: [{ name: "", usn: "" }], subject: "", subCode: "", title: "", assignedFaculty: "" });
    const [noMembers, setNoMembers] = useState(1);
    const [members, setMembers] = useState([{ name: "", usn: "" }]);
    const [subject, setSubject] = useState("");
    const [subCode, setSubCode] = useState("");
    const [title, setTitle] = useState("");
    const [assignedFaculty, setAssignedFaculty] = useState("");
    const [semster,setSemester] = useState(1) ;
    const validUSN = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$'
);
    const handleSubmit = () => {
        setDetails({ noMembers: noMembers, members: members, subject: subject, subCode: subCode, title: title, assignedFaculty: assignedFaculty }) ;
    }

    const memberInput = () => {
        let memberInputs = [];
        for (var i = 0; i < noMembers; i++) {

            memberInputs.push(<div className="member">
                <p>Member 1</p>
                <section>
                    <label>Name :</label>
                    <input type="text" className="name" placeHolder="eg.John" value={members.name} required
                        onChange={e => { setMembers(e.target.value) }}></input>
                    <label style={{ textAlign: "center" }}>USN :</label>
                    <input type="text" className="usn" placeHolder="eg.1DS19CS001" value={members.usn} required onChange={e => { setMembers(e.target.value) }}></input>
                </section>
            </div>);
        }
        console.log(memberInputs);
        return memberInputs;
    }

    return (
        <form className="form1" onSubmit={() => handleSubmit()}>
            <div className="noMembers">
                <label>No. of Members :</label>
                <select onChange={e => { setNoMembers(e.target.value) }}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
            </div>
            <div className="member">
                <p>Member 1</p>
                <section>
                    <label>Name :</label>
                    <input type="text" className="name" placeHolder="eg.John" value={members.name} required
                        onChange={e => { setMembers(e.target.value) }}></input>
                    <label style={{ textAlign: "center" }}>USN :</label>
                    <input type="text" className="usn" placeHolder="eg.1DS19CS001" value={members.usn} required onChange={e => { setMembers(e.target.value) }}></input>
                </section>
            </div>
            <div className="noMembers semester">
                <label>Semester :</label>
                <select onChange={e => { setSemester(e.target.value) }}>
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
                <select type="text" className="subjectname" placeHolder="eg.Computer Networks" value={subject} required onChange={e => { setSubject(e.target.value) }}>
                    <option value="" selected disabled>Select</option>
                    <option value="CN">Computer Networks</option>
                    <option value="DBMS">Database Management System</option>
                    <option value="3">Object Oriented Programming with Java</option>
                    <option value="SS">System Software</option>
                </select>
                {/* <input type="text" className="subjectname" placeHolder="eg.Computer Networks" value={subject} required onChange={e => { setSubject(e.target.value) }} /> */}
            </div>
            <div>
                {/* <label>Subject Code :</label>
                <input type="text" placeHolder={"eg.1DS19CS5DSCNL"} value={subCode} required onChange={e => { setSubCode(e.target.value) }} />*/}
                <label>Assigned Faculty :</label>
                <select type="text" className="subjectname" placeHolder="eg.Computer Networks" value={subject} required onChange={e => { setAssignedFaculty(e.target.value) }}>
                    <option value="" selected disabled>Select</option>
                    <option value="AG">Prof. Anupama G</option>
                    <option value="VM">Dr.Vindhya M</option>
                    <option value="DG">Dr.Deepak G</option>
                    <option value="RRS">Dr.Ramya R S</option>
                    <option value="AM">Prof. Almas M</option>
                </select>
            </div>
            <div>
                <label>Project Title :</label>
                <input type="text" className="subjectcode" value={title} required onChange={e => { setTitle(e.target.value) }} />
            </div>
            <div>
                <label>Project Type :</label>
                <input type="radio" name="gender" checked />
                <label>Minor Project</label>
                <input type="radio" name="gender" />
                <label>Major Project</label>
            </div>
            <button type="submit" className="generateId">Generate Team Id</button>
        </form>
    )
}

export default Form1