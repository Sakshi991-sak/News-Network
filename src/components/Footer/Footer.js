import React from "react";
import "./Footer.css";
const Footer=()=>{
    return(
        <div className="footer">
        <span className="name">
            NEWS NETWORK News Website by -{" "}
            <a href="https://www.linkedin.com/in/sakshi-kumari-95653a205/" target="_blank">
                Sakshi Kumari
            </a>
        </span>
        <hr style={{width:"90%"}}/>
        <div className="iconContainer">
        <a href="" target="_blank">
            <i className="fab fa-instagram-square fa-2x"></i>
        </a>
        <a href="https://www.linkedin.com/in/sakshi-kumari-95653a205/" target="_blank">
            <i className="fab fa-linkedin fa-2x"></i>
        </a>
        <a href="https://github.com/Sakshi991-sak" target="_blank">
            <i className="fab fa-github fa-2x"></i>
        </a>
        </div>

        </div>
    );
};
export default Footer