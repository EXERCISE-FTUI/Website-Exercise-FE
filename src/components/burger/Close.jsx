import React from "react"

import close from "../../assets/navbar-icons/close.png"

function Close({ size, style = "", ...props }){
    return (
        <img
        alt="burger-x"
        src={close}
        className={`${size || "h-6"} ${style}`}
        />
    )
}

export default Close