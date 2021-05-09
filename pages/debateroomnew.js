import React from 'react'


import Middle from '../components/newdebateroomcomp/sides/newmiddle' 
import Navbar from '../components/newdebateroomcomp/newnavbar/navbar'
import Left from '../components/newdebateroomcomp/sides/left'
import Right from '../components/newdebateroomcomp/sides/right'




export default function debateroomnew() {
    return (
        <div className="newdebateroomLayout center" >
              
           <div className="newdebateroomBody">
            <Navbar></Navbar>
               <div className="bigRight row center">
               <Left></Left>
                <Middle></Middle>
                <Right></Right>
               
               </div>

           </div>

        </div>
    )
}
