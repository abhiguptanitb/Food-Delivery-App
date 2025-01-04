import React from 'react'
import "./Sidebar.css"
import { NavLink } from 'react-router-dom'
import 'remixicon/fonts/remixicon.css'

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="sidebar-options">
                <NavLink to='/add' className="sidebar-option">
                    <i className="ri-add-circle-line" style={{ fontSize: '30px'}}></i>
                    <p>Add Items</p>
                </NavLink>
                <NavLink to='/list' className="sidebar-option">
                    <i className="ri-list-view" style={{ fontSize: '30px'}}></i>
                    <p>List Items</p>
                </NavLink>
                <NavLink to='/orders' className="sidebar-option">
                    <i className="ri-check-double-fill" style={{ fontSize: '30px'}}></i>
                    <p>Orders</p>
                </NavLink>
            </div>
        </div>
    )
}

export default Sidebar
