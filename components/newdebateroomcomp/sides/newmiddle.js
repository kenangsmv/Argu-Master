import React from 'react'
import {useRef} from "react"
import { useEffect } from "react";
import MessageInput from '../comments/inputmessage'
import Message from '../comments/mesaagenew'
export default function newmiddle(
   ) {
   
  
    return (
    <div className="middleLayout pb1 pt1 pr05 pl05">
            <div className="newMessageBody  space-between column relative">
        <div className="mainMiddleTop relative">
                <div className="topicNameBody row">
                <h3 className="topicName mr05 center">Iphone</h3>
                <h3 className="topicName center">Samsung</h3>
                </div>
         </div>
         <div className="mainMiddleMessage column space-between flex-start">
         
              <Message 
            ></Message>       
              
            
         </div>    
        
         <MessageInput ></MessageInput>
         
        </div>
        
        </div>
    )
}

