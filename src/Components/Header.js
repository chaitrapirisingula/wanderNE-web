import { MdOutlineHistoryEdu } from "react-icons/md";
import { BiHomeHeart, BiBookReader, BiMapAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import WanderLogo from "../Images/WanderNebraskaLogo.png";
import NSHSFLogo from "../Images/NSHSFLogo.png";
import "../Design/Header.css";


const Header = () => {

    let navigate = useNavigate();

    return (
        <header className="main_header">
            <div className="logo_wrapper">
                <img src={WanderLogo} alt="Wander Nebraska" className="logo"/>
            </div>
            <div className="header_buttons_section">
                <button className="header_button" onClick={() => {navigate("/");window.scrollTo(0, 0);}}>
                    <div className="button_image">
                        <BiHomeHeart size={'2rem'}/>
                    </div>
                    <div className="button_description">
                        Home
                    </div>
                </button>
                <button className="header_button" onClick={() => {navigate("/sites");window.scrollTo(0, 0);}}>
                    <div className="button_image">
                        <MdOutlineHistoryEdu size={'2rem'}/>
                    </div>
                    <div className="button_description">
                        Sites
                    </div>
                </button>
                <button className="header_button" onClick={() => {navigate("/libraries");window.scrollTo(0, 0);}}>
                    <div className="button_image">
                        <BiBookReader size={'2rem'}/>
                    </div>
                    <div className="button_description">
                        Libraries
                    </div>
                </button>
                <button className="header_button" onClick={() => {navigate("/map");window.scrollTo(0, 0);}}>
                    <div className="button_image">
                        <BiMapAlt size={'2rem'}/>
                    </div>
                    <div className="button_description">
                        Map
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