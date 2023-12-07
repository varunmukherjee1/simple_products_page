import React from 'react'

import classes from "./navbar.module.css"
import logo from "../../assets/logo.png"

const Navbar = () => {
  return (
    <div className = {classes.box}>
      <div className = {classes.container}>
        <div className = {classes.logo}>
          <img src= {logo} alt="Logo" />
          <p>Small E-Commerce</p>
        </div>
      </div>
    </div>
  )
}

export default Navbar