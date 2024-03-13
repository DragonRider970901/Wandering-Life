import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import ROUTES from "./routes";

export default function AppLayout() {
    return (<div>
        <nav>
            <ul>
                <li>
                    
                </li>
            </ul>
        </nav>
        <Outlet />
    </div>);
}