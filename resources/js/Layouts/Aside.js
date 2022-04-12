import { Menu } from "@/Config/Menu";
import React from "react";
import { Link } from '@inertiajs/inertia-react';

export default function Aside() {
    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
            {/* Brand Logo */}
            <a href="index3.html" className="brand-link">
                <img 
                    src="dist/img/AdminLTELogo.png" 
                    alt="AdminLTE Logo" 
                    className="brand-image img-circle elevation-3" 
                    style={{ opacity: .8 }} 
                />
                <span className="brand-text font-weight-light">AdminLTE 3</span>
            </a>

            {/* Sidebar */}
            <div className="sidebar">
                <nav className="mt-2">
                    <ul 
                        className="nav nav-pills nav-sidebar flex-column" 
                        data-widget="treeview" 
                        role="menu" 
                        data-accordion="false"
                    >

                        {Menu.map((value, key) => {
                            const pathName = window.location.pathname
                            const isActive = value.url === pathName ? 'active' : ''
                            return (
                                <li className="nav-item" key={key}>
                                    <Link href={value.url} className={"nav-link " + isActive}> 
                                        <i className={'nav-icon ' + value.icon}></i>
                                        <p>{value.label}</p>
                                    </Link>
                                </li>
                            )
                        })}

                    </ul>
                </nav>
            </div>
            {/* sidebar */}
        </aside>
    )
}