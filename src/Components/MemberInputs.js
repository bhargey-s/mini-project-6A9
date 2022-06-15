import React from 'react'

function MemberInputs({onchange}) {
    return (
        <div className="member">
            <p>Member 1</p>
            <section>
                <label>Name :</label>
                <input type="text" className="name" placeHolder="eg.John" value={members.name} required
                    onChange={e => { onchange(e.target.value) }}></input>
                <label style={{ textAlign: "center" }}>USN :</label>
                <input type="text" className="usn" placeHolder="eg.1DS19CS001" value={members.usn} required onChange={e => { onchange(e.target.value) }}></input>
            </section>
        </div>
    )
}

export default MemberInputs