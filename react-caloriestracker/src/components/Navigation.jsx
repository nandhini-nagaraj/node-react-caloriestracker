import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
    return (
        <div className="navigation">
            <div className={"title"} >
                <NavLink className="navbar-brand" to="/">
                    Calories Tracker
                </NavLink>
            </div>
            <div className={"menu_links"}>
                <nav className={"nav-item"}>
                    <NavLink className="nav-link" to="/">
                        Home
                    </NavLink>
                    <NavLink className="nav-link" to="/food_entry">
                        Add Meals
                    </NavLink>
                    <NavLink className="nav-link" to="/contact">
                        Contact
                    </NavLink>
                </nav>
            </div>
        </div>
    );
}

export default Navigation;