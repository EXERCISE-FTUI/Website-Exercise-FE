import React, {useState} from "react"
import { Link } from "react-router-dom"

import Lists from "./lists/Lists"
import ListsBurger from "./lists/ListsBurger"
import Logo from "./logo/Logo"
import Bars from "./burger/Bars"
import Close from "./burger/Close"

function NavBar(){
    const lists = [
        "Home",
        "Past Projects",
        "Events",
        "Features",
        "Exticle",
        "About Us",
    ]

    const [showBurgerIcon, setShowBurgerIcon] = useState(true);
    const [showBurgerMenu, setShowBurgerMenu] = useState(false);

    const toggleBurgerIcon = () => {
        setShowBurgerIcon(!showBurgerIcon);
        setShowBurgerMenu(!showBurgerMenu);
    };
    const toggleBurgerMenu = () => {
        setShowBurgerMenu(!showBurgerMenu);
        setShowBurgerIcon(!showBurgerIcon);
    };

    return (
        <header className="md:border-b-2 fixed w-full z-50">
            <nav id="navbar" className="md:bg-exer-charcoal flex md:pr-24">
                {/* logo */}
                <div id="exercise" className="md:flex hidden pt-4 pb-4 pl-10">
                    <Logo style="w-16"/>
                </div>

                {/* burger menu*/}
                {showBurgerMenu && (
                <div className="ml-auto md:hidden flex flex-col w-72 bg-exer-charcoal">
                    <button className="pl-4 pt-4" onClick={toggleBurgerMenu}>
                        <Close />
                    </button>
                    <div id="navbar-lists" className="text-exer-whiteaccent font-inter text-opacity-70 pt-4 gap-4">
                        <ListsBurger
                        lists={lists}
                        />
                    </div>
                </div>
                )}

                {/* burger icon*/}
                {showBurgerIcon && (
                <div className="ml-auto md:hidden flex flex-col">
                    <button className="pr-4 pt-4" onClick={toggleBurgerIcon}>
                        <Bars />
                    </button>
                </div>
                )}

                {/* contents */}
                <div id="navbar-container" className="hidden md:flex ml-auto">
                    <div id="navbar-lists" className="text-exer-whiteaccent font-poppins text-opacity-70 flex flex-row gap-4">
                        <Lists
                        lists={lists}
                        />
                    </div>
                </div>
                
            </nav>
        </header>


    )
}

export default NavBar;