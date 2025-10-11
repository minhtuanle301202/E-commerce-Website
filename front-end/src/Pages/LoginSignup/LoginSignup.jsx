import React from 'react'
import './LoginSignup.css'

function LoginSignup() {
  return (
    <div className='login-signup'>
      <div className="login-signup-container">
        <h1>Sign Up</h1>
        <div className="login-signup-fields">
          <input type="text" placeholder="Your name" />
          <input type="email" placeholder="Your email" />
          <input type="password" placeholder="Your password" />
        </div>
        <button>Continue</button>
        <p className="login-signup-login">Already have an account? <span>Login here</span></p>
        <div className="login-signup-agree">
          <input type="checkbox" id="agree" name='' />
          <p>By continuing, I agree to the <span>Terms of Service</span> and <span>Privacy Policy</span>.</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup
