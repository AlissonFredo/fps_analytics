import React from 'react';
import Header from './Header';
import Aside from './Aside';
import Content from './Content';
import Footer from './Footer';

export default function Authenticated({ auth, children }) {

    return (
        <div className="wrapper">
            <Header auth={auth} />
            <Aside />
            <Content>
                {children}
            </Content>
            <Footer />
        </div>
    );
}
