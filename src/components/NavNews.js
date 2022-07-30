import React from "react";
import "./NavNews.css";
import HamburgerDrawer from "./HamburgerDrawer";
 const NavNews = ({ setCategory }) => {
    return (
        <div className="nav">
          <div className="icon">
                <HamburgerDrawer setCategory={setCategory}/>
          </div>
          <img style={{cursor: "pointer" }}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfbvHBjoY0EfEFVk22qDWTtsJ9n_QTRqffYw&usqp=CAU" 
          height="98%"
            alt="logo"
          />
        </div>
    );
};
export default NavNews;