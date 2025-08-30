import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/ns-profile.jpeg'

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
            <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p></p>
                <p>I have worked on projects involving Java, React, and databases, including a freelancing platform.
                    During my 6-month internship as a Software Developer, I gained hands-on experience in building and testing software applications.
                    My goal is to leverage my skills in full-stack development and contribute to creating impactful and scalable software solutions.</p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"100%"}}/></div>
                <div className="about-skill"><p>JAVA</p><hr style={{width:"80%"}}/></div>
                <div className="about-skill"><p>React JS</p><hr style={{width:"90%"}}/></div>
                <div className="about-skill"><p>JAVASCRIPT</p><hr style={{width:"90%"}}/></div>
                <div className="about-skill"><p>Node.js</p><hr style={{width:"70%"}}/></div>
                <div className="about-skill"><p>MySQL</p><hr style={{width:"90%"}}/></div>
                
            </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
            <h1>6-month</h1>
            <p>Internship as Software Developer</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>Contributor at</h1>
             <p>GSSoC (GirlScript Summer of Code)</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>4+</h1>
            <p>Projects Completed</p>
        </div>
      </div>
    </div>
  )
}

export default About
