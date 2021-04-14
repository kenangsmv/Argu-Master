import React from 'react'

import ProfilePhoto from '../../../images/profilephoto.jpg'
import Like from '../../deabteroomComponents/comments/like'
import LikeVote from "../../../icons/vote.png";
import Angry from "../../../icons/angry.png";
import { useSelector } from "react-redux";

export default function messagenew() {
  
    
    return (
         <div className="newMessage column relative">
                  <div className=" mesageHolder row space-between center">
                      <span className="pr1">Kanan Gasimov</span>
                      <span> 11:43</span>
                      </div>
                      <div className="row">
                  <img  src={ProfilePhoto} alt=""/>
                  
                     <div className="newMessageBox center">
                            
                            <span>Bu debate cok guzel</span>
                     </div>
                     </div>
                     <Like ></Like>

                     <div className="result resultAbsolute row center box-shadow">
              
              
                
              <img className="result-icons" src={LikeVote} alt=""/> 
              
                      
                          
                             
              <img className="result-icons" src={Angry} alt=""/> 
              
                       </div> 
              </div>
           
              
            
                  
        
        
       
    )
}
