import React, { useState } from 'react';
import './Contact.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "7bfc1027-2894-44a0-b481-b1f9ffd63d6f");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        setResult(`Error: ${data.message}`);
      }
    } catch (error) {
      setResult("Something went wrong. Please try again.");
    }
  };

  return (
    <div id='contact' className='contact'>
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
            <h1>Let's talk</h1>
            <p>I’m currently looking for full-time software developer opportunities. Let’s connect!</p>
            <div className="contact-details">
                <div className="contact-detail">
                   <img src={mail_icon} alt="" /> <p>shewalenitish82@gmail.com</p>
                </div>
                <div className="contact-detail">
                   <img src={call_icon} alt="" /> <p>+91-9145724519</p>
                </div>
                <div className="contact-detail">
                   <img src={location_icon} alt="" /> <p>Pune, India</p>
                </div>
            </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
             <label htmlFor="name">Your Name</label>
             <input type="text" placeholder='Enter your name' name='name' required />
             <label htmlFor="email">Your Email</label>
             <input type="email" placeholder='Enter your email' name='email' required />
             <label htmlFor="message">Write your message here</label>
             <textarea name="message" rows="8" placeholder='Enter your message' required></textarea>
             <button type='submit' className='contact-submit'>Submit now</button>
             {result && <p className="contact-result">{result}</p>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
