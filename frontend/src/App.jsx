import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home/Home'
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Footer from "./components/Footer/Footer";
import LoginPopUp from "./components/LoginPopup/LoginPopup";
import Verify from "./pages/Verify/verify";
import MyOrders from "./pages/MyOrders/MyOrders";

const App = () => {

    const [showLogin,setShowLogin]=useState(false);

    useEffect(() => {
        if (showLogin) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [showLogin]);

    return (
        <>
        {showLogin?<LoginPopUp setShowLogin={setShowLogin}/>:<></>}
            <div className="app" style={{overflowY:showLogin?"hidden":"auto"}}>
                <Navbar setShowLogin={setShowLogin} showLogin={showLogin}/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/cart" element={<Cart/>}/>
                    <Route path="/order" element={<PlaceOrder/>}/>
                    <Route path="/verify" element={<Verify/>}/>
                    <Route path="/myorders" element={<MyOrders/>}/>
                </Routes>
            </div>
            <Footer/>
        </>
    )
};

export default App;
