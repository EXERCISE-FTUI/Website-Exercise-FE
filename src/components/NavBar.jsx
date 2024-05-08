import React, {useState} from "react"
import { Link } from "react-router-dom"

import Lists from "./lists/Lists"
import Logo from "./logo/Logo"

function NavBar(){
    const lists = [
        "Home",
        "Past Projects",
        "Events",
        "Features",
        "Exticle",
        "About Us",
    ]

    let [open, setOpen] = useState(false)
    let closeMenu = () => setOpen(false)

    return (
        <nav className="border-b-2 fixed w-full z-50">
            <div id="navbar" className="bg-exer-charcoal flex pr-24">
                {/* logo */}
                <div id="exercise" className="pt-4 pb-4 pl-10">
                    <Logo style="w-16"/>
                </div>

                {/* burger */}
                <div className="lg:hidden">
                    <button className="navbar-burger flex items-center">

                    </button>
                </div>

                {/* contents */}
                <div id="navbar-container" className="hidden md:flex ml-auto">
                    <div id="navbar-lists" className="text-exer-whiteaccent font-poppins text-opacity-70 flex flex-row gap-4">
                        <Lists
                        lists={lists}
                        />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar