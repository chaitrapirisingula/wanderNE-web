import { FaHome, FaLocationArrow, FaBookReader } from "react-icons/fa";
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
                    <div className="button_image">
                        <FaHome />
                    </div>
                    <div className="button_description">
                        Home
                    </div>
                </button>
                <button className="header_button" onClick={() => {navigate("/sites");}}>
                    <div className="button_image">
                        <FaLocationArrow />
                    </div>
                    <div className="button_description">
                        Sites
                    </div>
                </button>
                <button className="header_button" onClick={() => {navigate("/libraries");}}>
                    <div className="button_image">
                        <FaBookReader />
                    </div>
                    <div className="button_description">
                        Libraries
                    </div>
                </button>
            </div>
            <div className="logo_wrapper">
                <a href={"https://nshsf.org"}>
                    <img className="nshsf_logo" src={NSHSFLogo}
                    alt="Nebraska State Historical Society Foundation"></img>
                </a>
            </div>
        </header>
    );
};

export default Header;