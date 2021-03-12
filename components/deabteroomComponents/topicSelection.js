import { Button } from '@material-ui/core'
import React from 'react'
import User from './user'

export default function topicSelection({joinDebate,room_info}) {
    const {topic2,topic1}=room_info
    console.log(room_info)
    return (
        <div className="center column">
            <div className="w100 row space-around mb2 mt2">
                <div className="column column-flex-start">
            <div  className="mb05 white" onClick={()=>joinDebate(topic1)}>
            <h2>{topic1}</h2>

            </div>
            <div className="w100 team white column relative" >
               
            <div className="teamusersAbsolute w100">
            <User></User>
            <User></User>
            <User></User>
            <User></User>
           
            </div>           
            </div>
            </div>
            <div className="column column-flex-start">
            <div  className="mb05 white" onClick={()=>joinDebate(topic2)}>
                <h2>{topic2}</h2>

            </div>
            <div className="w100 team white column relative" >
               
            <div className="teamusersAbsolute w100">
            <User></User>
            <User></User>
            <User></User>
            <User></User>
           
            </div>           
            </div>
            </div>
             </div>
            <Button  onClick={()=>joinDebate()} variant="contained" color="primary" className="w20"> Watch As Guest </Button>
         
        </div>
    )
}
