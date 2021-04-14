import React from 'react'
import Sent from '../../../icons/sent.png'
export default function inputmessage() {
    return (
        <div className="messageBottom row  center">
              
        <input type="text" placeholder="Write your message.."/>
        <div className="sentButton center">
        <img  src={Sent} alt=""/>
        </div>
    </div>
    )
}
