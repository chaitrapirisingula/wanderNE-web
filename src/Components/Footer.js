import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import "../Design/Footer.css";

const Footer = () => {

    return (
        <footer className="footer">
            <div className="contact_info">
                <p>Add contact info</p>
                <a className="website_link" href="https://nshsf.org">nshsf.org</a>
            </div>
            <div className="social_media">
                <a className="website_link" href="https://www.facebook.com/NSHSF1942/"><FaFacebook /></a>
                <br/>
                <a className="website_link" href="https://www.instagram.com/nshsf1942/"><FaInstagram /></a>
                <br/>
                <a className="website_link" href="https://twitter.com/nshsf1942"><FaTwitter /></a>
                <br/>
                <a className="website_link" href="https://www.linkedin.com/company/nebraska-state-historical-society-foundation/"><FaLinkedin /></a>
            </div>
            <div className="donate_link">
                <p>Add donate link</p>
            </div>
        </footer>
    );
};

export default Footer;