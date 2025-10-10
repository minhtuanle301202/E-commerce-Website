import React from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { Route,Routes } from 'react-router-dom'
import ShopCategory from './Pages/ShopCategory/ShopCategory'
import Shop from './Pages/Shop/Shop'
import Product from './Pages/Product/Product'
import Cart from './Pages/Cart/Cart'
import LoginSignup from './Pages/LoginSignup/LoginSignup'
import men_banner from './assets/banner_mens.png'
import women_banner from './assets/banner_women.png'
import kids_banner from './assets/banner_kids.png'

function App() {
  return (
    <div>
    <Routes>
      <Route path='/' element={<Shop />}/>
      <Route path='/product' element={<Product />}>
        <Route path=':id' element={<Product />}/>
       </Route>
      <Route path='/cart' element={<Cart />}/>
      <Route path='/login' element={<LoginSignup />}/>
      <Route path='/mens' element={<ShopCategory category="men" banner={men_banner} />}/>
      <Route path='/womens' element={<ShopCategory category="women" banner={women_banner} />}/>
      <Route path='/kids' element={<ShopCategory category="kid" banner={kids_banner} />}/>
      
    </Routes>
    </div>
  )
}

export default App
