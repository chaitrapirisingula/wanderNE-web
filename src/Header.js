import {  Menu, MenuItem } from "react-pro-sidebar";
import { FaList, FaMap } from "react-icons/fa";
import { FiHome } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import WanderLogo from "./WanderNebraskaLogo.png"
import "./Header.css";


const Header = () => {

    let navigate = useNavigate();

    return (
        <header className="main_header">
            <img src={WanderLogo} className="logo"/>
            <Menu iconShape="square">
                <MenuItem icon={<FiHome />} onClick={() => {navigate("/");}}>Home</MenuItem>
                <MenuItem icon={<FaList />} onClick={() => {navigate("/sites");}}>Sites</MenuItem>
                <MenuItem icon={<FaMap />} onClick={() => {navigate("/map");}}>Map</MenuItem>
            </Menu>
            <a href={"https://nshsf.org"}><img className="nshsf_logo" src=
            "https://www.nshsf.org/wp-content/uploads/2021/02/NSHSF_Logo-e1552276800426.gif" 
            alt="Nebraska State Historical Society Foundation"></img></a>
        </header>
    );
};

export default Header;