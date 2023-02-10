import React, { useState } from "react";
import { ReactComponent as BigLogo } from './biglogo.svg';
import { ReactComponent as Logo } from './logo.svg';
import { ProSidebar, Menu, MenuItem, SidebarHeader, SidebarFooter, SidebarContent } from "react-pro-sidebar";
import { FaList, FaMap } from "react-icons/fa";
import { FiHome, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import "./Header.css";


const Header = () => {

    let navigate = useNavigate();
  
    const [menuCollapse, setMenuCollapse] = useState(false)

    const menuIconClick = () => {
        menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
    };

    return (
        <>
        <div id="header">
            <ProSidebar collapsed={menuCollapse}>
            <SidebarHeader>
                <div className="logotext">
                <p>{menuCollapse ? <Logo /> : <BigLogo />}</p>
                </div>
                <div className="closemenu" onClick={menuIconClick}>
                {menuCollapse ? (
                    <FiArrowRightCircle/>
                ) : (
                    <FiArrowLeftCircle/>
                )}
                </div>
            </SidebarHeader>
            <SidebarContent>
                <Menu iconShape="square">
                <MenuItem icon={<FiHome />} onClick={() => {navigate("/");}}>Home</MenuItem>
                <MenuItem icon={<FaList />} onClick={() => {navigate("/sites");}}>Sites</MenuItem>
                <MenuItem icon={<FaMap />} onClick={() => {navigate("/map");}}>Map</MenuItem>
                </Menu>
            </SidebarContent>
            <SidebarFooter>
                <Menu iconShape="square">
                <div className="logotext">
                    <p style={{color: "#000080"}}>
                    {menuCollapse ? "nshsf": "Nebraska State Historical Society Foundation"}</p>
                </div>
                </Menu>
            </SidebarFooter>
            </ProSidebar>
        </div>
        </>
    );
};

export default Header;