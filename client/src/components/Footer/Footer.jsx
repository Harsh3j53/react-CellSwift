import "./Footer.scss";
import React from "react";
import { FaLocationArrow, FaMobileAlt, FaEnvelope} from "react-icons/fa";
import Payment from "../../assets/payments.png";
const Footer = () => {
    return <footer className="footer">
            <div className="footer-content">
                <div className="col">
                    <div className="title">About</div>
                    <div className="text">Welcome to CellSwift - Your Trusted Destination for Mobile Excellence! At CellSwift, we are passionate about bringing the world of cutting-edge mobile technology to your fingertips. Our journey began with a simple vision: to provide a seamless and enjoyable shopping experience for everyone seeking the latest and greatest in mobile devices.Thank you for choosing CellSwift. We look forward to serving your mobile needs and helping you stay connected in style!</div>
                </div>
                <div className="col">
                    <div className="title">Contact</div>
                    <div className="c-items">
                        <FaLocationArrow/>
                        <div className="text">address rd, Thane, Thane west, Maharashtra 400 123</div>
                    </div>
                    <div className="c-items">
                        <FaMobileAlt/>
                        <div className="text">+91 9876543210</div>
                    </div>
                    <div className="c-items">
                        <FaEnvelope/>
                        <div className="text">test@gmail.com</div>
                    </div>
                </div>
                <div className="col">
                    <div className="title">Categories</div>
                    <span className="text">Samsung</span>
                    <span className="text">Redmi</span>
                    <span className="text">One Plus</span>
                    <span className="text">Refurbished</span>
                </div>
                <div className="col">
                    <div className="title">Pages</div>
                    <span className="text">Home</span>
                    <span className="text">About us</span>
                    <span className="text">Privacy Policy</span>
                    <span className="text">Terms and Conditions</span>
                    <span className="text">Returns</span>
                    <span className="text">Contact us</span>  
                </div>
            </div>
            <div className="bottom-bar">
                <div className="bottom-bar-content">
                    <div className="text">
                    © 2023 by CellSwift All rights reserved.
                    </div>
                    <img src={Payment} alt="" />
                </div>
            </div>
        </footer>;
};

export default Footer;
