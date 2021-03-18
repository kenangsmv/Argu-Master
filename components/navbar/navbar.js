import React from "react"
import styles from "./navbar.module.css";
import Logo from "../../icons/logo.svg";
import Input from "../elements/input";
import Profil from "../../icons/arsenal.png";
import Cookie from "js-cookie";
import Vs from "../deabteroomComponents/vs/versus"
import { Button } from "@material-ui/core";
import Modal from "../Modal/Modal"
import AuthLayout from "../auth/layout"
import { useSelector, useDispatch } from "react-redux";
const Navbar = () => {
  
  const user = useSelector((state) => state.user.currentUser);
  const open = useSelector((state) => state.layout.auth_modal);
  const dispatch = useDispatch();
  const openAuthModal = () => {
    dispatch({ type: "SET_MODAL", payload: true });
  };
  const closeAuthModal = () => {
    dispatch({ type: "SET_MODAL", payload: false });
  };
  const logout = () => {
    Cookie.set("currentUser",null)
    dispatch({ type: "REMOVE_USER", payload: null });
  };

  

  console.log(open);
  
  const change =()=>{
      setOpen(!open);
  };
  

  return (
    <div className={"navbarContainer row between "}>
       <Modal open={open} Comp={AuthLayout} cancel={closeAuthModal}></Modal>
      <div className={"logo"}>
        <img src={Logo} alt="" />
      </div>
      <div className={"searchBox"}>
        <Input></Input>
      </div>
      {user ? (
        <div className={"menus row center"}>
          <h5 className="p1 h100 center">Orkun Mert Yigit </h5>
          <h5 className="p1 h100 borderLeft center">Create</h5>
          <h5 onClick={logout} className="p1 h100 borderLeft center needHover">Logout</h5>
        </div>
      ) : (
        <div className={"menus row center"}>
          <Button variant="contained" color="secondary" onClick={openAuthModal}>
            Sign in
          </Button>
        </div>
      )}
    </div>
  );
};
export default Navbar;
