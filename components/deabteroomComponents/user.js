import React from 'react'
import User from '../../images/user2.jpg'
export default function user() {
    return (
      
        <div className="w100 mt05 row">
          <img className="modalteamImages" src={User} alt=""/>
          <span className="center pl05 black" >Username</span>
        </div>
        
    )
}
