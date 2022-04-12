import React from "react";
import { Link } from '@inertiajs/inertia-react';

export default function Header({auth}) {
    return (
        // Navbar
        <nav className="main-header navbar navbar-expand navbar-white navbar-light">
            {/* Left navbar links */}
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars"></i></a>
                </li>
                <li className="nav-item d-none d-sm-inline-block">
                    <a href="index3.html" className="nav-link">Home</a>
                </li>
                <li className="nav-item d-none d-sm-inline-block">
                    <a href="#" className="nav-link">Contact</a>
                </li>
            </ul>

            {/* Right navbar links */}
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <a className="nav-link" data-widget="fullscreen" href="#" role="button">
                        <i className="fas fa-expand-arrows-alt"></i>
                    </a>
                </li>

                <li className="nav-item dropdown show">
                    <a className="nav-link" data-toggle="dropdown" href="#" aria-expanded="true">
                        <span className="mr-1">{auth.user.name}</span>
                        <i className="nav-icon fas fa-caret-down"></i>
                    </a>
                    <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right" style={{left: 'inherit', right: '0px'}}>
                        <Link href={route('logout')} className="dropdown-item"> 
                            <i className="nav-icon fas fa-sign-out-alt" />
                            <span className="ml-2">Sair</span>
                        </Link>
                    </div>
                </li>
            </ul>
        </nav>
        // Navbar
    )
}