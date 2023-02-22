import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { ImInstagram } from 'react-icons/im';
import NSHSFLogo from "../Images/NSHSFLogo.png";
import DonateImg from "../Images/DonateImage.png";
import "../Design/Footer.css";

const Footer = () => {

    return (
        <footer className="footer">
            <div className="logo_wrapper">
                <a href={"https://nshsf.org"}>
                    <img className="nshsf_logo" src={NSHSFLogo}
                    alt="Nebraska State Historical Society Foundation"></img>
                </a>
            </div>
            <div className="logo_wrapper">
                <a href={"https://www.paypal.com/donate/?hosted_button_id=KUV64XBRNY2ZJ"}>
                    <img className="donate_logo" src={DonateImg}
                    alt="Donate"></img>
                </a>    
            </div>
            <div className="social_media">
                <a className="website_link" href="https://www.facebook.com/NSHSF1942/"><FaFacebook size={'1.5rem'}/></a>
                <br/>
                <a className="website_link" href="https://www.instagram.com/nshsf1942/"><ImInstagram size={'1.5rem'}/></a>
                <br/>
                <a className="website_link" href="https://twitter.com/nshsf1942"><FaTwitter size={'1.5rem'}/></a>
                <br/>
                <a className="website_link" href="https://www.linkedin.com/company/nebraska-state-historical-society-foundation/"><FaLinkedin size={'1.5rem'}/></a>
            </div>
        </footer>
    );
};

export default Footer;