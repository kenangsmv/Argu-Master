import React from 'react'

import Dots from '../../icons/dots.png'
import TrendBox from './trendBox'

const Trends =()=>{
    return <div className={"trendsBox"}>
        <div className="p1 border-bottom">
        <h2>Trends for you</h2>
        </div>
      <div className={"trendsBar column"}>
              <TrendBox></TrendBox>
              <TrendBox></TrendBox>                
              <TrendBox></TrendBox>
               
      </div>
        
           
    </div>
}
export default Trends;