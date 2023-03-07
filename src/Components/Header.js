import { MdOutlineHistoryEdu } from "react-icons/md";
import { BiBookReader } from "react-icons/bi";
import { TbMap } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import WanderLogo from "../Images/WanderNebraskaLogo.png";
import "../Design/Header.css";


const Header = () => {

    let navigate = useNavigate();

    return (
        <header className="main_header">
            <div className="logo_wrapper">
                <img src={WanderLogo} alt="Wander Nebraska" className="logo" onClick={() => {navigate("/");window.scrollTo(0, 0);}}/>
            </div>
            <div className="header_buttons_section">
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
                        <TbMap size={'2rem'}/>
                    </div>
                    <div className="button_description">
                        Regions
                    </div>
                </button>
            </div>
        </header>
    );
};

export default Header;