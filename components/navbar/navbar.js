import styles from './navbar.module.css'
import Logo from '../../icons/logo.svg'
import Input from '../elements/input'
import Profil from '../../icons/arsenal.png'

const Navbar =()=>{
     return <div className={"navbarContainer row between "}>
       
            <div className={"logo"}>
                <img src={Logo} alt=""/>
            </div>
            <div className={"searchBox"}>
               
                <Input>
                
                </Input>
            </div>
            <div className={"menus row center"}>
              
              <h5 className="p1 h100 center">Orkun Mert Yigit </h5>
              <h5 className="p1 h100 borderLeft center">Create</h5>
              <h5 className="p1 h100 borderLeft center">Home</h5>
            </div>
            
     </div>
 }
 export default Navbar;