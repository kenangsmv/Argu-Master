import React from 'react'
import {Button} from '@material-ui/core'
import HappyFace from '../../../icons/happy.png'
import AngryFace from '../../../icons/angry.png'
import HandShake from '../../../icons/handshake.png'
import Vote from '../../../icons/vote.png'


export default function like({id,like,angry}) {
    return (
        <div className="wrapped">
           <div className="voteButtonAbsolute">
           <ul className="nobullet row">
                        <li className="mr05 underline">Vote</li>
                        
                    </ul>
           </div>
           <div className="content column-flex-start">
                    
                        <div className="popover-body row pl05 pr05">
                        <img  className="vote-icons needHover" onClick={()=>like(id)} src={Vote} alt=""/>
                       
                    <img  className="vote-icons needHover" onClick={()=>angry(id)} src={AngryFace} alt=""/>
                 
                        </div>
               </div>
   
        </div>
    )
}
