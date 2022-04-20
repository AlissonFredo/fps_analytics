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
                <span className="brand-text font-weight-light">Coach Analytics</span>
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
                            let component1 = ''

                            if (value.simpleLink) {
                                component1 = (
                                    <li className="nav-item" key={key}>
                                        <Link href={value.url} className={"nav-link " + isActive}>
                                            <i className={'nav-icon ' + value.icon}></i>
                                            <p>{value.label}</p>
                                        </Link>
                                    </li>
                                )
                            } 
                            else {
                                component1 = (
                                    <li key={key} className="nav-item menu-open">
                                        <a href="#" className={"nav-link " + isActive}>
                                            <i className="nav-icon fas fa-tree"></i>
                                            <p>
                                                {value.label}
                                                <i className="fas fa-angle-left right"></i>
                                            </p>
                                        </a>
                                        <ul className="nav nav-treeview">
                                            {value.subMenu.map((value, key) => {
                                                return (
                                                    <li key={key} className="nav-item">
                                                        <a href={value.url} className={"nav-link " + isActive}>
                                                            <i className="far fa-circle nav-icon"></i>
                                                            <p>{value.label}</p>
                                                        </a>
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    </li>
                                )
                            }



                            return (
                                { component1 }
                            )
                        })}

                    </ul>
                </nav>
            </div>
            {/* sidebar */}
        </aside>
    )
}