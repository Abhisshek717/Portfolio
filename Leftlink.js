import React from 'react'
import './Leftlink.css';
import Socialicon from './Socialicon';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
function Leftlink() {
    return (
        <div className="leftlink">
            <div className="title">
               <span className="title__hello"> <h1>Hello, i'm</h1> </span>
               <span className="title__abhi"> <h1>Abhishek</h1> </span>                
            </div>
            <div className="subtitle">
                <p className="para">Studying Computer science.  Learning UX & UI 
                   designing and developing the Web, Android and IOS 
                   Apps,<span class="code"> I code Clean. </span>
                   Interested in the field of Machine Learning .</p>
            </div>
            <div className="left__link">
                
                <Socialicon name="GITHUB" Icon={GitHubIcon} numrepo="2" namerepo="Repositories"/>
                
                 
                
                 <Socialicon  name="Linkedin" Icon={LinkedInIcon} numrepo="25" namerepo="Connections"  className="linker"/>
                 
                 
            </div>
        </div>
    )
}

export default Leftlink
