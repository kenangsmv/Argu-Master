import React from 'react'
import {Button} from '@material-ui/core'
import HappyFace from '../../../icons/happy.png'
import AngryFace from '../../../icons/angry.png'
import HandShake from '../../../icons/handshake.png'
import Vote from '../../../icons/vote.png'

export default function like() {
    return (
        <div className="wrapped">
           <div className="voteButtonAbsolute">
           <ul className="nobullet row">
                        <li className="mr05 underline">Like</li>
                        <li className="underline">Yanitla</li>
                    </ul>
           </div>
           <div className="content column-flex-start">
                    
                        <div className="popover-body row pl05 pr05">
                        <img  className="vote-icons" src={Vote} alt=""/>
                        <img  className="vote-icons" src={HappyFace} alt=""/>
                    <img  className="vote-icons" src={AngryFace} alt=""/>
                    <img  className="vote-icons" src={HandShake} alt=""/>
                        </div>
               </div>
   
        </div>
    )
}
