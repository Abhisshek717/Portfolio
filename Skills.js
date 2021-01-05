import React from 'react'
import './Skills.css' 
function Skills({Icon,text}) {
    return (
        <div className="skill__bottom">
            <Icon/>
            <h1 className="skill__text">{text}</h1>
        </div>
    )
}

export default Skills
