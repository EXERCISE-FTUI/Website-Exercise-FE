import React from "react"
import { Link } from "react-router-dom"

function Lists({ lists = [""], style = "", ...props }) {
    return lists.map((list, i) => (
        <Link
        key={i}
        to={list.toLowerCase().replace(" ", "-")}
        className={`text-lg relative flex items-center ease-out duration-300 hover:font-bold hover:text-exer-whiteaccent${style} ${
            props.path == list.toLowerCase().replace(" ", "-") &&
            "before:w-full text-dark"
        }`}
        onClick={props.onClick}
        >
        {list}
        </Link>
    ))
}

export default Lists