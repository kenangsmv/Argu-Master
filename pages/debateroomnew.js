import React from 'react'


import NewMessage from '../components/newdebateroomcomp/comments/mesaagenew' 
import Navbar from '../components/newdebateroomcomp/newnavbar/navbar'
import Left from '../components/newdebateroomcomp/sides/left'
import Right from '../components/newdebateroomcomp/sides/right'

import Profile from '@material-ui/icons/PersonOutlined';
import HomeIcon from '@material-ui/icons/HomeOutlined'
import Search from '@material-ui/icons/Search'
import Stats from '@material-ui/icons/TrendingUpOutlined'


export default function debateroomnew() {
    return (
        <div className="newdebateroomLayout center" >
              
           <div className="newdebateroomBody">
            <Navbar></Navbar>
               <div className="bigRight row center">
               <Left></Left>
                <NewMessage></NewMessage>
                <Right>
                </Right>
               
               </div>

           </div>

        </div>
    )
}
