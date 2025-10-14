import React,{useRef, useState} from 'react'
import './Navbar.css'
import nav_dropdown_icon from '../../assets/dropdown_menu_icon.png'

import logo from '../../assets/logo.png'
import cart_icon from '../../assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';


function Navbar() {
    const [menu,setMenu] = useState("shop");
    const {getTotalCartItems} = useContext(ShopContext);
    const menuRef = useRef(null);
    const dropdownToggle = (e) => {
        menuRef.current.classList.toggle('nav-menu-visable');
        e.target.classList.toggle('open');
    }
  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt="logo" />
            <p>SHOPPER</p>
        </div>
        <img src={nav_dropdown_icon} alt="" onClick={dropdownToggle} className='nav-drop-down'/>
        <ul ref={menuRef} className='nav-menu'>
            <li onClick={() => setMenu("shop")}><Link style={{textDecoration: "none"}} to="/">Shop</Link>{menu === "shop" && <hr></hr>}</li>
            <li onClick={() => setMenu("men")}><Link style={{textDecoration: "none"}} to="/mens">Men</Link>{menu === "men" && <hr></hr>}</li>
            <li onClick={() => setMenu("women")}><Link style={{textDecoration: "none"}} to="/womens">Women</Link>{menu === "women" && <hr></hr>}</li>
            <li onClick={() => setMenu("kids")}><Link style={{textDecoration: "none"}} to="/kids">Kids</Link>{menu === "kids" && <hr></hr>}</li>
        </ul>
        <div className='nav-login-cart'>
            <Link to="/login"><button>Login</button></Link>
            <Link to="/cart"><img src={cart_icon} alt="cart_icon" /></Link>
            <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
    </div>
  )
}

export default Navbar
