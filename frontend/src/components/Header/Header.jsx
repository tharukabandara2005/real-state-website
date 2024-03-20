import React, { useState } from "react";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";

const Header = () => {
    const [opened, setOpened] = useState(false)
    const getMenuStyles = (opened) => {
        if (document.documentElement.clientWidth <= 800) {
            return { right: !opened && "-100%" }
        }
    }
    return (
        <section className="h-wrapper">
            <div className="flexCenter paddings innerWidth h-container">
                <img src="./logo.png" alt="logo" width={100} />
                <OutsideClickHandler 
                onOutsideClick={()=>setOpened(false)}>

                    <div className="h-menu flexCenter" style={getMenuStyles(opened)}>
                        <a href="">Residencies</a>
                        <a href="">Our Value</a>
                        <a href="">Contact Us</a>
                        <a href="">Get Started</a>
                        <button className="button" ><a href="">Contact</a></button>

                    </div>


                </OutsideClickHandler>


                <div className="menu-icon" onClick={() => setOpened((prev) => !prev)}>
                    <BiMenuAltRight size={30} />

                </div>

            </div>

        </section>
    )
}

export default Header;