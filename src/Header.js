import { FaList, FaMap } from "react-icons/fa";
import { FiHome } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import WanderLogo from "./WanderNebraskaLogo.png";
import NSHSFLogo from "./NSHSFLogo.png";
import "./Design/Header.css";


const Header = () => {

    let navigate = useNavigate();

    return (
        <header className="main_header">
            <div className="logo_wrapper">
                <img src={WanderLogo} alt="Wander Nebraska" className="logo"/>
            </div>
            <div className="header_buttons_section">
                <button className="header_button" onClick={() => {navigate("/");}}>
                    <FiHome /><br/>Home
                </button>
                <button className="header_button" onClick={() => {navigate("/sites");}}>
                    <FaList /><br/>Sites
                </button>
                <button className="header_button" onClick={() => {navigate("/map");}}>
                    <FaMap /><br/>Map
                </button>
            </div>
            <div className="logo_wrapper">
                <a href={"https://nshsf.org"}><img className="nshsf_logo" src={NSHSFLogo}
                alt="Nebraska State Historical Society Foundation"></img></a>
            </div>
        </header>
    );
};

export default Header;