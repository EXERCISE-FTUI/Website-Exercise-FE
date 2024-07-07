import React from "react"

import bars from "../../assets/navbar-icons/burger.png"

function Bars({ size, style = "", ...props }){
    return (
        <img
        alt="burger-bar"
        src={bars}
        className={`${size || "h-7"} ${style}`}
        />
    )
}

export default Bars