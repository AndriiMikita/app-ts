import {Link, Outlet} from "react-router-dom";
import React from "react";

const Layout = () => {
    return(
        <div className="layout">
            <Link to={'class-component'}> class-component </Link>
            <Link to={'functional-component'}> functional-component </Link>
            <Outlet/>
        </div>
    )
}

export default Layout;