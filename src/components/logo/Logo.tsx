import { Link } from "react-router-dom"

import logo from "../../assets/exercise-logos.svg"

function Logo({style = "", ...props }: {style?: string, onClick?: () => void }) {
    return (
        <Link id="exercise-logo" to="/home" onClick={props.onClick}>
            <img
            alt="Exercise's Logo"
            src={logo}
            className={`"w-16" ${style}`}
            />
        </Link>
    )
}

export default Logo