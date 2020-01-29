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
        <img src={logo} alt="logo" />
      </Link>
      <button className="navbar-toggler" type="button" onClick={toggleNav}>
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={isOpen? "collapse navbar-collapse show" 
        : "collapse navbar-collapse"}>
        <ul className="navbar-nav mx-auto">
            {
                Links.map(Links =>{
                    return(
                    <li key={Links.id } className="nav-item" >
                        <Link to={Links.path} className="nav-link text-capitalize">{Links.text}</Link>
                    </li>
                )})}
                <li className="nav-item ml-sm-5">
                    <FaCartArrowDown className="cart-icon"/>
                   
                </li>
        </ul>

      </div>
    </nav>
  )
}

export default Navbar
