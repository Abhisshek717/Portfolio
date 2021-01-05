import React from 'react'
import './Rightlink.css'
import Skills from './Skills'
import GitHubIcon from '@material-ui/icons/GitHub';
function Rightlink() {
    return (
        <div className="right__link">
           <div className="resume">
                <h1>Resume</h1>
           </div>
           <div className="skills">
               <div className="heading__skills">Skills</div>
               <div className="skill">
                   <div className="skill__item">
                      <Skills Icon={GitHubIcon} text="React.js"/>
                      <Skills  Icon={GitHubIcon} text="JavaScript"/>
                   </div>
                   
                      
                  
                   <div className="skill__item2">
                      <Skills  Icon={GitHubIcon} text="Python 3"/>
                      <Skills  Icon={GitHubIcon} text="Adobe xd"/>
                   </div>
                  
                      
                   
                  
                   
               </div>
           </div>
        </div>
    )
}

export default Rightlink
