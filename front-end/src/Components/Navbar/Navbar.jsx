import React,{useState} from 'react'
import './Navbar.css'

import logo from '../../assets/logo.png'
import cart_icon from '../../assets/cart_icon.png'
import { Link } from 'react-router-dom'


function Navbar() {
    const [menu,setMenu] = useState("shop");
  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt="logo" />
            <p>ShopEase</p>
        </div>
        <ul  className='nav-menu'>
            <li onClick={() => setMenu("shop")}><Link style={{textDecoration: "none"}} to="/">Shop</Link>{menu === "shop" && <hr></hr>}</li>
            <li onClick={() => setMenu("men")}><Link style={{textDecoration: "none"}} to="/mens">Men</Link>{menu === "men" && <hr></hr>}</li>
            <li onClick={() => setMenu("women")}><Link style={{textDecoration: "none"}} to="/womens">Women</Link>{menu === "women" && <hr></hr>}</li>
            <li onClick={() => setMenu("kids")}><Link style={{textDecoration: "none"}} to="/kids">Kids</Link>{menu === "kids" && <hr></hr>}</li>
        </ul>
        <div className='nav-login-cart'>
            <Link to="/login"><button>Login</button></Link>
            <Link to="/cart"><img src={cart_icon} alt="cart_icon" /></Link>
            <div className="nav-cart-count">0</div>
        </div>
    </div>
  )
}

export default Navbar
