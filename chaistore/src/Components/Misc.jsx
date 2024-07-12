import React from 'react'
import "../Styles/Misc.scss"
import logo from "../assets/logo.png";
import {BsMouse} from "react-icons/bs";

const Misc = () => {
  return <>
  <div className="cursor"></div>

  <a href="/" className="logo">
    <img src={logo} alt="logo" />
  </a>

  <a href="/franchise" className="franchisebtn">Get a Franchise</a>

<BsMouse className="scrollbtn" />
  
  </>
}

export default Misc