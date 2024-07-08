import bars from "../../../public/assets/navbar-icons/burger.png"

function Bars({ style = ""}){
    return (
        <img
        alt="burger-bar"
        src={bars}
        className={`${style}`}
        />
    )
}

export default Bars