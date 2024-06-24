import React from "react"
import { Link, useLocation } from "react-router-dom"

function ListsBurger({ lists = [""], style = "", ...props }) {
    const location = useLocation();

    return lists.map((list, i) => (
        <Link
        key={i}
        to={list.toLowerCase().replace(" ", "-")}
        className={`text-lg relative flex pl-8 h-10 items-center hover:bg-exer-white hover:text-exer-charcoal ${
            location.pathname === `/${list.toLowerCase().replace(" ", "-")}`
            ? "bg-exer-white text-exer-charcoal"
            : "hover:bg-exer-whitegray hover:text-exer-charcoal"
        }${style}`}
        onClick={props.onClick}
        >
        {list}
        </Link>
    ))
}

export default ListsBurger