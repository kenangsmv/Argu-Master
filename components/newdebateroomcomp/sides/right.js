import React from 'react'
import RightDude from '../../../icons/rightdude.jpg'
import Arrow from '../../../icons/arrow.png'
import Slider from '../../Slider/DebateroomSlider'
export default function right() {
    return (
        <div className="rightLayout pb1 pt1 pr05 pl05 mobileUnvisible">
        <div className="mainRight  column relative">
        <div className="mainSidesTop center">
                <div className="teamName center">
                <img className="rightsideArrow " src={Arrow} alt=""/>
                </div>
                       
                  
            </div>
            <div className="mainSideMiddle center p1">
                   
            <Slider></Slider>
            </div>
            
                 <button className="rightBottom">
                     Exit room
                 </button>
            
        </div>
        </div>
    )
}
