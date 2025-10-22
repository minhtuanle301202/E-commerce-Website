import React from 'react'
import './Admin.css'
import Sidebar from '../../Components/Sidebar/Sidebar'
import AddProduct from '../../Components/AddProduct/AddProduct'

function Admin() {
  return (
    <div className='admin'>
        <Sidebar />
        <AddProduct />
    </div>
  )
}

export default Admin
