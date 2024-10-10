import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <div>
      <h1>Navbar Here</h1>
      <Link to={"/auth/login"}>Login</Link><br />
      <Link to={"/auth/create"}>create</Link>
    </div>
  )
}
