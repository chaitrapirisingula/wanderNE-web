import { FaList, FaMap } from "react-icons/fa";
import { FiHome } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import WanderLogo from "./WanderNebraskaLogo.png";
import NSHSFLogo from "./nshsflogo.png";
import "./Header.css";


const Header = () => {

    let navigate = useNavigate();

    return (
        <header className="main_header">
            <img src={WanderLogo} alt="Wander Nebraska" className="logo"/>
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
            <a className="header_link" href={"https://nshsf.org"}><img className="nshsf_logo" src={NSHSFLogo}
            alt="Nebraska State Historical Society Foundation"></img></a>
        </header>
    );
};

export default Header;