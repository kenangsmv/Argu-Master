import React from 'react'
import RightDude from '../../../icons/rightdude.jpg'
import Arrow from '../../../icons/arrow.png'
import DebateRoomSlider from '../../Slider/DebateroomSlider'
export default function right() {
    return (
        <div className="rightLayout pb1 pt1 pr05 pl05">
        <div className="mainRight  column relative">
        <div className="mainSidesTop center">
                <div className="teamName center">
                <img className="rightsideArrow " src={Arrow} alt=""/>
                </div>
                       
                  
            </div>
            <div className="rightSideMiddle center pt1 pb1 pl05 pr05">
                   
          <DebateRoomSlider ></DebateRoomSlider>
            </div>
            
                 <button className="rightBottom">
                     Exit room
                 </button>
            
        </div>
        </div>
    )
}
