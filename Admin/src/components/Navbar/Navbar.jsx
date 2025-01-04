import React from 'react'
import "./Navbar.css"
import {assets} from "../../assets/assets"
import 'remixicon/fonts/remixicon.css'

const Navbar = () => {
    return (
        <div className='navbar'>
            <img className='logo' src={assets.logo} alt="" />
            <i className="ri-account-circle-line" style={{ fontSize: '30px' }}></i>
        </div>
    )
}

export default Navbar
