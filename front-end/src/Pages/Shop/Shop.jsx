import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Hero from '../../Components/Hero/Hero'
import Popular from '../../Components/Popular/Popular'
import Offers from '../../Components/Offers/Offers'
import NewCollections from '../../Components/NewCollections/NewCollections'
import NewLetter from '../../Components/NewLetter/NewLetter'
function Shop() {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers />  
      <NewCollections />
      <NewLetter />
    </div>
  )
}

export default Shop
