import React, { useState } from 'react'
import Header from './Header';

function Search() {
    const [searchBy, setSearchBy] = useState(["usn", "eg.1DS19CS001"]);

    const handleChange = (e) => {
        if (e.target.value == "usn")
            setSearchBy(["usn", "eg.1DS19CS001"]);
        else if (e.target.value == "title")
            setSearchBy(["title", "eg.Courier Management System"]);
        if (e.target.value == "name")
            setSearchBy(["name", "eg.Computer Networks"]);
    }
    return (
        <div>
            <Header links={[{name:"",href:""},{name:"LOGOUT",href:""}]}></Header>
            <div className="search">
                <h2>Project Archive</h2>
                <div>
                    <input type="text" placeholder={searchBy[1]} className="searchBar" />
                    <section className="radioBtns">
                        <p>Search by :</p>
                        <input type="radio" name="searchBy" value="usn" checked={searchBy[0] == "usn"} onChange={(e) => handleChange(e)} />
                        <label>USN</label>
                        <input type="radio" name="searchBy" value="title" checked={searchBy[0] == "title"} onChange={(e) => handleChange(e)} />
                        <label>Project Title</label>
                        <input type="radio" name="searchBy" value="name" checked={searchBy[0] == "name"} onChange={(e) => handleChange(e)} />
                        <label>Subject Name</label>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Search