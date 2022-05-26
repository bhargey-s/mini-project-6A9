import React from 'react'
import Heading from './Heading'
import Form from './Form'
import Search from './Search'
import FacultyLoginPage from './FacultyLoginPage'
import Upload from './Upload'
import { BrowserRouter, Route, Routes } from "react-router-dom"

function Main() {
  return (
    <div className="main">
    <Routes>
          <Route path="/" element={<Upload />} />
          <Route path="/facultylogin" element={<FacultyLoginPage />} />
          <Route path="/search" element={<Search />} />
        </Routes>
    </div>
  )
}

export default Main