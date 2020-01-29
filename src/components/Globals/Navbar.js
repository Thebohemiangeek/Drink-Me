import React, { useState } from "react"
import { Link } from "gatsby"
import logo from "../../images/logo.svg"
import { FaCartArrowDown } from "react-icons/fa"
import Links from "./Links"

const Navbar = () => {
  const [isOpen, setNav] = useState(false)
  const toggleNav = () => {
    setNav(isOpen => !isOpen)
  }

  return (
    <nav className="navbar navbar-expand-sm bg-light navbar-light">
<Link to="/" className="navbar-brand">
    <img src={logo} alt="logo"/></Link>    </nav>
  )
}

export default Navbar
