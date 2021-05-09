import React from 'react'
import Sent from '../../../icons/sent.png'
export default function inputmessage({ sendMessage,checkUser }) {

    const [message, setMessage] = React.useState("");
    const sent = () => {
      sendMessage(message);
      setMessage("");
    };
  
    const handleKeyDown = (event) => {
      if (event.key === "Enter") {
        sent();
      }
    };


    return (
        <div className="messageBottom row  center">
              
        <input type="text"
        
        disabled={!checkUser}
        placeholder={checkUser?"write your argue !":"you should select a side to write your argue "}
        
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
        
        />
        <div className="sentButton center"   onClick={sent}>
        <img  src={Sent} alt=""/>
        </div>
    </div>
    )
}
