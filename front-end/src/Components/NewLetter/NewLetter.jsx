import React from 'react'
import './NewLetter.css'
function NewLetter() {
  return (
    <div className='new-letter'>
      <h1>Get Exclusive Offers On Your Email</h1>
      <p>Subscribe to our newletter and stay updated</p>
      <div>
        <input type="email" placeholder="Enter your email" />
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default NewLetter
