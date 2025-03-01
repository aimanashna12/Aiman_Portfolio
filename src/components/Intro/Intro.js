import React from 'react';
import './Intro.css';
import {Link} from 'react-scroll';
import bg from '../../assets/profImg2.png'
// import background from '../../assets/image.png';
const Intro = () => {
  return (
    <>
    <section id="intro">
        
        <div className="introContent">
            <span className="hello">Hello,</span>
            <span className="introText">I'm <span className="introName">Aiman Ashna</span><br/>Student at IIT Kharagpur</span>
            <p className="introPara">I am a second year undergraduate student of the department of Electrical Engineering.</p>
        </div>
        <img 
            src={bg} 
            alt="Profile" 
            className="bg"
            style={{
                display: 'block',
                visibility: 'visible',
                opacity: 1,
                zIndex: 1
            }}
        />
    </section>
    </>
  )
}

export default Intro