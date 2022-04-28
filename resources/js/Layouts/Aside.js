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
                            let submenuIsOpen = ''
                            let itemMenu = (<></>)

                            if (value?.children) {
                                const isOpenMenu = submenuIsOpen !== '' ? 'menu-is-opening menu-open' : ''
                                const isActive = 'active'
                                itemMenu = (
                                    <li
                                        key={key}
                                        className={"nav-item " + isOpenMenu}
                                    >
                                        <a
                                            href='#'
                                            className={"nav-link " + isActive}
                                        >
                                            <i className={'nav-icon ' + value.icon}></i>
                                            <p>
                                                {value.label}
                                                <i className="right fas fa-angle-left"></i>
                                            </p>
                                        </a>





                                        <ul 
                                            className="nav nav-treeview" 
                                            style={isOpenMenu !== '' ? { display: 'block' } : { display: 'none' }}
                                        >
                                            {value.children.map((submenuValue, submenuKey) => {
                                                const submenuIsOpen = submenuValue.url === pathName ? 'active' : ''

                                                return (
                                                    <li className="nav-item" key={submenuKey}>
                                                        <Link href={submenuValue.url} className={"nav-link " + submenuIsOpen}>
                                                            <i className={'nav-icon ' + submenuValue.icon}></i>
                                                            <p>{submenuValue.label}</p>
                                                        </Link>
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    </li>
                                )

                            } else {
                                const isActive = value.url === pathName ? 'active' : ''
                                itemMenu = (
                                    <li className="nav-item" key={key}>
                                        <Link href={value.url} className={"nav-link " + isActive}>
                                            <i className={'nav-icon ' + value.icon}></i>
                                            <p>{value.label}</p>
                                        </Link>
                                    </li>
                                )
                            }

                            return (
                                <>
                                    {itemMenu}
                                </>
                            )
                        })}

                    </ul>
                </nav>
            </div>
            {/* sidebar */}
        </aside>
    )
}