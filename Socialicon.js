import React from 'react'
import './Socialicon.css';
function Socialicon({name,Icon,numrepo,namerepo}) {
    return (
        <div className="socialicon">
          <div className="social__upper">
            <h1 className="name">{name}</h1>
            <Icon className="social__icon"/>
          </div>
            <div className="social__lower">
                 <p className="number">{numrepo}</p>
                 <p className="repo">{namerepo}</p>
            </div>
            
        </div>
    )
}

export default Socialicon
