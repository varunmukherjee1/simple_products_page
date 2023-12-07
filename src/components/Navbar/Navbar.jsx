import React from 'react'
import { useNavigate } from "react-router-dom"

import classes from "./navbar.module.css"
import logo from "../../assets/logo.png"

const Navbar = () => {

  const navigate = useNavigate();

  const onClickHandler = () => {
    navigate(`/`)
  }

  return (
    <div className = {classes.box} onClick={onClickHandler}>
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