import React from 'react'

export default function circleBarBig({percent}) {
  console.log("percent",percent)
    return (
        <div className="percentContainer ">
        <div class="percent2 center">
          <svg className="center">
            <circle cx="50" cy="50" r="50">
              <div className="innerCircle"></div>
            </circle>
            <circle cx="50" cy="50" r="50" style={{strokeDashoffset:130+(310*(1-(percent/100)))}}></circle>
          </svg>
          <div class="innerCircle">
            <h2>
            {Math.floor(percent)}<span>%</span>
            </h2>
          </div>
        </div>
      </div>
    )
}
