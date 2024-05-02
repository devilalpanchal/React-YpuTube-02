import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
        <Link to="/home">Home</Link> <br/> <br/>
        <Link to="/file">File</Link> <br/> <br/>
        <Link to="/login">it is not component</Link> <br/> <br/>
    </div> 
  )
}

export default Navbar