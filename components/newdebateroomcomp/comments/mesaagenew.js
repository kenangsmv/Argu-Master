import React from 'react'
import Sent from '../../../icons/sent.png'
import ProfilePhoto from '../../../images/profilephoto.jpg'
export default function messagenew() {
    return (
    <div className="newMessageLayout pb1 pt1 pr05 pl05">
            <div className="newMessageBody  space-between column">
        <div className="mainMiddleTop relative">
                <div className="topicNameBody row">
                <h3 className="topicName mr05 center">Iphone</h3>
                <h3 className="topicName center">Samsung</h3>
                </div>
         </div>
         <div className="mainMiddleMessage column space-between flex-start">
              <div className="newMessage row">
                  
                  <img  src={ProfilePhoto} alt=""/>
                  
                     <div className="newMessageBox">
                            <h3>Kenan Gasimov</h3>
                            <span>bu tartisma cok komik bence</span>
                     </div>
              </div>

              <div className="messageBottom row  center">
              
              <input type="text" placeholder="Write your message.."/>
              <div className="sentButton center">
              <img  src={Sent} alt=""/>
              </div>
          </div>

         </div>
         
        
        
        </div>
        </div>
    )
}
