import React, { useContext, useState } from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets'
import {Link, useNavigate} from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'
import 'remixicon/fonts/remixicon.css'

const Navbar = ({setShowLogin, showLogin}) => {

    const [menu,setMenu]=useState("Home");

    const {getTotalCartAmount,token,setToken} = useContext(StoreContext);

    const navigate=useNavigate();

    const logout=()=>{
        localStorage.removeItem("token");
        setToken("");
        navigate("/");
    }

    return (
        <div className='navbar'>
            <Link to='/'><img src={assets.logo} alt="" className='logo'/></Link>
            <ul className='navbar-menu'>
                <Link to='/' onClick={()=>setMenu("Home")} className={menu==="Home"?"active":""}>Home</Link>
                <a href='#explore-menu' onClick={()=>setMenu("Menu")} className={menu==="Menu"?"active":""}>Menu</a>
                <a href='#app-download' onClick={()=>setMenu("Mobile-app")} className={menu==="Mobile-app"?"active":""}>Mobile-app</a>
                <a href='#footer' onClick={()=>setMenu("Contact-us")} className={menu==="Contact-us"?"active":""}>Contact Us</a>
            </ul>
            <div className='navbar-right'>
                <i className="ri-search-line" style={{ fontSize: '24px', opacity:'0.8' }}></i>
                <div className="navbar-search-icon">
                    
                    <div>
                        {getTotalCartAmount()===0 ? 
                            <Link to='/cart'>
                                <i className="ri-shopping-cart-2-line" style={{ fontSize: '24px' }}></i>
                            </Link>
                        : 
                            <Link to='/cart'>
                                <i className="ri-shopping-cart-2-fill" style={{ fontSize: '24px' }}></i>
                            </Link>
                        }
                    </div>
                </div>
                {!token?<button onClick={()=>setShowLogin(true)}>Sign in</button>
                : <div className='navbar-profile'>
                        <i className="ri-account-circle-line" style={{ fontSize: '24px' }}></i>
                        <ul className="nav-profile-dropdown">
                            <li onClick={()=>navigate('/myorders')}>
                                <i className="ri-shopping-bag-line" style={{ fontSize: '24px' }}></i>
                                <p>Orders</p>
                            </li>
                            <hr></hr>
                            <li onClick={logout}>
                                <i className="ri-logout-box-r-line" style={{ fontSize: '24px' }}></i>
                                <p>Logout</p>
                            </li>
                        </ul>
                    </div>}
                
            </div>
        </div>
    )
}

export default Navbar
