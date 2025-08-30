import React from 'react'
import './Hero.css'
import profile_img from '../../assets/ns-profile.jpeg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="" />
      <h1><span></span>Hi, I’m Nitish Shewale.</h1>
      <p>I have completed my Master’s in Computer Applications (MCA) from Fergusson College, Pune.
        I specialize in Core Java and have experience in both frontend and backend development.
        I recently completed a 6-month internship as a Software Developer, and I’m now seeking full-time opportunities to contribute my skills and grow as a developer.</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  )
}

export default Hero
