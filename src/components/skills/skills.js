import React from 'react';
import './skills.css';

const Skills = () => {
  return (
    <section id='skills'>
        <div className="skillTitle">Projects</div>
        <div className="skillBars">
            <div className="skillBar">
                <img src="" alt="" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Project 1 - Course Website made using HTML, CSS and Javascript</h2>
                    <button onClick={() => window.open("https://rawcdn.githack.com/aimanashna12/Course-Website/7791987bc312f651240cbd5e7f97f2d4d799337e/Frontend/index.html", "_blank")} className="projectLink">View here</button>
                </div>
            </div>
            <div className="skillBar">
                <img src="" alt="" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Project 2 - Worked on the official Website of KDAG,IIT Kharagpur</h2>
                    <button onClick={() => window.open("www.kdagiitkgp.com", "_blank")} className="projectLink">View here</button>
                </div>
            </div>
            
        </div>
        
    </section>
  )
}

export default Skills;