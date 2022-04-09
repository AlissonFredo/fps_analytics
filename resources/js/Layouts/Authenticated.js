import React, { useState } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link } from '@inertiajs/inertia-react';
import Header from './Header';
import Aside from './Aside';
import Content from './Content';
import Footer from './Footer';

export default function Authenticated({ auth, header, children }) {

    return (
        <div className="wrapper">
            <Header />
            <Aside />
            <Content>
                {children}
            </Content>
            <Footer />
        </div>
    );
}
