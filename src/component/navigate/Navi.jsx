import React from "react";
import { Link } from "react-router-dom";
import './Navi.css'

function Navi({ logo, alt }) {

    return (
        <>
            <nav>
                <div className="img-wrapper">
                    <img src={logo} alt={alt} />
                </div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/Blog">Alle posts</Link></li>
                    <li><Link to="/new-post">Nieuwe post</Link></li>
                </ul>
            </nav>
        </>
    )

}

export default Navi;
