import React, { useState } from 'react'
import Header from './Header';
import SearchResult from './SearchResult';


function Search() {
    const [searchBy, setSearchBy] = useState(["usn", "eg.1DS19CS001"]);
    const [displayResult, setDisplayResult] = useState(false);
    const [searchVal,setSearchVal] = useState("hello") ;

    const handleChange = (e) => {
        if (e.target.value === "usn")
            setSearchBy(["usn", "eg.1DS19CS001"]);
        else if (e.target.value === "projectTitle")
            setSearchBy(["projectTitle", "eg.Courier Management System"]);
        if (e.target.value === "subName")
            setSearchBy(["subName", "eg.Computer Networks"]);
    }
  

    return (
        <div>
            <Header links={[{ name: "", href: "" }, { name: "LOGOUT", href: "/facultylogin" }]}></Header>
            <div className="search">
                <h2>Project Archive</h2>
                <div>
                    <section>
                        <input type="text" placeholder={searchBy[1]} className="searchBar" onChange={(e) => {setSearchVal(e.target.value)}} />
                        <button className="searchBtn" onClick={() => setDisplayResult(true)}>Search </button>
                    </section>
                    <section className="radioBtns">
                        <p>Search by :</p>
                        <input type="radio" name="searchBy" value="usn" checked={searchBy[0] === "usn"} onChange={(e) => handleChange(e)} />
                        <label>USN</label>
                        <input type="radio" name="searchBy" value="projectTitle" checked={searchBy[0] === "projectTitle"} onChange={(e) => handleChange(e)} />
                        <label>Project Title</label>
                        <input type="radio" name="searchBy" value="subName" checked={searchBy[0] === "subName"} onChange={(e) => handleChange(e)} />
                        <label>Subject Name</label>
                    </section>
                </div>
            </div>
            {(displayResult)?<SearchResult searchVal={searchVal} searchBy={searchBy}></SearchResult>: ""}
        </div>
    )
}

export default Search