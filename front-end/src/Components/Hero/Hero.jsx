import React from 'react'
import hand_icon from '../../assets/hand_icon.png'
import arrow_icon from '../../assets/arrow.png'
import hero_image from '../../assets/hero_image.png'
import './Hero.css'

function Hero() {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
            <div className="hero-hand-icon">
                <p>NEW</p>
                <img src={hand_icon} alt="hand_icon" />
            </div>
            <p>collections</p>
            <p>for everyone</p>
        </div>
        <div className="hero-lastest-btn">
            <div>Lastest Collection</div>
            <img src={arrow_icon} alt="arrow_icon" />
        </div>
      </div>

      <div className="hero-right">
        <img src={hero_image} alt="hero_image" />
      </div>
    </div>
  )
}

export default Hero
