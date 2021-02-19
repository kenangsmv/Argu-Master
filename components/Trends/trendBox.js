import React from 'react'
import Dots from '../../icons/dots.png'



const trendBox=()=> {




    
    return (
        <div className="trendColum flex-start column w100 relative border-bottom p1">
                    <span className={"op06"}>Trendin in Turkey</span>
                    <h4>Suleyman Soylu</h4>
                    <span className={"op06"}>33.5k Tweets</span>         
                    <img className={"dots op06"}src={Dots} alt=""/>
        
                 </div>
    )
}
export default trendBox