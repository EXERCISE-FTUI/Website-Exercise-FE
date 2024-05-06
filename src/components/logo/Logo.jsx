import React from "react"
import { Link } from "react-router-dom"

import logo from "../../assets/exercise-logos.svg"

function Logo({ size, style = "", ...props }) {
    return (
        <Link id="exercise-logo" to="/home" onClick={props.onClick}>
            <img
            alt="Exercise's Logo"
            src={logo}
            className={`${size || "w-16"} ${style}`}
            />
        </Link>
    )
}

export default Logo