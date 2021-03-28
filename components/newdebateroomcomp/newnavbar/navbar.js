import React from 'react'
import Logo from '../../../icons/logo.svg'
import Home from '@material-ui/icons/Home'
import Fire from '@material-ui/icons/Whatshot'
import Saved from '@material-ui/icons/Bookmark'
import Viewed from '@material-ui/icons/RemoveRedEye'
import Profile from '@material-ui/icons/Person';
import ProfilePhoto from '../../../images/profilephoto.jpg'
import { IconButton } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

export default function navbar() {
  
    return (
        <div className="newNavbar column space-between">
                   <div className="newnavbarlogo center">
        <img  src={Logo} alt=""/>
        </div>
        <div className="newNavbarMenu column center">
            <div className="iconHover row space-between">
            <IconButton className="iconBackground" >
           <Home  />
           </IconButton>
           <div className="iconHoverBorder"></div>
           </div>
           <div className="iconHover row space-between">
            <IconButton className="iconBackground" >
           <Fire  />
           </IconButton>
           <div className="iconHoverBorder"></div>
           </div>
           <div className="iconHover row space-between">
            <IconButton className="iconBackground" >
           <Saved  />
           </IconButton>
           <div className="iconHoverBorder "></div>
           </div>
           <div className="iconHover row space-between">
            <IconButton className="iconBackground" >
           <Viewed  />
           </IconButton>
           <div className="iconHoverBorder"></div>
           </div>
           <div className="iconHover row space-between">
            <IconButton className="iconBackground" >
           <Profile  />
           </IconButton>
           <div className="iconHoverBorder"></div>
           </div>
      
        </div>
        <div className="newNavbarButtom center">
                 <img src={ProfilePhoto} alt=""/>
        </div>
        </div>
    )
}
