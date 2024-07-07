import { Link, useLocation } from "react-router-dom";

function Lists({ lists = [] as string[], style = "", ...props }) {
    const location = useLocation();

    return lists.map((list, i) => (
        <Link
        key={i}
        to={list.toLowerCase().replace(" ", "-")}
        className={`text-lg relative flex items-center ease-out duration-300 ${
            location.pathname === `/${list.toLowerCase().replace(" ", "-")}`
            ? "font-bold text-exer-whiteaccent"
            : "hover:font-bold hover:text-exer-whiteaccent"
        }${style}`}
        onClick={props.onClick}
        >
        {list}
        </Link>
    ));
}

export default Lists;