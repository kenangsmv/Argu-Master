import { Button } from '@material-ui/core'
import React from 'react'

export default function topicSelection({joinDebate,room_info}) {
    const {topic2,topic1}=room_info
    console.log(room_info)
    return (
        <div>
            <Button onClick={()=>joinDebate(topic1)}>{topic1}</Button>
            <Button  onClick={()=>joinDebate(topic2)}>{topic2}</Button>
            <Button  onClick={()=>joinDebate()}> izleyici olarak katıl </Button>
        </div>
    )
}
