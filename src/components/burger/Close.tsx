import close from "../../assets/navbar-icons/close.png"

function Close({style = ""}){
    return (
        <img
        alt="burger-x"
        src={close}
        className={`${style}`}
        />
    )
}

export default Close