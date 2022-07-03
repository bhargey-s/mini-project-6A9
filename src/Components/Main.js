import React from 'react'
import Heading from './Heading'
import Form from './Form'
import Search from './Search'
import FacultyLogin from './FacultyLogin'
import Upload from './Upload'
import { BrowserRouter, Route, Routes } from "react-router-dom"

function Main() {
  return (
    <div className="main">
    <Routes>
          <Route path="/" element={<Upload />} />
          <Route path="/facultylogin" element={<FacultyLogin/>} />
          <Route path="/search" element={<Search />} />
        </Routes>
    </div>
  )
}

export default Main